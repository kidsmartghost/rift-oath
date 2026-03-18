<template>
  <div class="game-container" :style="{ background: currentWorldBg }">
    <!-- 背景层 -->
    <div class="background-layer" :style="{ background: currentWorldBg }"></div>
    
    <!-- 世界主题粒子效果 -->
    <div class="world-particles" :class="currentWorldTheme">
      <div v-for="i in 15" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 对话层 -->
      <div class="dialogue-layer">
        <!-- 场景标题 -->
        <div v-if="currentScene?.title" class="scene-title">
          {{ currentScene.title }}
        </div>
        
        <!-- 说话者名称 -->
        <div v-if="currentScene?.speaker" class="speaker-name">
          {{ currentScene.speaker }}
        </div>
        
        <!-- 对话内容（可滚动） -->
        <div class="dialogue-scroll-wrapper">
          <div class="dialogue-text">
            {{ displayedText }}
            <span v-if="isTyping" class="cursor">▋</span>
          </div>
        </div>
        
        <!-- 继续按钮 -->
        <div v-if="!isTyping && !hasChoices" class="continue-btn-wrapper" @click="onDialogueClick">
          <div class="continue-btn">
            <span>继续</span>
            <span class="continue-arrow">⌄</span>
          </div>
        </div>
      </div>
      
      <!-- 选择支 -->
      <div v-if="hasChoices && !isTyping" class="choices-layer">
        <div 
          v-for="choice in currentScene?.choices" 
          :key="choice.id"
          class="choice-btn"
          :style="{ borderColor: currentWorldAccent }"
          @click="onChoiceClick(choice)"
        >
          {{ choice.text }}
        </div>
      </div>
    </div>
    
    <!-- 菜单按钮 -->
    <div class="menu-btn" @click="showMenu = true">⋮</div>
    
    <!-- 菜单弹窗 -->
    <div v-if="showMenu" class="modal-overlay" @click="showMenu = false">
      <div class="modal-content" @click.stop>
        <div class="menu-item" @click="saveGame">💾 保存游戏</div>
        <div class="menu-item" @click="loadGame">📂 读取游戏</div>
        <div class="menu-item" @click="toggleSpeed">⚡ 速度：{{ typingSpeed }}ms</div>
        <div class="menu-item" @click="goToTitle">🏠 返回标题</div>
        <div class="menu-close" @click="showMenu = false">关闭</div>
      </div>
    </div>

    <!-- 成就解锁通知 -->
    <div v-if="showAchievementNotify" class="achievement-notify" @click="dismissAchievement">
      <div class="achievement-icon">{{ newAchievementData?.icon }}</div>
      <div class="achievement-text">
        <div class="achievement-title">🏆 成就解锁！</div>
        <div class="achievement-name">{{ newAchievementData?.name }}</div>
        <div class="achievement-desc">{{ newAchievementData?.description }}</div>
      </div>
    </div>

    <!-- 存档弹窗 -->
    <div v-if="showSaveLoad" class="modal-overlay" @click="showSaveLoad = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">{{ isSaving ? '保存游戏' : '读取游戏' }}</h3>
        <div class="save-list">
          <div v-for="slot in 3" :key="slot" class="save-item" @click="handleSaveLoad(slot)">
            <div v-if="getSaveInfo(slot)" class="save-info">
              <span class="save-name">存档 {{ slot }}</span>
              <span class="save-detail">{{ formatSaveTime(getSaveInfo(slot)?.timestamp) }}</span>
            </div>
            <span v-else class="empty-save">空存档</span>
          </div>
        </div>
        <div class="modal-close" @click="showSaveLoad = false">关闭</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useGameStore } from '@/stores/game'
import { gameScript } from '@/engine/script'
import { audioManager } from '@/engine/AudioManager'
import { achievements, memoryFragments } from '@/data/achievements'

const gameStore = useGameStore()

const currentScene = ref(null)
const showAchievementNotify = ref(false)
const newAchievementData = ref(null)

// 监听新成就解锁
watch(() => gameStore.newAchievements, (newAch) => {
  if (newAch && newAch.length > 0) {
    const ach = achievements.find(a => a.id === newAch[0])
    if (ach) {
      newAchievementData.value = ach
      showAchievementNotify.value = true
      setTimeout(() => {
        showAchievementNotify.value = false
        gameStore.clearNewAchievements()
      }, 4000)
    }
  }
}, { deep: true })
const displayedText = ref('')
const isTyping = ref(false)
const hasChoices = ref(false)
const showMenu = ref(false)
const showSaveLoad = ref(false)
const isSaving = ref(false)
const typingSpeed = ref(50)

const currentWorldBg = computed(() => {
  if (!currentScene.value) return '#1a0a1f'
  const world = gameScript.worlds.find(w => w.id === currentScene.value.worldId)
  return world?.gradient || world?.backgroundColor || '#1a0a1f'
})

const currentWorldAccent = computed(() => {
  if (!currentScene.value) return '#8b0000'
  const world = gameScript.worlds.find(w => w.id === currentScene.value.worldId)
  return world?.accentColor || '#8b0000'
})

const currentWorldTheme = computed(() => {
  if (!currentScene.value) return 'gothic'
  const world = gameScript.worlds.find(w => w.id === currentScene.value.worldId)
  return world?.theme || 'gothic'
})

function loadScene(sceneId) {
  const scene = gameScript.scenes.find(s => s.id === sceneId)
  if (!scene) {
    console.error('场景不存在:', sceneId)
    return
  }
  
  currentScene.value = scene
  hasChoices.value = !!scene.choices
  
  // 检查是否是结局
  if (scene.type === 'ending') {
    setTimeout(() => {
      audioManager.playEnding()
      gameStore.unlockEnding(scene.id)
      gameStore.checkUnlocks() // 触发成就检测
      if (scene.title?.includes('第') || scene.title?.includes('结局')) {
        alert(`${scene.title}！感谢游玩！`)
      }
    }, 500)
  }
  
  startDialogue(scene.dialogue)
}

function startDialogue(text) {
  displayedText.value = ''
  isTyping.value = true
  
  let index = 0
  const type = () => {
    if (index < text.length) {
      displayedText.value += text[index]
      index++
      setTimeout(type, typingSpeed.value)
    } else {
      isTyping.value = false
      gameStore.completeScene(currentScene.value.id)
    }
  }
  type()
}

function onDialogueClick() {
  audioManager.playClick()
  if (isTyping.value) {
    // 立即显示完整文本
    displayedText.value = currentScene.value.dialogue
    isTyping.value = false
  } else if (!hasChoices.value && currentScene.value?.nextSceneId) {
    loadScene(currentScene.value.nextSceneId)
  }
}

function onChoiceClick(choice) {
  audioManager.playSelect()
  gameStore.makeChoice(choice)
  gameStore.completeScene(currentScene.value.id)
  
  // 检查是否是穿越场景
  if (choice.nextSceneId?.includes('transition') || choice.nextSceneId?.includes('world')) {
    setTimeout(() => audioManager.playTransition(), 300)
  }
  
  if (choice.nextSceneId) {
    loadScene(choice.nextSceneId)
  }
}

function saveGame() {
  showMenu.value = false
  isSaving.value = true
  showSaveLoad.value = true
}

function loadGame() {
  showMenu.value = false
  isSaving.value = false
  showSaveLoad.value = true
}

function handleSaveLoad(slot) {
  if (isSaving.value) {
    const success = gameStore.saveGame(slot)
    alert(success ? '保存成功' : '保存失败')
  } else {
    const success = gameStore.loadGame(slot)
    if (success) {
      loadScene(gameStore.playerState.currentSceneId)
      alert('读取成功')
    } else {
      alert('该存档为空')
    }
  }
  showSaveLoad.value = false
}

function getSaveInfo(slot) {
  return gameStore.getSaveInfo(slot)
}

function formatSaveTime(timestamp) {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}

function toggleSpeed() {
  typingSpeed.value = typingSpeed.value === 50 ? 30 : typingSpeed.value === 30 ? 80 : 50
  if (typingSpeed.value === 30) {
    gameStore.setFastestSpeed()
  }
}

function goToTitle() {
  showMenu.value = false
  // 直接使用 router 导航，不使用 confirm 弹窗
  window.router?.navigateTo('title')
}

function dismissAchievement() {
  showAchievementNotify.value = false
  gameStore.clearNewAchievements()
}

function getParticleStyle(i) {
  const delay = Math.random() * 5
  const duration = 5 + Math.random() * 10
  const left = Math.random() * 100
  const size = 2 + Math.random() * 4
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}px`,
    height: `${size}px`
  }
}

onMounted(() => {
  if (gameStore.isPlaying) {
    loadScene(gameStore.playerState.currentSceneId)
  } else {
    gameStore.startNewGame()
    loadScene(gameStore.playerState.currentSceneId)
  }
})
</script>

<style scoped>
.game-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: background 1.5s ease;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 主内容区 - 包含对话和选择支 */
.main-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
}

/* 世界主题粒子效果 */
.world-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.world-particles .particle {
  position: absolute;
  bottom: -10px;
  border-radius: 50%;
  animation: float-up linear infinite;
}

/* 不同世界的粒子颜色 */
.world-particles.gothic .particle {
  background: rgba(139, 0, 0, 0.6);
  box-shadow: 0 0 10px rgba(139, 0, 0, 0.8);
}

.world-particles.cyberpunk .particle {
  background: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

.world-particles.mythology .particle {
  background: rgba(255, 215, 0, 0.6);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.world-particles.modern .particle {
  background: rgba(255, 105, 180, 0.6);
  box-shadow: 0 0 10px rgba(255, 105, 180, 0.8);
}

.world-particles.void .particle {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.dialogue-layer {
  width: 100%;
  padding: 15px 20px 10px 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, transparent 100%);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
  max-height: 50vh;
}

/* 有选择支时，对话区域收缩留出空间 */
.main-content:has(.choices-layer) .dialogue-layer {
  max-height: 38vh;
  padding-bottom: 5px;
}

.scene-title {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 3px;
  margin-bottom: 12px;
  text-align: center;
  flex-shrink: 0;
}

.speaker-name {
  font-size: 16px;
  font-weight: bold;
  color: #e0d0e8;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  flex-shrink: 0;
}

/* 对话滚动区域 */
.dialogue-scroll-wrapper {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  margin-bottom: 8px;
  padding-right: 5px;
  max-height: 35vh;
  min-height: 80px;
  cursor: text;
}

/* 自定义滚动条 */
.dialogue-scroll-wrapper::-webkit-scrollbar {
  width: 4px;
}

.dialogue-scroll-wrapper::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
}

.dialogue-scroll-wrapper::-webkit-scrollbar-thumb {
  background: rgba(139,0,0,0.6);
  border-radius: 2px;
}

.dialogue-text {
  font-size: 16px;
  line-height: 1.8;
  color: #ffffff;
  white-space: pre-wrap;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  padding: 5px;
  user-select: none;
  -webkit-user-select: none;
}

.cursor {
  animation: blink 1s infinite;
  color: #8b0000;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 继续按钮 */
.continue-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.15);
  flex-shrink: 0;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, rgba(139,0,0,0.6), rgba(107,63,160,0.6));
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 25px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139,0,0,0.4);
  animation: pulse-glow 2s ease-in-out infinite;
}

.continue-btn:hover {
  background: linear-gradient(135deg, rgba(139,0,0,0.8), rgba(107,63,160,0.8));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139,0,0,0.6);
}

.continue-btn:active {
  transform: translateY(0) scale(0.98);
}

.continue-arrow {
  font-size: 18px;
  animation: bounce-arrow 1.5s ease-in-out infinite;
  line-height: 1;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(139,0,0,0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(139,0,0,0.6);
  }
}

@keyframes bounce-arrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

/* 选择支层 - 固定在底部 */
.choices-layer {
  flex-shrink: 0;
  width: 100%;
  padding: 15px 20px 20px 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.9) 100%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 45vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 2px solid rgba(139,0,0,0.3);
  box-shadow: 0 -5px 20px rgba(0,0,0,0.5);
}

.choice-btn {
  background: rgba(0,0,0,0.7);
  border: 2px solid;
  border-radius: 10px;
  padding: 16px 18px;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  flex-shrink: 0;
  /* 防止文字溢出 */
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  line-height: 1.5;
}

.choice-btn:hover {
  background: rgba(139,0,0,0.5);
  transform: translateY(-2px);
}

.choice-btn:active {
  transform: scale(0.98);
}

.menu-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  z-index: 50;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background: rgba(26,10,31,0.95);
  border-radius: 16px;
  padding: 25px;
  width: 85%;
  max-width: 350px;
  border: 1px solid rgba(255,255,255,0.1);
}

.menu-item {
  padding: 15px;
  color: #e0d0e8;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.menu-item:hover {
  background: rgba(139,0,0,0.3);
}

.menu-close, .modal-close {
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  cursor: pointer;
}

.modal-title {
  text-align: center;
  color: #e0d0e8;
  margin: 0 0 20px 0;
  font-size: 18px;
}

.save-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.save-item {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
}

.save-item:hover {
  background: rgba(139,0,0,0.3);
}

.save-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.save-name {
  color: #ffffff;
  font-weight: bold;
}

.save-detail {
  color: rgba(255,255,255,0.5);
  font-size: 12px;
}

.empty-save {
  color: rgba(255,255,255,0.3);
}

/* 成就解锁通知 */
.achievement-notify {
  position: absolute;
  top: 80px;
  right: 20px;
  background: linear-gradient(135deg, rgba(139,0,0,0.95), rgba(107,63,160,0.95));
  border-radius: 12px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 2px solid rgba(255,215,0,0.5);
  box-shadow: 0 0 20px rgba(255,215,0,0.3);
  cursor: pointer;
  z-index: 200;
  animation: slide-in-right 0.5s ease-out;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.achievement-icon {
  font-size: 40px;
  animation: bounce 0.6s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.achievement-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.achievement-title {
  font-size: 12px;
  color: rgba(255,215,0,0.9);
  font-weight: bold;
}

.achievement-name {
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
}

.achievement-desc {
  font-size: 12px;
  color: rgba(255,255,255,0.7);
}

/* ========== 响应式设计 ========== */

/* 平板和桌面端优化 */
@media (min-width: 768px) {
  .dialogue-text {
    font-size: 17px;
    line-height: 2;
  }
  
  .speaker-name {
    font-size: 18px;
  }
  
  .choice-btn {
    font-size: 16px;
    padding: 18px 24px;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
  
  .choices-layer {
    padding: 20px 20px 25px 20px;
    gap: 15px;
  }
  
  .dialogue-scroll-wrapper {
    max-height: 40vh;
  }
  
  .main-content:has(.choices-layer) .dialogue-layer {
    max-height: 45vh;
  }
  
  .continue-btn {
    padding: 12px 32px;
    font-size: 15px;
  }
}

/* 大屏桌面优化 */
@media (min-width: 1024px) {
  .dialogue-text {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .choices-layer {
    align-items: center;
  }
  
  .choice-btn {
    max-width: 700px;
  }
}

/* 小屏手机优化 */
@media (max-height: 600px) {
  .dialogue-layer {
    padding: 12px 15px 5px 15px;
  }
  
  .dialogue-text {
    font-size: 14px;
    line-height: 1.6;
  }
  
  .speaker-name {
    font-size: 14px;
  }
  
  .choice-btn {
    padding: 12px 15px;
    font-size: 14px;
  }
  
  .choices-layer {
    padding: 10px 15px 15px 15px;
    gap: 10px;
  }
  
  .dialogue-scroll-wrapper {
    max-height: 25vh;
  }
  
  .main-content:has(.choices-layer) .dialogue-layer {
    max-height: 28vh;
  }
  
  .continue-btn {
    padding: 8px 20px;
    font-size: 13px;
  }
}

/* 横屏模式优化 */
@media (orientation: landscape) and (max-height: 500px) {
  .scene-title {
    display: none;
  }
  
  .dialogue-text {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .choice-btn {
    padding: 10px 15px;
    font-size: 13px;
  }
  
  .continue-btn {
    padding: 6px 16px;
    font-size: 12px;
  }
  
  .continue-arrow {
    font-size: 14px;
  }
}
</style>

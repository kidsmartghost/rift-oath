<template>
  <div class="game-container" :style="{ background: currentWorldBg }">
    <!-- 场景背景图 -->
    <div v-if="currentBackground" class="background-image" :style="{ backgroundImage: 'url(' + currentBackground + ')' }"></div>
    
    <!-- 背景层（渐变 fallback） -->
    <div class="background-layer" :style="{ background: currentWorldBg, opacity: currentBackground ? 0.3 : 1 }"></div>
    
    <!-- 角色立绘层 -->
    <div class="character-layer">
      <div 
        v-for="(char, index) in currentCharacters" 
        :key="char.id"
        class="character-portrait"
        :style="{ 
          backgroundImage: char.portrait ? 'url(' + char.portrait + ')' : 'none',
          left: getCharacterPosition(index, currentCharacters.length)
        }"
      >
        <!-- 角色名字（可选） -->
        <div v-if="showCharacterNames" class="character-name-tag">{{ char.name }}</div>
      </div>
    </div>
    
    <!-- 世界主题粒子效果 -->
    <div class="world-particles" :class="currentWorldTheme">
      <div v-for="i in 15" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    
    <!-- 属性面板（顶部铺满） -->
    <div class="stats-panel" @click="showStatsDetail = !showStatsDetail">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">🗡️</div>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" :style="{ width: gameStore.playerState.stats.courage + '%' }"></div>
          </div>
          <div class="stat-value">{{ gameStore.playerState.stats.courage }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">📚</div>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" :style="{ width: gameStore.playerState.stats.wisdom + '%' }"></div>
          </div>
          <div class="stat-value">{{ gameStore.playerState.stats.wisdom }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">💝</div>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" :style="{ width: gameStore.playerState.stats.compassion + '%' }"></div>
          </div>
          <div class="stat-value">{{ gameStore.playerState.stats.compassion }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🔥</div>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" :style="{ width: gameStore.playerState.stats.determination + '%' }"></div>
          </div>
          <div class="stat-value">{{ gameStore.playerState.stats.determination }}</div>
        </div>
      </div>
    </div>
    
    <!-- 属性详情弹窗 -->
    <div v-if="showStatsDetail" class="stats-detail-overlay" @click="showStatsDetail = false">
      <div class="stats-detail-content" @click.stop>
        <h3 class="stats-detail-title">角色属性</h3>
        
        <div class="stats-section">
          <h4>基础属性</h4>
          <div class="stats-detail-list">
            <div class="stats-detail-item">
              <span class="stats-detail-label">🗡️ 勇气</span>
              <span class="stats-detail-value">{{ gameStore.playerState.stats.courage }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">📚 智慧</span>
              <span class="stats-detail-value">{{ gameStore.playerState.stats.wisdom }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">💝 同情</span>
              <span class="stats-detail-value">{{ gameStore.playerState.stats.compassion }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">🔥 决心</span>
              <span class="stats-detail-value">{{ gameStore.playerState.stats.determination }}/100</span>
            </div>
          </div>
        </div>
        
        <div class="stats-section">
          <h4>隐藏属性</h4>
          <div class="stats-detail-list">
            <div class="stats-detail-item">
              <span class="stats-detail-label">🌑 腐化度</span>
              <span class="stats-detail-value" :class="{ danger: gameStore.playerState.hiddenStats.corruption > 50 }">{{ gameStore.playerState.hiddenStats.corruption }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">⚡ 混乱度</span>
              <span class="stats-detail-value">{{ gameStore.playerState.hiddenStats.chaos }}/100</span>
            </div>
          </div>
        </div>
        
        <div class="stats-section">
          <h4>世界羁绊</h4>
          <div class="stats-detail-list">
            <div class="stats-detail-item">
              <span class="stats-detail-label">🏰 永夜王国</span>
              <span class="stats-detail-value">{{ gameStore.playerState.bonds.world1 }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">🤖 机械废土</span>
              <span class="stats-detail-value">{{ gameStore.playerState.bonds.world2 }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">⚡ 神弃之地</span>
              <span class="stats-detail-value">{{ gameStore.playerState.bonds.world3 }}/100</span>
            </div>
            <div class="stats-detail-item">
              <span class="stats-detail-label">🏫 学园都市</span>
              <span class="stats-detail-value">{{ gameStore.playerState.bonds.world4 }}/100</span>
            </div>
          </div>
        </div>
        
        <div class="stats-close" @click="showStatsDetail = false">关闭</div>
      </div>
    </div>
    
    <!-- 属性变化通知（屏幕中央小条） -->
    <div v-if="showStatChanges && statChanges.length > 0" class="stat-changes-notify">
      <div v-for="change in statChanges" :key="change.stat" class="stat-change-item" :class="{ hidden: change.hidden }">
        <span class="stat-change-icon">{{ getStatIcon(change.stat) }}</span>
        <span class="stat-change-text">{{ getStatName(change.stat) }}</span>
        <span class="stat-change-delta" :class="{ positive: change.delta > 0, negative: change.delta < 0 }">
          {{ change.delta > 0 ? '+' : '' }}{{ change.delta }}
        </span>
      </div>
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
          :class="{ disabled: !isChoiceAvailableLocal(choice) }"
          :style="{ borderColor: isChoiceAvailableLocal(choice) ? currentWorldAccent : '#555' }"
          @click="onChoiceClick(choice)"
        >
          <div class="choice-text">{{ choice.text }}</div>
          <div v-if="!isChoiceAvailableLocal(choice)" class="choice-locked">
            🔒 需要 {{ getFailedReasonLocal(choice) }}
          </div>
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
// 使用 JSON 加载器替代硬编码 script
import { loadScriptFromJSONs, getScene, getWorld, getDynamicDialogue, isChoiceAvailable, applyChoiceEffects, getLoadedScript } from '@/engine/ScriptLoader'
import { audioManager } from '@/engine/AudioManager'
import { achievements, memoryFragments } from '@/data/achievements'
import { assets, getBackgroundForScene, getCharactersForScene, getBGMForWorld } from '@/data/assets'

const gameStore = useGameStore()

const currentScene = ref(null)
const showAchievementNotify = ref(false)
const newAchievementData = ref(null)

// 属性面板
const showStatsDetail = ref(false)

// 属性变化通知
const showStatChanges = ref(false)
const statChanges = ref([])

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
const typingSpeed = ref(25)  // 从 50ms 加快到 25ms

const currentWorldBg = computed(() => {
  if (!currentScene.value) return '#1a0a1f'
  const world = getWorld(currentScene.value.worldId)
  return world?.gradient || world?.backgroundColor || '#1a0a1f'
})

const currentWorldAccent = computed(() => {
  if (!currentScene.value) return '#8b0000'
  const world = getWorld(currentScene.value.worldId)
  return world?.accentColor || '#8b0000'
})

const currentWorldTheme = computed(() => {
  if (!currentScene.value) return 'gothic'
  const world = getWorld(currentScene.value.worldId)
  return world?.theme || 'gothic'
})

// 剧本加载状态
const scriptLoaded = ref(false)

// 当前背景图
const currentBackground = ref(null)

// 当前角色列表
const currentCharacters = ref([])

// 是否显示角色名字标签
const showCharacterNames = ref(false)

// 计算角色位置（居中分布）
function getCharacterPosition(index, total) {
  if (total === 1) return '50%'
  if (total === 2) return index === 0 ? '35%' : '65%'
  if (total === 3) return ['25%', '50%', '75%'][index]
  return `${30 + (index * 40 / (total - 1))}%`
}

function loadScene(sceneId) {
  console.log('加载场景:', sceneId, '剧本已加载:', scriptLoaded.value)
  
  if (!scriptLoaded.value) {
    console.warn('剧本未加载完成，等待...')
    setTimeout(() => loadScene(sceneId), 500)
    return
  }
  
  const scene = getScene(sceneId)
  console.log('场景数据:', scene ? '找到' : '未找到', sceneId)
  
  if (!scene) {
    console.error('场景不存在:', sceneId)
    console.log('可用场景:', getLoadedScript()?.scenes?.map(s => s.id))
    // 回退到第一个场景
    const firstScene = getLoadedScript()?.scenes?.[0]
    if (firstScene) {
      console.log('使用第一个场景:', firstScene.id)
      loadScene(firstScene.id)
    }
    return
  }
  
  currentScene.value = scene
  hasChoices.value = !!scene.choices
  
  console.log('场景类型:', scene.type, '选择支数量:', scene.choices?.length)
  
  // 加载背景
  const bg = getBackgroundForScene(sceneId)
  currentBackground.value = bg?.image || null
  
  // 加载角色
  currentCharacters.value = getCharactersForScene(sceneId)
  
  // 播放 BGM
  if (scene.worldId) {
    const bgm = getBGMForWorld(scene.worldId)
    if (bgm && audioManager) {
      audioManager.fadeInBGM(bgm, 1500)
    }
  }
  
  // 检查是否是结局
  if (scene.type === 'ending') {
    if (scene.unlockConditions && !checkEndingConditions(scene.unlockConditions)) {
      loadScene('ending_lost')
      return
    }
    
    setTimeout(() => {
      if (audioManager) audioManager.playEnding()
      gameStore.unlockEnding(scene.id)
      gameStore.checkUnlocks()
      if (scene.title?.includes('第') || scene.title?.includes('结局')) {
        alert(`${scene.title}！感谢游玩！`)
      }
    }, 500)
  }
  
  // 获取动态对话（使用 ScriptLoader 的函数）
  const dialogueText = getDynamicDialogue(scene, gameStore.playerState)
  console.log('对话内容:', dialogueText?.substring(0, 50))
  startDialogue(dialogueText)
}

// 检查结局条件
function checkEndingConditions(conditions) {
  if (!conditions) return true
  
  const { met } = gameStore.checkConditions(conditions)
  return met
}



// 获取世界名称


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
  console.log('点击选项:', choice.id, choice.text)
  console.log('选项条件:', choice.conditions)
  console.log('玩家属性:', gameStore.playerState)
  
  // 检查选择是否可用（使用 ScriptLoader 的函数）
  const available = isChoiceAvailable(choice, gameStore.playerState)
  console.log('选项可用:', available)
  
  if (!available) {
    console.log('选项不可用，播放点击音效')
    if (audioManager) audioManager.playClick()
    return
  }
  
  console.log('选项可用，继续处理')
  if (audioManager) audioManager.playSelect()
  
  // 应用效果（使用 ScriptLoader 的函数）
  const changes = applyChoiceEffects(choice, gameStore.playerState)
  console.log('属性变化:', changes)
  
  // 更新场景 ID
  gameStore.playerState.choiceHistory.push(choice.id)
  gameStore.playerState.currentSceneId = choice.nextSceneId
  
  console.log('下一场景 ID:', choice.nextSceneId)
  
  gameStore.completeScene(currentScene.value.id)
  gameStore.checkUnlocks()
  
  // 显示属性变化通知
  if (changes && changes.length > 0) {
    showStatChangesNotification(changes)
  }
  
  // 检查是否是穿越场景
  if (choice.nextSceneId?.includes('transition') || choice.nextSceneId?.includes('world')) {
    setTimeout(() => {
      if (audioManager) audioManager.playTransition()
    }, 300)
  }
  
  if (choice.nextSceneId) {
    console.log('加载下一场景:', choice.nextSceneId)
    loadScene(choice.nextSceneId)
  } else {
    console.warn('没有下一场景 ID!')
  }
}

// 显示属性变化通知
function showStatChangesNotification(changes) {
  statChanges.value = changes
  showStatChanges.value = true
  
  // 3 秒后隐藏
  setTimeout(() => {
    showStatChanges.value = false
    statChanges.value = []
  }, 3000)
}

// 检查选择是否可用（使用 ScriptLoader 的函数）
function isChoiceAvailableLocal(choice) {
  const result = isChoiceAvailable(choice, gameStore.playerState)
  console.log('检查选项可用:', choice.id, result)
  return result
}

// 获取失败原因（使用 ScriptLoader 的函数）
function getFailedReasonLocal(choice) {
  const reason = window.ScriptLoaderUtils?.getChoiceFailedReason 
    ? window.ScriptLoaderUtils.getChoiceFailedReason(choice, gameStore.playerState)
    : '条件不足'
  console.log('失败原因:', reason)
  return reason
}

// 获取属性图标
function getStatIcon(stat) {
  const icons = {
    courage: '🗡️',
    wisdom: '📚',
    compassion: '💝',
    determination: '🔥',
    corruption: '🌑',
    chaos: '⚡',
    bond_world1: '🏰',
    bond_world2: '🤖',
    bond_world3: '⚡',
    bond_world4: '🏫'
  }
  return icons[stat] || '📊'
}

// 获取属性名称
function getStatName(stat) {
  const names = {
    courage: '勇气',
    wisdom: '智慧',
    compassion: '同情',
    determination: '决心',
    corruption: '腐化',
    chaos: '混乱',
    bond_world1: '永夜羁绊',
    bond_world2: '废土羁绊',
    bond_world3: '神域羁绊',
    bond_world4: '学园羁绊'
  }
  return names[stat] || stat
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

onMounted(async () => {
  // 加载 JSON 剧本（第一章 + 第二章）
  const basePath = import.meta.env.BASE_URL || '/'
  await loadScriptFromJSONs([
    `${basePath}data/script_ch1_full.json`,
    `${basePath}data/script_ch2.json`
  ])
  scriptLoaded.value = true
  
  console.log('剧本加载完成:', scriptLoaded.value, getLoadedScript()?.scenes?.length, '个场景')
  
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

.choice-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(0,0,0,0.5);
  border-color: #555 !important;
}

.choice-btn:not(.disabled):hover {
  background: rgba(139,0,0,0.5);
  transform: translateY(-2px);
}

.choice-btn:active {
  transform: scale(0.98);
}

.choice-text {
  margin-bottom: 4px;
}

.choice-locked {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  margin-top: 4px;
}

/* ========== 属性面板 ========== */
.stats-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.75);
  border-bottom: 1px solid rgba(139,0,0,0.5);
  cursor: pointer;
  z-index: 60;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stats-panel:hover {
  background: rgba(0,0,0,0.85);
  border-bottom-color: rgba(139,0,0,0.8);
}

/* 2×2 网格布局 - 横向铺满 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 8px 10px;
  max-width: 500px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 4px 2px;
  transition: all 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 12px;
  line-height: 1;
}

.stat-bar-bg {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
  overflow: hidden;
}

.stat-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #8b0000, #c41e3a);
  border-radius: 2px;
  transition: width 0.5s ease;
}

.stat-value {
  font-size: 11px;
  color: #ffffff;
  font-weight: 700;
  line-height: 1;
}

/* 属性详情弹窗 */
.stats-detail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.stats-detail-content {
  background: rgba(26,10,31,0.98);
  border-radius: 16px;
  padding: 25px;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(139,0,0,0.5);
  max-height: 80vh;
  overflow-y: auto;
}

.stats-detail-title {
  text-align: center;
  color: #e0d0e8;
  font-size: 20px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
}

.stats-section {
  margin-bottom: 20px;
}

.stats-section h4 {
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  margin: 0 0 10px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.stats-detail-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats-detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
}

.stats-detail-label {
  color: #e0d0e8;
  font-size: 14px;
}

.stats-detail-value {
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
}

.stats-detail-value.danger {
  color: #ff4444;
}

.stats-close {
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  font-size: 14px;
}

/* 属性变化通知（屏幕中央小条） */
.stat-changes-notify {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 100;
  animation: fadeInNotify 0.3s ease;
  pointer-events: none;
}

@keyframes fadeInNotify {
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.stat-change-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0,0,0,0.85);
  border: 1px solid rgba(139,0,0,0.5);
  border-radius: 8px;
  font-size: 14px;
  animation: slideInStat 0.4s ease backwards;
  min-width: 160px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.stat-change-item:nth-child(1) { animation-delay: 0s; }
.stat-change-item:nth-child(2) { animation-delay: 0.08s; }
.stat-change-item:nth-child(3) { animation-delay: 0.16s; }
.stat-change-item:nth-child(4) { animation-delay: 0.24s; }

@keyframes slideInStat {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.stat-change-item.hidden {
  opacity: 0.5;
  border-color: rgba(100,100,100,0.3);
  background: rgba(0,0,0,0.7);
}

.stat-change-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.stat-change-text {
  color: #e0d0e8;
  flex: 1;
  font-weight: 500;
}

.stat-change-delta {
  font-weight: 700;
  font-size: 16px;
  padding: 3px 10px;
  border-radius: 4px;
  flex-shrink: 0;
  min-width: 45px;
  text-align: center;
}

.stat-change-delta.positive {
  color: #4ade80;
  background: rgba(74,222,128,0.15);
}

.stat-change-delta.negative {
  color: #f87171;
  background: rgba(248,113,113,0.15);
}

/* ========== 菜单按钮 ========== */
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
  
  /* 桌面端属性面板 */
  .stats-grid {
    max-width: 600px;
    gap: 6px;
    padding: 10px 20px;
  }
  
  .stat-icon {
    font-size: 14px;
  }
  
  .stat-bar-bg {
    height: 5px;
  }
  
  .stat-value {
    font-size: 12px;
  }
  
  /* 桌面端属性变化通知 */
  .stat-change-item {
    font-size: 15px;
    min-width: 180px;
    padding: 10px 18px;
  }
  
  .stat-change-icon {
    font-size: 18px;
  }
  
  .stat-change-delta {
    font-size: 17px;
    padding: 4px 12px;
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

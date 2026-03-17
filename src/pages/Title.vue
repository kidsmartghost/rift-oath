<template>
  <div class="title-container">
    <div class="background">
      <div class="rift-effect"></div>
      <div class="particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
    
    <div class="title-section">
      <h1 class="game-title">裂隙之誓</h1>
      <p class="game-subtitle">RIFT OATH</p>
      <p class="game-tagline">黑暗降临之时，勇者的命运交织</p>
    </div>
    
    <div class="menu-section">
      <div class="menu-btn primary" @click="startNewGame">
        <span>🗡️ 新的旅程</span>
      </div>
      <div class="menu-btn" @click="showContinue = true">
        <span>📖 继续旅程</span>
      </div>
      <div class="menu-btn-row">
        <div class="menu-btn small" @click="goToMemory">
          <span>📖 记忆回廊</span>
        </div>
        <div class="menu-btn small" @click="goToEndings">
          <span>️ 结局画廊</span>
        </div>
        <div class="menu-btn small" @click="goToAchievements">
          <span>🏆 成就</span>
        </div>
      </div>
      <div class="menu-btn" @click="showAbout = true">
        <span>ℹ️ 关于</span>
      </div>
    </div>
    
    <div class="version-info">
      <span>Ver 0.1.0 | 第一章试玩版</span>
    </div>

    <!-- 继续游戏弹窗 -->
    <div v-if="showContinue" class="modal-overlay" @click="showContinue = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">继续旅程</h3>
        <div class="save-list">
          <div v-for="slot in 3" :key="slot" class="save-item" @click="loadGame(slot)">
            <div v-if="getSaveInfo(slot)" class="save-info">
              <span class="save-name">存档 {{ slot }}</span>
              <span class="save-detail">{{ formatSaveTime(getSaveInfo(slot)?.timestamp) }}</span>
            </div>
            <span v-else class="empty-save">空存档</span>
          </div>
        </div>
        <div class="modal-close" @click="showContinue = false">关闭</div>
      </div>
    </div>

    <!-- 关于弹窗 -->
    <div v-if="showAbout" class="modal-overlay" @click="showAbout = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">关于游戏</h3>
        <p class="about-text">
          《裂隙之誓》是一款黑暗奇幻多世界文字冒险游戏。
        </p>
        <p class="about-text">
          玩家扮演一个可以穿越多个平行世界的勇者，每个选择都会影响所有世界的命运。
        </p>
        <p class="about-text" style="margin-top: 15px; color: rgba(255,255,255,0.5); font-size: 13px;">
          引擎：Vue3 + Vite<br/>
          版本：0.1.0 试玩版
        </p>
        <div class="modal-close" @click="showAbout = false">关闭</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import { audioManager } from '@/engine/AudioManager'

const gameStore = useGameStore()
const showContinue = ref(false)
const showAbout = ref(false)

function startNewGame() {
  audioManager.playSelect()
  gameStore.startNewGame()
  window.router?.navigateTo('game')
}

function loadGame(slot) {
  audioManager.playClick()
  const success = gameStore.loadGame(slot)
  if (success) {
    showContinue.value = false
    window.router?.navigateTo('game')
  } else {
    alert('该存档为空')
  }
}

function goToMemory() {
  audioManager.playClick()
  window.router?.navigateTo('memory')
}

function goToEndings() {
  audioManager.playClick()
  window.router?.navigateTo('endings')
}

function goToAchievements() {
  audioManager.playClick()
  window.router?.navigateTo('achievements')
}

function getSaveInfo(slot) {
  return gameStore.getSaveInfo(slot)
}

function formatSaveTime(timestamp) {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
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
</script>

<style scoped>
.title-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 50%, #1a0a1f 100%);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.rift-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse at center, transparent 0%, rgba(139,0,0,0.1) 50%, transparent 100%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

.particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.particle {
  position: absolute;
  bottom: -10px;
  background: rgba(139,0,0,0.6);
  border-radius: 50%;
  animation: float-up linear infinite;
}

@keyframes float-up {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}

.title-section {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.game-title {
  font-size: 56px;
  font-weight: bold;
  color: #e0d0e8;
  text-shadow: 0 0 20px rgba(139,0,0,0.8);
  margin: 0 0 10px 0;
  letter-spacing: 8px;
}

.game-subtitle {
  font-size: 20px;
  color: rgba(224,208,232,0.7);
  letter-spacing: 12px;
  margin: 0 0 20px 0;
}

.game-tagline {
  font-size: 14px;
  color: rgba(224,208,232,0.5);
  letter-spacing: 2px;
}

.menu-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
}

.menu-btn {
  background: rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-btn-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.menu-btn.small {
  flex: 1;
  padding: 12px 8px;
  font-size: 14px;
  margin-bottom: 0;
}

.menu-btn:hover {
  background: rgba(139,0,0,0.3);
}

.menu-btn:active {
  transform: scale(0.98);
}

.menu-btn.primary {
  background: linear-gradient(135deg, rgba(139,0,0,0.6), rgba(107,63,160,0.6));
  border-color: rgba(139,0,0,0.8);
}

.menu-btn span {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 2px;
}

.version-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.3);
  font-size: 12px;
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

.modal-close {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  cursor: pointer;
}

.about-text {
  color: #e0d0e8;
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 10px 0;
}
</style>

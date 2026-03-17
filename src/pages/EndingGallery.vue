<template>
  <div class="ending-gallery">
    <div class="background">
      <div class="particles">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="header">
      <h1 class="title">️ 结局画廊</h1>
      <p class="subtitle">收集所有结局，揭开完整的故事</p>
      <div class="progress-bar">
        <span>已解锁：{{ unlockedCount }} / {{ totalEndings }}</span>
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="filter-bar">
      <button 
        :class="['filter-btn', { active: selectedCategory === 'all' }]"
        @click="selectedCategory = 'all'"
      >
        全部
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'true' }]"
        @click="selectedCategory = 'true'"
      >
        🌟 真结局
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'normal' }]"
        @click="selectedCategory = 'normal'"
      >
        📖 普通结局
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'bad' }]"
        @click="selectedCategory = 'bad'"
      >
        💀 Bad Ending
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'secret' }]"
        @click="selectedCategory = 'secret'"
      >
        🎮 彩蛋
      </button>
    </div>

    <!-- 结局列表 -->
    <div class="ending-grid">
      <div 
        v-for="ending in filteredEndings" 
        :key="ending.id"
        :class="['ending-card', { locked: !isUnlocked(ending) }]"
        @click="viewEnding(ending)"
      >
        <div class="ending-image">
          <div class="ending-icon">
            {{ isUnlocked(ending) ? getEndingIcon(ending.id) : '🔒' }}
          </div>
          <div v-if="isUnlocked(ending)" class="ending-type" :class="ending.type">
            {{ getEndingTypeName(ending.type) }}
          </div>
        </div>
        <div class="ending-info">
          <h3 class="ending-name">{{ ending.name }}</h3>
          <p class="ending-desc">{{ isUnlocked(ending) ? ending.description : '？？？' }}</p>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">← 返回标题</button>

    <!-- 结局详情弹窗 -->
    <div v-if="selectedEnding" class="modal-overlay" @click="selectedEnding = null">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ selectedEnding.name }}</h2>
          <div class="modal-type" :class="selectedEnding.type">
            {{ getEndingTypeName(selectedEnding.type) }}
          </div>
        </div>
        
        <div class="ending-cg-placeholder">
          <div class="cg-icon">{{ getEndingIcon(selectedEnding.id) }}</div>
          <div class="cg-text">结局 CG（待制作）</div>
        </div>

        <p class="modal-desc">{{ selectedEnding.description }}</p>
        
        <div class="modal-tips">
          <strong>💡 解锁提示：</strong>
          <p>{{ getUnlockTip(selectedEnding.id) }}</p>
        </div>

        <button class="modal-close" @click="selectedEnding = null">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { gameScript } from '@/engine/script'

const gameStore = useGameStore()
const selectedCategory = ref('all')
const selectedEnding = ref(null)

const endings = gameScript.endings

const isUnlocked = (ending) => {
  return gameStore.playerState.unlockedEndings?.includes(ending.id) || false
}

const filteredEndings = computed(() => {
  if (selectedCategory.value === 'all') {
    return endings
  }
  return endings.filter(e => e.type === selectedCategory.value)
})

const unlockedCount = computed(() => {
  return endings.filter(e => isUnlocked(e)).length
})

const totalEndings = endings.length

const progressPercent = computed(() => {
  return Math.round((unlockedCount.value / totalEndings) * 100)
})

const getEndingIcon = (endingId) => {
  const icons = {
    'ending_destroyer': '💀',
    'ending_sacrifice': '🕊️',
    'ending_guardian': '🛡️',
    'ending_tyant': '👑',
    'ending_liberator': '🗽',
    'ending_lost': '🌀',
    'ending_true_rebirth': '🌟',
    'ending_true_cycle': '🔄',
    'ending_meta': '🎮'
  }
  return icons[endingId] || '❓'
}

const getEndingTypeName = (type) => {
  const names = {
    'true': '真结局',
    'normal': '普通结局',
    'bad': 'Bad Ending',
    'secret': '彩蛋结局'
  }
  return names[type] || type
}

const getUnlockTip = (endingId) => {
  const tips = {
    'ending_destroyer': '在最终选择毁灭...',
    'ending_sacrifice': '在最终选择牺牲自己...',
    'ending_guardian': '在最终选择守护...',
    'ending_tyant': '接受创造者后选择统治...',
    'ending_liberator': '接受创造者后选择解放...',
    'ending_lost': '在最终无法做出选择...',
    'ending_true_rebirth': '说服创造者创造新纪元...',
    'ending_true_cycle': '挑战创造者，选择轮回...',
    'ending_meta': '在最终之境注意到「屏幕」的另一边...'
  }
  return tips[endingId] || '多尝试不同的选择吧！'
}

const getParticleStyle = (i) => {
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

const viewEnding = (ending) => {
  if (isUnlocked(ending)) {
    selectedEnding.value = ending
  }
}

const goBack = () => {
  window.router?.navigateTo('title')
}
</script>

<style scoped>
.ending-gallery {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 50%, #1a0a1f 100%);
  color: #e0d0e8;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

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

.header {
  position: relative;
  padding: 40px 20px 20px;
  text-align: center;
}

.title {
  font-size: 42px;
  margin: 0 0 10px 0;
  color: #e0d0e8;
  text-shadow: 0 0 20px rgba(139,0,0,0.8);
  letter-spacing: 8px;
}

.subtitle {
  font-size: 16px;
  color: rgba(224,208,232,0.7);
  margin: 0 0 20px 0;
}

.progress-bar {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 24px;
  background: rgba(0,0,0,0.5);
  border-radius: 12px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
}

.progress-bar span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: #ffffff;
  z-index: 1;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(139,0,0,0.8), rgba(107,63,160,0.8));
  transition: width 0.5s ease;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  flex-wrap: wrap;
  position: relative;
}

.filter-btn {
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.2);
  color: #e0d0e8;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.filter-btn:hover {
  background: rgba(139,0,0,0.3);
}

.filter-btn.active {
  background: linear-gradient(135deg, rgba(139,0,0,0.6), rgba(107,63,160,0.6));
  border-color: rgba(139,0,0,0.8);
}

.ending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.ending-card {
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}

.ending-card:hover {
  background: rgba(139,0,0,0.2);
  transform: translateY(-5px);
}

.ending-card.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.ending-card.locked:hover {
  transform: none;
}

.ending-image {
  height: 180px;
  background: rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ending-icon {
  font-size: 60px;
}

.ending-type {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
}

.ending-type.true {
  background: linear-gradient(135deg, rgba(255,215,0,0.8), rgba(255,165,0,0.8));
  color: #000;
}

.ending-type.normal {
  background: rgba(100,100,255,0.6);
  color: #fff;
}

.ending-type.bad {
  background: rgba(139,0,0,0.8);
  color: #fff;
}

.ending-type.secret {
  background: linear-gradient(135deg, rgba(255,105,180,0.8), rgba(139,0,139,0.8));
  color: #fff;
}

.ending-info {
  padding: 20px;
}

.ending-name {
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #ffffff;
}

.ending-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin: 0;
  line-height: 1.6;
}

.back-btn {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.2);
  color: #e0d0e8;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  z-index: 10;
}

.back-btn:hover {
  background: rgba(139,0,0,0.3);
}

.modal-overlay {
  position: fixed;
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
  padding: 30px;
  width: 90%;
  max-width: 500px;
  border: 1px solid rgba(255,255,255,0.1);
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-title {
  font-size: 24px;
  color: #e0d0e8;
  margin: 0;
}

.modal-type {
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
}

.modal-type.true {
  background: linear-gradient(135deg, rgba(255,215,0,0.8), rgba(255,165,0,0.8));
  color: #000;
}

.modal-type.normal {
  background: rgba(100,100,255,0.6);
  color: #fff;
}

.modal-type.bad {
  background: rgba(139,0,0,0.8);
  color: #fff;
}

.modal-type.secret {
  background: linear-gradient(135deg, rgba(255,105,180,0.8), rgba(139,0,139,0.8));
  color: #fff;
}

.ending-cg-placeholder {
  background: rgba(0,0,0,0.4);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px dashed rgba(255,255,255,0.2);
}

.cg-icon {
  font-size: 60px;
  margin-bottom: 10px;
}

.cg-text {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
}

.modal-desc {
  font-size: 16px;
  color: #ffffff;
  line-height: 1.8;
  margin: 0 0 20px 0;
}

.modal-tips {
  background: rgba(139,0,0,0.2);
  border-left: 3px solid rgba(139,0,0,0.6);
  padding: 15px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 20px;
}

.modal-tips strong {
  color: rgba(139,0,0,0.8);
  display: block;
  margin-bottom: 8px;
}

.modal-tips p {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin: 0;
}

.modal-close {
  width: 100%;
  background: rgba(139,0,0,0.3);
  border: none;
  color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.modal-close:hover {
  background: rgba(139,0,0,0.5);
}
</style>

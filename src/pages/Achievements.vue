<template>
  <div class="achievements-page">
    <div class="background">
      <div class="particles">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="header">
      <h1 class="title">🏆 成就系统</h1>
      <p class="subtitle">挑战自我，解锁所有成就</p>
      <div class="progress-bar">
        <span>{{ unlockedCount }} / {{ totalAchievements }}</span>
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
        :class="['filter-btn', { active: selectedCategory === 'story' }]"
        @click="selectedCategory = 'story'"
      >
        📖 剧情
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'ending' }]"
        @click="selectedCategory = 'ending'"
      >
        ️ 结局
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'collection' }]"
        @click="selectedCategory = 'collection'"
      >
        📚 收集
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'choice' }]"
        @click="selectedCategory = 'choice'"
      >
        ⚡ 选择
      </button>
      <button 
        :class="['filter-btn', { active: selectedCategory === 'special' }]"
        @click="selectedCategory = 'special'"
      >
        🌟 特殊
      </button>
    </div>

    <!-- 成就列表 -->
    <div class="achievements-grid">
      <div 
        v-for="achievement in filteredAchievements" 
        :key="achievement.id"
        :class="['achievement-card', { unlocked: isUnlocked(achievement) }]"
      >
        <div class="achievement-icon">
          {{ achievement.icon }}
        </div>
        <div class="achievement-info">
          <h3 class="achievement-name">{{ achievement.name }}</h3>
          <p class="achievement-desc">{{ achievement.description }}</p>
          <div class="achievement-category">{{ getCategoryName(achievement.category) }}</div>
        </div>
        <div v-if="isUnlocked(achievement)" class="checkmark">✅</div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">← 返回标题</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { achievements } from '@/data/achievements'

const gameStore = useGameStore()
const selectedCategory = ref('all')

const isUnlocked = (achievement) => {
  return gameStore.playerState.unlockedAchievements?.includes(achievement.id) || false
}

const filteredAchievements = computed(() => {
  if (selectedCategory.value === 'all') {
    return achievements
  }
  return achievements.filter(a => a.category === selectedCategory.value)
})

const unlockedCount = computed(() => {
  return achievements.filter(a => isUnlocked(a)).length
})

const totalAchievements = achievements.length

const progressPercent = computed(() => {
  return Math.round((unlockedCount.value / totalAchievements) * 100)
})

const getCategoryName = (category) => {
  const names = {
    'story': '剧情成就',
    'ending': '结局成就',
    'collection': '收集成就',
    'choice': '选择成就',
    'special': '特殊成就'
  }
  return names[category] || category
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

const goBack = () => {
  window.router?.navigateTo('title')
}
</script>

<style scoped>
.achievements-page {
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
  background: linear-gradient(90deg, rgba(255,215,0,0.8), rgba(255,165,0,0.8));
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
  background: linear-gradient(135deg, rgba(255,215,0,0.6), rgba(255,165,0,0.6));
  border-color: rgba(255,215,0,0.8);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.achievement-card {
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  transition: all 0.3s;
  position: relative;
}

.achievement-card.unlocked {
  background: rgba(255,215,0,0.1);
  border-color: rgba(255,215,0,0.3);
}

.achievement-card:hover {
  transform: translateY(-3px);
}

.achievement-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.achievement-info {
  flex: 1;
}

.achievement-name {
  font-size: 18px;
  margin: 0 0 6px 0;
  color: #ffffff;
}

.achievement-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin: 0 0 8px 0;
  line-height: 1.5;
}

.achievement-category {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  background: rgba(0,0,0,0.3);
  padding: 3px 8px;
  border-radius: 10px;
  display: inline-block;
}

.checkmark {
  font-size: 24px;
  flex-shrink: 0;
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
</style>

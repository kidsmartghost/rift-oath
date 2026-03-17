<template>
  <div class="memory-corridor">
    <div class="background">
      <div class="particles">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="header">
      <h1 class="title">📖 记忆回廊</h1>
      <p class="subtitle">回顾已解锁的剧情片段</p>
      <div class="progress-bar">
        <span>解锁进度：{{ unlockedCount }} / {{ totalMemories }}</span>
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <!-- 世界筛选 -->
    <div class="filter-bar">
      <button 
        :class="['filter-btn', { active: selectedWorld === 'all' }]"
        @click="selectedWorld = 'all'"
      >
        全部
      </button>
      <button 
        v-for="world in worlds" 
        :key="world.id"
        :class="['filter-btn', { active: selectedWorld === world.id }]"
        @click="selectedWorld = world.id"
      >
        {{ world.name }}
      </button>
    </div>

    <!-- 记忆列表 -->
    <div class="memory-grid">
      <div 
        v-for="memory in filteredMemories" 
        :key="memory.id"
        :class="['memory-card', { locked: !isUnlocked(memory) }]"
        @click="viewMemory(memory)"
      >
        <div class="memory-icon">
          {{ isUnlocked(memory) ? memory.worldIcon : '🔒' }}
        </div>
        <div class="memory-info">
          <h3 class="memory-title">{{ memory.title }}</h3>
          <p class="memory-desc">{{ isUnlocked(memory) ? memory.description : '？？？' }}</p>
        </div>
        <div v-if="isUnlocked(memory)" class="memory-world">
          {{ getWorldName(memory.worldId) }}
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">← 返回标题</button>

    <!-- 记忆详情弹窗 -->
    <div v-if="selectedMemory" class="modal-overlay" @click="selectedMemory = null">
      <div class="modal-content" @click.stop>
        <h2 class="modal-title">{{ selectedMemory.title }}</h2>
        <div class="modal-world">{{ getWorldName(selectedMemory.worldId) }}</div>
        <p class="modal-desc">{{ selectedMemory.description }}</p>
        <div class="modal-scene">
          <strong>相关场景：</strong> {{ selectedMemory.sceneId }}
        </div>
        <button class="modal-close" @click="selectedMemory = null">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { memoryFragments } from '@/data/achievements'

const gameStore = useGameStore()
const selectedWorld = ref('all')
const selectedMemory = ref(null)

const worlds = [
  { id: 'world1', name: '永夜王国', icon: '⚔️' },
  { id: 'world2', name: '机械废土', icon: '🤖' },
  { id: 'world3', name: '神弃之地', icon: '👼' },
  { id: 'world4', name: '学园都市', icon: '📚' },
  { id: 'world5', name: '初始之境', icon: '✨' }
]

const worldIcons = {
  world1: '⚔️',
  world2: '🤖',
  world3: '👼',
  world4: '📚',
  world5: '✨'
}

const isUnlocked = (memory) => {
  return gameStore.playerState.unlockedMemories?.includes(memory.id) || false
}

const filteredMemories = computed(() => {
  if (selectedWorld.value === 'all') {
    return memoryFragments
  }
  return memoryFragments.filter(m => m.worldId === selectedWorld.value)
})

const unlockedCount = computed(() => {
  return memoryFragments.filter(m => isUnlocked(m)).length
})

const totalMemories = memoryFragments.length

const progressPercent = computed(() => {
  return Math.round((unlockedCount.value / totalMemories) * 100)
})

const getWorldName = (worldId) => {
  const world = worlds.find(w => w.id === worldId)
  return world ? world.name : '未知'
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

const viewMemory = (memory) => {
  if (isUnlocked(memory)) {
    selectedMemory.value = memory
  }
}

const goBack = () => {
  window.router?.navigateTo('title')
}
</script>

<style scoped>
.memory-corridor {
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

.memory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.memory-card {
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.memory-card:hover {
  background: rgba(139,0,0,0.2);
  transform: translateY(-5px);
}

.memory-card.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.memory-card.locked:hover {
  transform: none;
}

.memory-icon {
  font-size: 40px;
  text-align: center;
}

.memory-info {
  flex: 1;
}

.memory-title {
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #ffffff;
}

.memory-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin: 0;
  line-height: 1.6;
}

.memory-world {
  font-size: 12px;
  color: rgba(139,0,0,0.8);
  text-align: right;
  font-weight: bold;
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
}

.modal-title {
  font-size: 24px;
  color: #e0d0e8;
  margin: 0 0 10px 0;
  text-align: center;
}

.modal-world {
  text-align: center;
  font-size: 14px;
  color: rgba(139,0,0,0.8);
  margin-bottom: 20px;
  font-weight: bold;
}

.modal-desc {
  font-size: 16px;
  color: #ffffff;
  line-height: 1.8;
  margin: 0 0 20px 0;
}

.modal-scene {
  background: rgba(0,0,0,0.3);
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
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

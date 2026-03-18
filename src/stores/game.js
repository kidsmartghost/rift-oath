import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { achievements, memoryFragments, checkAchievements, checkMemoryFragments } from '@/data/achievements'

export const useGameStore = defineStore('game', () => {
  const playerState = ref({
    currentSceneId: 'scene_001',
    completedScenes: [],
    choiceHistory: [],
    // 基础属性
    stats: { 
      courage: 50,      // 勇气
      wisdom: 50,       // 智慧
      compassion: 50,   // 同情
      determination: 50 // 决心
    },
    // 隐藏属性
    hiddenStats: {
      corruption: 0,    // 腐化度 (0-100)
      chaos: 0          // 混乱度 (0-100)
    },
    // 羁绊值
    bonds: {
      world1: 0,  // 永夜王国
      world2: 0,  // 机械废土
      world3: 0,  // 神弃之地
      world4: 0   // 学园都市
    },
    unlockedEndings: [],
    unlockedAchievements: [],
    unlockedMemories: [],
    saveCount: 0,
    loadCount: 0,
    fastestSpeedUsed: false
  })
  
  const isPlaying = ref(false)
  const currentDialogue = ref('')
  const isTyping = ref(false)
  const newAchievements = ref([]) // 新解锁的成就（用于通知）

  // 计算属性：已解锁的记忆碎片
  const unlockedMemories = computed(() => {
    return memoryFragments.filter(f => 
      playerState.value.unlockedMemories?.includes(f.id)
    )
  })

  // 计算属性：已解锁的成就
  const unlockedAchievementsList = computed(() => {
    return achievements.filter(a => 
      playerState.value.unlockedAchievements?.includes(a.id)
    )
  })

  // 计算属性：成就完成度
  const achievementProgress = computed(() => {
    return {
      current: playerState.value.unlockedAchievements?.length || 0,
      total: achievements.length
    }
  })

  // 计算属性：结局收集度
  const endingProgress = computed(() => {
    return {
      current: playerState.value.unlockedEndings?.length || 0,
      total: 9
    }
  })

  function startNewGame() {
    playerState.value = {
      currentSceneId: 'scene_001',
      completedScenes: [],
      choiceHistory: [],
      stats: { courage: 50, wisdom: 50, compassion: 50, determination: 50 },
      hiddenStats: { corruption: 0, chaos: 0 },
      bonds: { world1: 0, world2: 0, world3: 0, world4: 0 },
      unlockedEndings: playerState.value.unlockedEndings || [],
      unlockedAchievements: playerState.value.unlockedAchievements || [],
      unlockedMemories: playerState.value.unlockedMemories || [],
      saveCount: playerState.value.saveCount || 0,
      loadCount: playerState.value.loadCount || 0,
      fastestSpeedUsed: playerState.value.fastestSpeedUsed || false
    }
    newAchievements.value = []
    isPlaying.value = true
  }

  // 应用属性效果
  function applyEffects(effects) {
    if (!effects) return []
    
    const changes = []
    
    // 应用基础属性
    if (effects.stats) {
      Object.entries(effects.stats).forEach(([key, value]) => {
        if (playerState.value.stats.hasOwnProperty(key)) {
          const oldVal = playerState.value.stats[key]
          playerState.value.stats[key] = Math.max(0, Math.min(100, oldVal + value))
          const newVal = playerState.value.stats[key]
          if (value !== 0) {
            changes.push({ 
              stat: key, 
              delta: value,
              from: oldVal,
              to: newVal
            })
          }
        }
      })
    }
    
    // 应用隐藏属性
    if (effects.hiddenStats) {
      Object.entries(effects.hiddenStats).forEach(([key, value]) => {
        if (playerState.value.hiddenStats.hasOwnProperty(key)) {
          const oldVal = playerState.value.hiddenStats[key]
          playerState.value.hiddenStats[key] = Math.max(0, Math.min(100, oldVal + value))
          const newVal = playerState.value.hiddenStats[key]
          if (value !== 0) {
            changes.push({ 
              stat: key, 
              delta: value,
              from: oldVal,
              to: newVal,
              hidden: true
            })
          }
        }
      })
    }
    
    // 应用羁绊值
    if (effects.bonds) {
      Object.entries(effects.bonds).forEach(([key, value]) => {
        if (playerState.value.bonds.hasOwnProperty(key)) {
          const oldVal = playerState.value.bonds[key]
          playerState.value.bonds[key] = Math.max(0, Math.min(100, oldVal + value))
          const newVal = playerState.value.bonds[key]
          if (value !== 0) {
            changes.push({ 
              stat: `bond_${key}`, 
              delta: value,
              from: oldVal,
              to: newVal
            })
          }
        }
      })
    }
    
    return changes
  }
  
  // 检查条件是否满足
  function checkConditions(conditions) {
    if (!conditions) return { met: true, failed: [] }
    
    const failed = []
    
    // 检查基础属性
    if (conditions.stats) {
      Object.entries(conditions.stats).forEach(([key, req]) => {
        const val = playerState.value.stats[key]
        if (req.min !== undefined && val < req.min) {
          failed.push({ stat: key, required: `≥${req.min}`, current: val })
        }
        if (req.max !== undefined && val > req.max) {
          failed.push({ stat: key, required: `≤${req.max}`, current: val })
        }
      })
    }
    
    // 检查隐藏属性
    if (conditions.hiddenStats) {
      Object.entries(conditions.hiddenStats).forEach(([key, req]) => {
        const val = playerState.value.hiddenStats[key]
        if (req.min !== undefined && val < req.min) {
          failed.push({ stat: key, required: `≥${req.min}`, current: val, hidden: true })
        }
        if (req.max !== undefined && val > req.max) {
          failed.push({ stat: key, required: `≤${req.max}`, current: val, hidden: true })
        }
      })
    }
    
    // 检查羁绊值
    if (conditions.bonds) {
      Object.entries(conditions.bonds).forEach(([key, req]) => {
        const val = playerState.value.bonds[key]
        if (req.min !== undefined && val < req.min) {
          failed.push({ stat: `bond_${key}`, required: `≥${req.min}`, current: val })
        }
      })
    }
    
    return { met: failed.length === 0, failed }
  }
  
  function makeChoice(choice) {
    playerState.value.choiceHistory.push(choice.id)
    
    // 应用效果
    const changes = applyEffects(choice.effects)
    
    // 确定下一场景
    let nextSceneId = choice.nextSceneId
    
    // 如果有条件检查，根据结果选择场景
    if (choice.conditions) {
      const { met } = checkConditions(choice.conditions)
      if (!met && choice.fallbackSceneId) {
        nextSceneId = choice.fallbackSceneId
      }
    }
    
    playerState.value.currentSceneId = nextSceneId
    
    // 返回变化用于显示
    return changes
  }

  function completeScene(sceneId) {
    if (!playerState.value.completedScenes.includes(sceneId)) {
      playerState.value.completedScenes.push(sceneId)
    }
    checkUnlocks()
  }

  // 记录结局解锁
  function unlockEnding(endingId) {
    if (!playerState.value.unlockedEndings.includes(endingId)) {
      playerState.value.unlockedEndings.push(endingId)
      checkUnlocks()
    }
  }

  // 检查成就和记忆解锁
  function checkUnlocks() {
    // 检查成就
    const newlyUnlockedAchievements = checkAchievements(playerState.value)
      .filter(id => !playerState.value.unlockedAchievements.includes(id))
    
    if (newlyUnlockedAchievements.length > 0) {
      playerState.value.unlockedAchievements.push(...newlyUnlockedAchievements)
      newAchievements.value = newlyUnlockedAchievements
      // 保存游戏时自动保存成就进度
      saveGame(0) // slot 0 是自动保存
    }

    // 检查记忆碎片
    const newlyUnlockedMemories = checkMemoryFragments(playerState.value)
      .filter(id => !playerState.value.unlockedMemories.includes(id))
    
    if (newlyUnlockedMemories.length > 0) {
      playerState.value.unlockedMemories.push(...newlyUnlockedMemories)
      saveGame(0)
    }
  }

  // 清除新成就通知
  function clearNewAchievements() {
    newAchievements.value = []
  }

  function saveGame(slot = 1) {
    try {
      localStorage.setItem(`rift-oath-save-${slot}`, JSON.stringify({
        slot,
        timestamp: Date.now(),
        state: playerState.value
      }))
      if (slot !== 0) { // slot 0 是自动保存，不计入成就
        playerState.value.saveCount = (playerState.value.saveCount || 0) + 1
        checkUnlocks()
      }
      return true
    } catch (e) {
      return false
    }
  }

  function loadGame(slot = 1) {
    try {
      const data = localStorage.getItem(`rift-oath-save-${slot}`)
      if (!data) return false
      const parsed = JSON.parse(data)
      playerState.value = parsed.state
      playerState.value.loadCount = (playerState.value.loadCount || 0) + 1
      checkUnlocks()
      isPlaying.value = true
      return true
    } catch (e) {
      return false
    }
  }

  function getSaveInfo(slot = 1) {
    try {
      const data = localStorage.getItem(`rift-oath-save-${slot}`)
      return data ? JSON.parse(data) : null
    } catch (e) {
      return null
    }
  }

  function setFastestSpeed() {
    playerState.value.fastestSpeedUsed = true
    checkUnlocks()
  }

  return {
    playerState,
    isPlaying,
    currentDialogue,
    isTyping,
    newAchievements,
    unlockedMemories,
    unlockedAchievementsList,
    achievementProgress,
    endingProgress,
    startNewGame,
    makeChoice,
    applyEffects,
    checkConditions,
    completeScene,
    unlockEnding,
    checkUnlocks,
    clearNewAchievements,
    saveGame,
    loadGame,
    getSaveInfo,
    setFastestSpeed
  }
})

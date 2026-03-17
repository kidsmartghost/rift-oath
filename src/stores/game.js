import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { achievements, memoryFragments, checkAchievements, checkMemoryFragments } from '@/data/achievements'

export const useGameStore = defineStore('game', () => {
  const playerState = ref({
    currentSceneId: 'scene_001',
    completedScenes: [],
    choiceHistory: [],
    stats: { courage: 50, wisdom: 50, compassion: 50, determination: 50 },
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

  function makeChoice(choice) {
    playerState.value.choiceHistory.push(choice.id)
    playerState.value.currentSceneId = choice.nextSceneId
    checkUnlocks()
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

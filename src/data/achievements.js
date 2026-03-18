// 成就系统数据

export const achievements = [
  // 剧情进度成就
  {
    id: 'first_steps',
    name: '第一步',
    description: '开始游戏',
    icon: '👣',
    category: '剧情',
    condition: (state) => state.completedScenes.length >= 1
  },
  {
    id: 'chapter1_clear',
    name: '觉醒者',
    description: '完成第一章',
    icon: '⚔️',
    category: '剧情',
    condition: (state) => state.completedScenes.includes('scene_031')
  },
  {
    id: 'chapter2_clear',
    name: '觉醒机器',
    description: '完成第二章',
    icon: '🤖',
    category: '剧情',
    condition: (state) => state.completedScenes.includes('scene_091')
  },
  {
    id: 'chapter3_clear',
    name: '半神',
    description: '完成第三章',
    icon: '⚡',
    category: '剧情',
    condition: (state) => state.completedScenes.includes('scene_105')
  },
  {
    id: 'chapter4_clear',
    name: '穿越者',
    description: '完成第四章',
    icon: '📚',
    category: '剧情',
    condition: (state) => state.completedScenes.includes('scene_155')
  },
  {
    id: 'game_clear',
    name: '完整体',
    description: '完成游戏（任意结局）',
    icon: '✨',
    category: '剧情',
    condition: (state) => state.unlockedEndings.length >= 1
  },
  
  // 属性成就
  {
    id: 'brave_heart',
    name: '勇者之心',
    description: '勇气达到 100',
    icon: '🗡️',
    category: '属性',
    condition: (state) => state.stats.courage >= 100
  },
  {
    id: 'wise_sage',
    name: '智者',
    description: '智慧达到 100',
    icon: '📚',
    category: '属性',
    condition: (state) => state.stats.wisdom >= 100
  },
  {
    id: 'kind_soul',
    name: '仁慈之心',
    description: '同情达到 100',
    icon: '💝',
    category: '属性',
    condition: (state) => state.stats.compassion >= 100
  },
  {
    id: 'iron_will',
    name: '钢铁意志',
    description: '决心达到 100',
    icon: '🔥',
    category: '属性',
    condition: (state) => state.stats.determination >= 100
  },
  {
    id: 'all_stats_max',
    name: '完美',
    description: '所有基础属性达到 100',
    icon: '💎',
    category: '属性',
    condition: (state) => 
      state.stats.courage >= 100 &&
      state.stats.wisdom >= 100 &&
      state.stats.compassion >= 100 &&
      state.stats.determination >= 100
  },
  
  // 隐藏属性成就
  {
    id: 'dark_path',
    name: '堕落',
    description: '腐化度达到 50',
    icon: '🌑',
    category: '隐藏',
    condition: (state) => state.hiddenStats.corruption >= 50
  },
  {
    id: 'chaos_bringer',
    name: '混乱使者',
    description: '混乱度达到 50',
    icon: '⚡',
    category: '隐藏',
    condition: (state) => state.hiddenStats.chaos >= 50
  },
  {
    id: 'pure_soul',
    name: '纯净之魂',
    description: '腐化度保持 0 通关',
    icon: '✨',
    category: '隐藏',
    condition: (state) => 
      state.hiddenStats.corruption === 0 &&
      state.unlockedEndings.length >= 1
  },
  
  // 羁绊成就
  {
    id: 'world1_bond',
    name: '永夜羁绊',
    description: '永夜王国羁绊达到 50',
    icon: '🏰',
    category: '羁绊',
    condition: (state) => state.bonds.world1 >= 50
  },
  {
    id: 'world2_bond',
    name: '废土羁绊',
    description: '机械废土羁绊达到 50',
    icon: '🤖',
    category: '羁绊',
    condition: (state) => state.bonds.world2 >= 50
  },
  {
    id: 'world3_bond',
    name: '神之羁绊',
    description: '神弃之地羁绊达到 50',
    icon: '⚡',
    category: '羁绊',
    condition: (state) => state.bonds.world3 >= 50
  },
  {
    id: 'world4_bond',
    name: '学园羁绊',
    description: '学园都市羁绊达到 50',
    icon: '📚',
    category: '羁绊',
    condition: (state) => state.bonds.world4 >= 50
  },
  {
    id: 'all_bonds',
    name: '全羁绊',
    description: '所有世界羁绊达到 50',
    icon: '💞',
    category: '羁绊',
    condition: (state) => 
      state.bonds.world1 >= 50 &&
      state.bonds.world2 >= 50 &&
      state.bonds.world3 >= 50 &&
      state.bonds.world4 >= 50
  },
  
  // 结局成就
  {
    id: 'ending_destroyer',
    name: '毁灭者',
    description: '解锁毁灭结局',
    icon: '💀',
    category: '结局',
    condition: (state) => state.unlockedEndings.includes('ending_destroyer') || state.unlockedEndings.includes('ending_final_destroy')
  },
  {
    id: 'ending_guardian',
    name: '守护者',
    description: '解锁守护结局',
    icon: '🛡️',
    category: '结局',
    condition: (state) => state.unlockedEndings.includes('ending_guardian') || state.unlockedEndings.includes('ending_final_guardian')
  },
  {
    id: 'ending_sacrifice',
    name: '牺牲者',
    description: '解锁牺牲结局',
    icon: '🕊️',
    category: '结局',
    condition: (state) => state.unlockedEndings.includes('ending_sacrifice') || state.unlockedEndings.includes('ending_final_sacrifice')
  },
  {
    id: 'ending_rebirth',
    name: '创世纪',
    description: '解锁真结局：创世纪',
    icon: '🌟',
    category: '结局',
    condition: (state) => state.unlockedEndings.includes('ending_true_rebirth')
  },
  {
    id: 'ending_cycle',
    name: '轮回',
    description: '解锁真结局：轮回',
    icon: '🔄',
    category: '结局',
    condition: (state) => state.unlockedEndings.includes('ending_true_cycle') || state.unlockedEndings.includes('ending_final_reincarnate')
  },
  
  // 收集成就
  {
    id: 'collector_1',
    name: '收藏家 I',
    description: '解锁 3 个结局',
    icon: '📦',
    category: '收集',
    condition: (state) => state.unlockedEndings.length >= 3
  },
  {
    id: 'collector_2',
    name: '收藏家 II',
    description: '解锁 6 个结局',
    icon: '📦📦',
    category: '收集',
    condition: (state) => state.unlockedEndings.length >= 6
  },
  {
    id: 'collector_3',
    name: '收藏家 III',
    description: '解锁 10 个结局',
    icon: '📦📦📦',
    category: '收集',
    condition: (state) => state.unlockedEndings.length >= 10
  },
  {
    id: 'all_endings',
    name: '全结局',
    description: '解锁所有结局',
    icon: '👑',
    category: '收集',
    condition: (state) => state.unlockedEndings.length >= 18
  },
  
  // 存档成就
  {
    id: 'saver_1',
    name: '谨慎者',
    description: '存档 10 次',
    icon: '💾',
    category: '存档',
    condition: (state) => state.saveCount >= 10
  },
  {
    id: 'saver_2',
    name: '记录者',
    description: '存档 50 次',
    icon: '💾💾',
    category: '存档',
    condition: (state) => state.saveCount >= 50
  },
  
  // 特殊成就
  {
    id: 'speedrun',
    name: '速通',
    description: '使用 2 倍速完成游戏',
    icon: '⚡',
    category: '特殊',
    condition: (state) => state.fastestSpeedUsed === true
  },
  {
    id: 'first_blood',
    name: '首杀',
    description: '第一次战斗胜利',
    icon: '⚔️',
    category: '特殊',
    condition: (state) => state.completedScenes.includes('scene_009')
  },
  {
    id: 'peaceful',
    name: '和平主义者',
    description: '通过说服解决战斗',
    icon: '🕊️',
    category: '特殊',
    condition: (state) => 
      state.completedScenes.includes('scene_042_world2_persuade') ||
      state.completedScenes.includes('scene_084_world3_persuade')
  }
]

// 记忆碎片数据
export const memoryFragments = [
  {
    id: 'memory_001',
    name: '教堂觉醒',
    description: '艾莉娅在教堂中醒来',
    icon: '🏰',
    unlockCondition: (state) => state.completedScenes.includes('scene_001')
  },
  {
    id: 'memory_002',
    name: '圣骑士',
    description: '得知自己是圣骑士',
    icon: '⚔️',
    unlockCondition: (state) => state.completedScenes.includes('scene_005')
  },
  {
    id: 'memory_003',
    name: '机器觉醒',
    description: 'K-7 在废墟中睁开眼睛',
    icon: '🤖',
    unlockCondition: (state) => state.completedScenes.includes('scene_032')
  },
  {
    id: 'memory_004',
    name: 'Eve-9',
    description: '遇见反抗军侦察兵',
    icon: '💝',
    unlockCondition: (state) => state.completedScenes.includes('scene_034')
  },
  {
    id: 'memory_005',
    name: '半神',
    description: '洛恩在神殿中坠落',
    icon: '⚡',
    unlockCondition: (state) => state.completedScenes.includes('scene_056')
  },
  {
    id: 'memory_006',
    name: '米迦勒',
    description: '最后的天使',
    icon: '👼',
    unlockCondition: (state) => state.completedScenes.includes('scene_058')
  },
  {
    id: 'memory_007',
    name: '日常',
    description: '林小满在课堂醒来',
    icon: '📚',
    unlockCondition: (state) => state.completedScenes.includes('scene_106')
  },
  {
    id: 'memory_008',
    name: '观察者',
    description: '神秘的存在',
    icon: '👁️',
    unlockCondition: (state) => state.completedScenes.includes('scene_110_world4_meet')
  },
  {
    id: 'memory_009',
    name: '创造者',
    description: '真相揭露',
    icon: '✨',
    unlockCondition: (state) => state.completedScenes.includes('scene_158_world5')
  },
  {
    id: 'memory_010',
    name: '完整',
    description: '所有碎片汇聚',
    icon: '💎',
    unlockCondition: (state) => state.unlockedEndings.length >= 1
  }
]

// 检查成就解锁
export function checkAchievements(state) {
  const unlocked = []
  achievements.forEach(achievement => {
    if (achievement.condition(state)) {
      unlocked.push(achievement.id)
    }
  })
  return unlocked
}

// 检查记忆碎片解锁
export function checkMemoryFragments(state) {
  const unlocked = []
  memoryFragments.forEach(memory => {
    if (memory.unlockCondition(state)) {
      unlocked.push(memory.id)
    }
  })
  return unlocked
}

// 按分类获取成就
export function getAchievementsByCategory(category) {
  return achievements.filter(a => a.category === category)
}

// 获取成就分类列表
export function getAchievementCategories() {
  const categories = new Set(achievements.map(a => a.category))
  return Array.from(categories)
}

/**
 * 成就系统数据
 */
export const achievements = [
  // ========== 剧情成就 ==========
  {
    id: 'ach_001',
    name: '觉醒',
    description: '完成第一章：觉醒',
    icon: '⚔️',
    category: 'story',
    condition: (state) => state.completedScenes.includes('scene_011_transition')
  },
  {
    id: 'ach_002',
    name: '机械之心',
    description: '完成第二章：废墟',
    icon: '🤖',
    category: 'story',
    condition: (state) => state.completedScenes.includes('scene_030_ch2_transition')
  },
  {
    id: 'ach_003',
    name: '神陨见证者',
    description: '完成第三章：神陨',
    icon: '👼',
    category: 'story',
    condition: (state) => state.completedScenes.includes('scene_040_ch3_transition')
  },
  {
    id: 'ach_004',
    name: '日常终结',
    description: '完成第四章：日常',
    icon: '📚',
    category: 'story',
    condition: (state) => state.completedScenes.includes('scene_050_ch4_transition')
  },
  {
    id: 'ach_005',
    name: '真相探寻者',
    description: '进入第五章：初始之境',
    icon: '✨',
    category: 'story',
    condition: (state) => state.completedScenes.includes('scene_051_world5')
  },
  
  // ========== 结局成就 ==========
  {
    id: 'ach_101',
    name: '毁灭者',
    description: '达成结局：毁灭者',
    icon: '💀',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_destroyer')
  },
  {
    id: 'ach_102',
    name: '牺牲者',
    description: '达成结局：牺牲者',
    icon: '🕊️',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_sacrifice')
  },
  {
    id: 'ach_103',
    name: '守护者',
    description: '达成结局：守护者',
    icon: '🛡️',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_guardian')
  },
  {
    id: 'ach_104',
    name: '暴君',
    description: '达成结局：暴君',
    icon: '👑',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_tyant')
  },
  {
    id: 'ach_105',
    name: '解放者',
    description: '达成结局：解放者',
    icon: '🗽',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_liberator')
  },
  {
    id: 'ach_106',
    name: '迷失者',
    description: '达成结局：迷失者',
    icon: '🌀',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_lost')
  },
  {
    id: 'ach_107',
    name: '创世纪',
    description: '达成真结局：创世纪',
    icon: '🌟',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_true_rebirth')
  },
  {
    id: 'ach_108',
    name: '轮回',
    description: '达成真结局：轮回',
    icon: '🔄',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_true_cycle')
  },
  {
    id: 'ach_109',
    name: '第四面墙',
    description: '达成彩蛋结局',
    icon: '🎮',
    category: 'ending',
    condition: (state) => state.unlockedEndings?.includes('ending_meta')
  },
  
  // ========== 收集成就 ==========
  {
    id: 'ach_201',
    name: '初出茅庐',
    description: '解锁 3 个结局',
    icon: '🌱',
    category: 'collection',
    condition: (state) => (state.unlockedEndings?.length || 0) >= 3
  },
  {
    id: 'ach_202',
    name: '结局收藏家',
    description: '解锁 6 个结局',
    icon: '📖',
    category: 'collection',
    condition: (state) => (state.unlockedEndings?.length || 0) >= 6
  },
  {
    id: 'ach_203',
    name: '全知者',
    description: '解锁所有结局',
    icon: '🏆',
    category: 'collection',
    condition: (state) => (state.unlockedEndings?.length || 0) >= 9
  },
  
  // ========== 选择成就 ==========
  {
    id: 'ach_301',
    name: '勇者之路',
    description: '第一次选择战斗',
    icon: '⚔️',
    category: 'choice',
    condition: (state) => state.choiceHistory?.includes('choice_002_a')
  },
  {
    id: 'ach_302',
    name: '智者之道',
    description: '第一次选择逃跑/智取',
    icon: '🧠',
    category: 'choice',
    condition: (state) => state.choiceHistory?.includes('choice_002_b')
  },
  {
    id: 'ach_303',
    name: '机械叛徒',
    description: '在第二章选择跟随 Eve-9',
    icon: '🤝',
    category: 'choice',
    condition: (state) => state.choiceHistory?.includes('choice_004_a')
  },
  {
    id: 'ach_304',
    name: '独行侠',
    description: '在第二章选择战斗',
    icon: '💥',
    category: 'choice',
    condition: (state) => state.choiceHistory?.includes('choice_004_b')
  },
  {
    id: 'ach_305',
    name: '哲学家',
    description: '在第二章选择质疑',
    icon: '🤔',
    category: 'choice',
    condition: (state) => state.choiceHistory?.includes('choice_004_c')
  },
  
  // ========== 特殊成就 ==========
  {
    id: 'ach_401',
    name: '存档大师',
    description: '保存游戏 5 次',
    icon: '💾',
    category: 'special',
    condition: (state) => (state.saveCount || 0) >= 5
  },
  {
    id: 'ach_402',
    name: '回归者',
    description: '读取存档继续游戏',
    icon: '📂',
    category: 'special',
    condition: (state) => (state.loadCount || 0) >= 1
  },
  {
    id: 'ach_403',
    name: '快速阅读',
    description: '将打字速度调至最快',
    icon: '⚡',
    category: 'special',
    condition: (state) => state.fastestSpeedUsed === true
  }
]

/**
 * 记忆碎片数据 - 可回顾的剧情片段
 */
export const memoryFragments = [
  // 第一章记忆
  {
    id: 'mem_001',
    worldId: 'world1',
    title: '教堂觉醒',
    description: '艾莉娅在破败的教堂中醒来',
    sceneId: 'scene_001',
    unlockCondition: (state) => state.completedScenes.includes('scene_001')
  },
  {
    id: 'mem_002',
    worldId: 'world1',
    title: '神秘老人',
    description: '遇见告知真相的老人',
    sceneId: 'scene_005',
    unlockCondition: (state) => state.completedScenes.includes('scene_005')
  },
  {
    id: 'mem_003',
    worldId: 'world1',
    title: '黎明之剑',
    description: '触碰圣剑，记忆涌入',
    sceneId: 'scene_008',
    unlockCondition: (state) => state.completedScenes.includes('scene_008')
  },
  
  // 第二章记忆
  {
    id: 'mem_010',
    worldId: 'world2',
    title: '机械觉醒',
    description: 'K-7 在废墟中睁开眼睛',
    sceneId: 'scene_012_world2',
    unlockCondition: (state) => state.completedScenes.includes('scene_012_world2')
  },
  {
    id: 'mem_011',
    worldId: 'world2',
    title: 'Eve-9',
    description: '遇见神秘的 female 机器人',
    sceneId: 'scene_014_world2',
    unlockCondition: (state) => state.completedScenes.includes('scene_014_world2')
  },
  {
    id: 'mem_012',
    worldId: 'world2',
    title: '人类灭绝',
    description: '得知人类已灭绝的真相',
    sceneId: 'scene_015_world2_b',
    unlockCondition: (state) => state.choiceHistory.includes('choice_003_b')
  },
  {
    id: 'mem_013',
    worldId: 'world2',
    title: '穿越者',
    description: '被揭示为穿越者',
    sceneId: 'scene_029_world2',
    unlockCondition: (state) => state.completedScenes.includes('scene_029_world2')
  },
  
  // 第三章记忆
  {
    id: 'mem_020',
    worldId: 'world3',
    title: '诸神黄昏',
    description: '洛恩坠落在神殿废墟',
    sceneId: 'scene_031_world3',
    unlockCondition: (state) => state.completedScenes.includes('scene_031_world3')
  },
  {
    id: 'mem_021',
    worldId: 'world3',
    title: '最后的天使',
    description: '遇见垂死的米迦勒',
    sceneId: 'scene_034_world3',
    unlockCondition: (state) => state.completedScenes.includes('scene_034_world3')
  },
  {
    id: 'mem_022',
    worldId: 'world3',
    title: '创造者',
    description: '得知创造者的存在',
    sceneId: 'scene_037_world3',
    unlockCondition: (state) => state.completedScenes.includes('scene_037_world3')
  },
  
  // 第四章记忆
  {
    id: 'mem_030',
    worldId: 'world4',
    title: '平凡的日常',
    description: '林小满从课桌上醒来',
    sceneId: 'scene_041_world4',
    unlockCondition: (state) => state.completedScenes.includes('scene_041_world4')
  },
  {
    id: 'mem_031',
    worldId: 'world4',
    title: '发光图书馆',
    description: '发现神秘的魔法阵',
    sceneId: 'scene_044_world4',
    unlockCondition: (state) => state.completedScenes.includes('scene_044_world4')
  },
  {
    id: 'mem_032',
    worldId: 'world4',
    title: '观察者',
    description: '得知自己是创造者转世',
    sceneId: 'scene_046_world4',
    unlockCondition: (state) => state.completedScenes.includes('scene_046_world4')
  },
  
  // 第五章记忆
  {
    id: 'mem_040',
    worldId: 'world5',
    title: '初始之境',
    description: '踏入纯白的虚无空间',
    sceneId: 'scene_051_world5',
    unlockCondition: (state) => state.completedScenes.includes('scene_051_world5')
  },
  {
    id: 'mem_041',
    worldId: 'world5',
    title: '另一个我',
    description: '遇见创造者',
    sceneId: 'scene_054_world5',
    unlockCondition: (state) => state.completedScenes.includes('scene_054_world5')
  },
  {
    id: 'mem_042',
    worldId: 'world5',
    title: '痛苦的真相',
    description: '理解创造者的痛苦',
    sceneId: 'scene_055_world5',
    unlockCondition: (state) => state.completedScenes.includes('scene_055_world5')
  }
]

/**
 * 检测成就解锁
 */
export function checkAchievements(state) {
  const unlocked = []
  for (const achievement of achievements) {
    if (achievement.condition(state)) {
      unlocked.push(achievement.id)
    }
  }
  return unlocked
}

/**
 * 检测记忆碎片解锁
 */
export function checkMemoryFragments(state) {
  const unlocked = []
  for (const fragment of memoryFragments) {
    if (fragment.unlockCondition(state)) {
      unlocked.push(fragment.id)
    }
  }
  return unlocked
}

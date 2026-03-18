/**
 * 游戏素材配置
 * 所有 AI 生成的图片和音乐素材路径
 */

// 基础路径 - 硬编码为 /rift-oath/ 确保在 GitHub Pages 子目录下正常工作
// 不依赖 import.meta.env.BASE_URL，因为它可能返回空字符串
const BASE_PATH = '/rift-oath/'

// 辅助函数：构建图片路径
function imagePath(path) {
  // 去掉开头的 ./ 或 /，然后加上 BASE_PATH
  const cleanPath = path.replace(/^[/\.]+/, '')
  return BASE_PATH + cleanPath
}

export const assets = {
  // ========== 角色立绘 ==========
  characters: {
    // 主要角色
    aria: {
      id: 'aria',
      name: '艾莉娅',
      world: 'world1',
      portrait: imagePath('images/characters/aria.png')
    },
    k7: {
      id: 'k7',
      name: 'K-7',
      world: 'world2',
      portrait: imagePath('images/characters/k7.png')
    },
    lorne: {
      id: 'lorne',
      name: '洛恩',
      world: 'world3',
      portrait: imagePath('images/characters/lorne.png')
    },
    lin: {
      id: 'lin',
      name: '林小满',
      world: 'world4',
      portrait: imagePath('images/characters/lin-xiaoman.png')
    },
    
    // NPC
    elder: {
      id: 'elder',
      name: '神秘老人',
      world: 'world1',
      portrait: imagePath('images/characters/elder.png')
    },
    cedric: {
      id: 'cedric',
      name: '塞德里克',
      world: 'world1',
      portrait: imagePath('images/characters/cedric.png')
    },
    eve9: {
      id: 'eve9',
      name: 'Eve-9',
      world: 'world2',
      portrait: imagePath('images/characters/eve9.png')
    },
    michael: {
      id: 'michael',
      name: '米迦勒',
      world: 'world3',
      portrait: imagePath('images/characters/michael.png')
    },
    observer: {
      id: 'observer',
      name: '观察者',
      world: 'world4',
      portrait: imagePath('images/characters/observer.png')
    },
    creator: {
      id: 'creator',
      name: '创造者',
      world: 'world5',
      portrait: imagePath('images/characters/creator.png')
    }
  },

  // ========== 场景背景 ==========
  backgrounds: {
    // 第一章：永夜王国
    'ch01-church': {
      id: 'ch01-church',
      world: 'world1',
      image: imagePath('images/backgrounds/ch01-church.png'),
      name: '圣罗兰教堂'
    },
    'ch01-ruins': {
      id: 'ch01-ruins',
      world: 'world1',
      image: imagePath('images/backgrounds/ch01-ruins.png'),
      name: '王都废墟'
    },
    'ch01-crypt': {
      id: 'ch01-crypt',
      world: 'world1',
      image: imagePath('images/backgrounds/ch01-crypt.png'),
      name: '地下密室'
    },
    
    // 第二章：机械废土
    'ch02-cyber-street': {
      id: 'ch02-cyber-street',
      world: 'world2',
      image: imagePath('images/backgrounds/ch02-cyber-street.png'),
      name: '废墟街道'
    },
    'ch02-bunker': {
      id: 'ch02-bunker',
      world: 'world2',
      image: imagePath('images/backgrounds/ch02-bunker.png'),
      name: '地下避难所'
    },
    'ch02-battlefield': {
      id: 'ch02-battlefield',
      world: 'world2',
      image: imagePath('images/backgrounds/ch02-battlefield.png'),
      name: '猎杀者战场'
    },
    
    // 第三章：神弃之地
    'ch03-temple': {
      id: 'ch03-temple',
      world: 'world3',
      image: imagePath('images/backgrounds/ch03-temple.png'),
      name: '破碎神殿'
    },
    'ch03-rift': {
      id: 'ch03-rift',
      world: 'world3',
      image: imagePath('images/backgrounds/ch03-rift.png'),
      name: '天空裂隙'
    },
    'ch03-godfall': {
      id: 'ch03-godfall',
      world: 'world3',
      image: imagePath('images/backgrounds/ch03-godfall.png'),
      name: '神陨战场'
    },
    
    // 第四章：学园都市
    'ch04-classroom': {
      id: 'ch04-classroom',
      world: 'world4',
      image: imagePath('images/backgrounds/ch04-classroom.png'),
      name: '普通教室'
    },
    'ch04-library': {
      id: 'ch04-library',
      world: 'world4',
      image: imagePath('images/backgrounds/ch04-library.png'),
      name: '废弃图书馆'
    },
    'ch04-campus': {
      id: 'ch04-campus',
      world: 'world4',
      image: imagePath('images/backgrounds/ch04-campus.png'),
      name: '校园黄昏'
    },
    
    // 第五章：初始之境
    'ch05-void': {
      id: 'ch05-void',
      world: 'world5',
      image: imagePath('images/backgrounds/ch05-void.png'),
      name: '纯白空间'
    },
    'ch05-memory': {
      id: 'ch05-memory',
      world: 'world5',
      image: imagePath('images/backgrounds/ch05-memory.png'),
      name: '记忆之海'
    },
    'title': {
      id: 'title',
      world: 'all',
      image: imagePath('images/backgrounds/title.png'),
      name: '标题封面'
    }
  },

  // ========== BGM 音乐 ==========
  bgm: {
    // 标题
    title: {
      id: 'title',
      name: 'Title Theme',
      path: '/audio/bgm/title.mp3',
      loop: true,
      volume: 0.6
    },
    
    // 世界主题
    world1: {
      id: 'world1',
      name: 'Eternal Night',
      path: '/audio/bgm/world1.mp3',
      loop: true,
      volume: 0.5
    },
    world2: {
      id: 'world2',
      name: 'Cyber Ruins',
      path: '/audio/bgm/world2.mp3',
      loop: true,
      volume: 0.5
    },
    world3: {
      id: 'world3',
      name: 'Godfall',
      path: '/audio/bgm/world3.mp3',
      loop: true,
      volume: 0.5
    },
    world4: {
      id: 'world4',
      name: 'Daily Life',
      path: '/audio/bgm/world4.mp3',
      loop: true,
      volume: 0.5
    },
    world5: {
      id: 'world5',
      name: 'Origin',
      path: '/audio/bgm/world5.mp3',
      loop: true,
      volume: 0.4
    },
    
    // 特殊场景
    battle: {
      id: 'battle',
      name: 'Battle Theme',
      path: '/audio/bgm/battle.mp3',
      loop: true,
      volume: 0.6
    },
    emotional: {
      id: 'emotional',
      name: 'Emotional',
      path: '/audio/bgm/emotional.mp3',
      loop: true,
      volume: 0.5
    },
    climax: {
      id: 'climax',
      name: 'Climax',
      path: '/audio/bgm/climax.mp3',
      loop: true,
      volume: 0.7
    },
    ending: {
      id: 'ending',
      name: 'Ending',
      path: '/audio/bgm/ending.mp3',
      loop: false,
      volume: 0.6
    }
  },

  // ========== 音效 ==========
  sfx: {
    click: {
      id: 'click',
      path: '/audio/sfx/click.wav',
      volume: 0.8
    },
    select: {
      id: 'select',
      path: '/audio/sfx/select.wav',
      volume: 0.8
    },
    typing: {
      id: 'typing',
      path: '/audio/sfx/typing.wav',
      volume: 0.3
    },
    transition: {
      id: 'transition',
      path: '/audio/sfx/transition.wav',
      volume: 0.7
    },
    unlock: {
      id: 'unlock',
      path: '/audio/sfx/unlock.wav',
      volume: 0.8
    },
    achievement: {
      id: 'achievement',
      path: '/audio/sfx/achievement.wav',
      volume: 0.8
    },
    sword: {
      id: 'sword',
      path: '/audio/sfx/sword.wav',
      volume: 0.7
    },
    magic: {
      id: 'magic',
      path: '/audio/sfx/magic.wav',
      volume: 0.7
    },
    machine: {
      id: 'machine',
      path: '/audio/sfx/machine.wav',
      volume: 0.6
    },
    wing: {
      id: 'wing',
      path: '/audio/sfx/wing.wav',
      volume: 0.5
    }
  },

  // ========== 场景到背景的映射 ==========
  sceneToBackground: {
    // 第一章
    'scene_001': 'ch01-church',
    'scene_002': 'ch01-church',
    'scene_003': 'ch01-church',
    'scene_004': 'ch01-church',
    'scene_005': 'ch01-church',
    'scene_006_a': 'ch01-church',
    'scene_006_b': 'ch01-church',
    'scene_006_c': 'ch01-church',
    'scene_007': 'ch01-church',
    'scene_008': 'ch01-church',
    'scene_009': 'ch01-church',
    'scene_010_combat': 'ch01-church',
    'scene_010_escape': 'ch01-crypt',
    
    // 第二章
    'scene_012_world2': 'ch02-cyber-street',
    'scene_013_world2': 'ch02-cyber-street',
    'scene_014_world2': 'ch02-cyber-street',
    'scene_015_world2_a': 'ch02-cyber-street',
    'scene_015_world2_b': 'ch02-cyber-street',
    'scene_015_world2_c': 'ch02-cyber-street',
    'scene_016_world2': 'ch02-cyber-street',
    'scene_017_world2': 'ch02-cyber-street',
    'scene_018_world2': 'ch02-cyber-street',
    'scene_019_world2_follow': 'ch02-cyber-street',
    'scene_019_world2_fight': 'ch02-battlefield',
    'scene_020_world2_combat': 'ch02-battlefield',
    'scene_021_world2': 'ch02-bunker',
    'scene_021_world2_talk': 'ch02-cyber-street',
    'scene_022_world2': 'ch02-bunker',
    'scene_023_world2': 'ch02-bunker',
    'scene_024_world2': 'ch02-bunker',
    'scene_024_world2_b': 'ch02-bunker',
    'scene_025_world2': 'ch02-bunker',
    'scene_026_world2': 'ch02-bunker',
    'scene_027_world2': 'ch02-bunker',
    'scene_028_world2': 'ch02-bunker',
    'scene_029_world2': 'ch02-bunker',
    
    // 第三章
    'scene_031_world3': 'ch03-temple',
    'scene_032_world3': 'ch03-temple',
    'scene_033_world3': 'ch03-temple',
    'scene_034_world3': 'ch03-temple',
    'scene_035_world3': 'ch03-temple',
    'scene_036_world3_a': 'ch03-temple',
    'scene_036_world3_b': 'ch03-temple',
    'scene_037_world3': 'ch03-temple',
    'scene_038_world3': 'ch03-rift',
    'scene_039_world3': 'ch03-rift',
    
    // 第四章
    'scene_041_world4': 'ch04-classroom',
    'scene_042_world4': 'ch04-classroom',
    'scene_043_world4': 'ch04-campus',
    'scene_044_world4': 'ch04-library',
    'scene_045_world4': 'ch04-library',
    'scene_046_world4': 'ch04-library',
    'scene_047_world3_a': 'ch04-library',
    'scene_047_world3_b': 'ch04-library',
    'scene_048_world4': 'ch04-library',
    'scene_049_world4': 'ch04-library',
    
    // 第五章
    'scene_051_world5': 'ch05-void',
    'scene_052_world5': 'ch05-memory',
    'scene_053_world5': 'ch05-void',
    'scene_054_world5': 'ch05-void',
    'scene_055_world5': 'ch05-void',
    'scene_056_world5': 'ch05-void',
    'scene_057_final_a': 'ch05-void',
    'scene_057_final_b': 'ch05-void',
    'scene_057_final_c': 'ch05-void',
    'scene_057_final_destroy': 'ch05-void',
    'scene_057_final_protect': 'ch05-void',
    'scene_058_final_confront': 'ch05-memory',
    'scene_058_final_accept': 'ch05-memory',
    'scene_058_final_persuade': 'ch05-void',
    'scene_058_final_challenge': 'ch05-void'
  },

  // ========== 场景到角色的映射 ==========
  sceneToCharacters: {
    // 第一章
    'scene_001': [],
    'scene_002': ['elder'],
    'scene_003': ['elder'],
    'scene_004': ['elder'],
    'scene_005': ['elder'],
    'scene_006_a': ['elder'],
    'scene_006_b': ['elder'],
    'scene_006_c': ['elder'],
    'scene_007': ['elder'],
    'scene_008': [],
    'scene_009': ['elder'],
    
    // 第二章
    'scene_012_world2': [],
    'scene_013_world2': [],
    'scene_014_world2': ['eve9'],
    'scene_015_world2_a': ['eve9'],
    'scene_015_world2_b': ['eve9'],
    'scene_015_world2_c': ['eve9'],
    'scene_016_world2': ['eve9'],
    'scene_017_world2': ['eve9'],
    'scene_018_world2': ['eve9'],
    'scene_021_world2': ['eve9'],
    'scene_021_world2_talk': [],
    'scene_022_world2': ['eve9'],
    'scene_023_world2': ['eve9'],
    'scene_024_world2': ['eve9'],
    'scene_024_world2_b': ['eve9'],
    'scene_025_world2': [],
    'scene_026_world2': ['eve9'],
    'scene_027_world2': ['eve9'],
    'scene_028_world2': ['eve9'],
    'scene_029_world2': ['eve9'],
    
    // 第三章
    'scene_031_world3': [],
    'scene_032_world3': [],
    'scene_033_world3': ['michael'],
    'scene_034_world3': ['michael'],
    'scene_035_world3': ['michael'],
    'scene_036_world3_a': ['michael'],
    'scene_036_world3_b': ['michael'],
    'scene_037_world3': ['michael'],
    'scene_038_world3': ['michael'],
    'scene_039_world3': ['michael'],
    
    // 第四章
    'scene_041_world4': [],
    'scene_042_world4': [],
    'scene_043_world4': [],
    'scene_044_world4': [],
    'scene_045_world4': ['observer'],
    'scene_046_world4': ['observer'],
    'scene_047_world3_a': ['observer'],
    'scene_047_world3_b': ['observer'],
    'scene_048_world4': ['observer'],
    'scene_049_world4': ['observer'],
    
    // 第五章
    'scene_051_world5': [],
    'scene_052_world5': [],
    'scene_053_world5': ['creator'],
    'scene_054_world5': ['creator'],
    'scene_055_world5': ['creator'],
    'scene_056_world5': ['creator'],
    'scene_057_final_a': ['creator'],
    'scene_057_final_b': ['creator'],
    'scene_057_final_c': ['creator'],
    'scene_057_final_destroy': ['creator'],
    'scene_057_final_protect': ['creator'],
    'scene_058_final_confront': ['creator'],
    'scene_058_final_accept': ['creator'],
    'scene_058_final_persuade': ['creator'],
    'scene_058_final_challenge': ['creator']
  }
}

// 辅助函数：获取场景背景
export function getBackgroundForScene(sceneId) {
  const bgId = assets.sceneToBackground[sceneId]
  if (bgId && assets.backgrounds[bgId]) {
    return assets.backgrounds[bgId]
  }
  return null
}

// 辅助函数：获取场景角色
export function getCharactersForScene(sceneId) {
  const charIds = assets.sceneToCharacters[sceneId] || []
  return charIds.map(id => assets.characters[id]).filter(Boolean)
}

// 辅助函数：获取世界 BGM
export function getBGMForWorld(worldId) {
  const bgmMap = {
    'world1': assets.bgm.world1,
    'world2': assets.bgm.world2,
    'world3': assets.bgm.world3,
    'world4': assets.bgm.world4,
    'world5': assets.bgm.world5
  }
  return bgmMap[worldId] || assets.bgm.world1
}

/**
 * 游戏素材配置
 * 所有 AI 生成的图片和音乐素材路径
 */

export const assets = {
  // ========== 角色立绘 ==========
  characters: {
    // 主要角色
    alya: {
      id: 'alya',
      name: '艾莉娅',
      world: 'world1',
      // 立绘图片路径
      portrait: '/images/characters/alya_stand.png',
      // 表情变体（可选）
      expressions: {
        normal: '/images/characters/alya_normal.png',
        happy: '/images/characters/alya_happy.png',
        sad: '/images/characters/alya_sad.png',
        angry: '/images/characters/alya_angry.png',
        determined: '/images/characters/alya_determined.png'
      }
    },
    k7: {
      id: 'k7',
      name: 'K-7',
      world: 'world2',
      portrait: '/images/characters/k7_stand.png',
      expressions: {
        normal: '/images/characters/k7_normal.png',
        alert: '/images/characters/k7_alert.png',
        confused: '/images/characters/k7_confused.png'
      }
    },
    lohn: {
      id: 'lohn',
      name: '洛恩',
      world: 'world3',
      portrait: '/images/characters/lohn_stand.png',
      expressions: {
        normal: '/images/characters/lohn_normal.png',
        sad: '/images/characters/lohn_sad.png',
        divine: '/images/characters/lohn_divine.png'
      }
    },
    xiaoman: {
      id: 'xiaoman',
      name: '林小满',
      world: 'world4',
      portrait: '/images/characters/xiaoman_stand.png',
      expressions: {
        normal: '/images/characters/xiaoman_normal.png',
        surprised: '/images/characters/xiaoman_surprised.png',
        determined: '/images/characters/xiaoman_determined.png'
      }
    },
    
    // NPC
    oldman: {
      id: 'oldman',
      name: '神秘老人',
      world: 'world1',
      portrait: '/images/characters/oldman.png'
    },
    eve9: {
      id: 'eve9',
      name: 'Eve-9',
      world: 'world2',
      portrait: '/images/characters/eve9.png'
    },
    michael: {
      id: 'michael',
      name: '米迦勒',
      world: 'world3',
      portrait: '/images/characters/michael.png'
    },
    observer: {
      id: 'observer',
      name: '观察者',
      world: 'world4',
      portrait: '/images/characters/observer.png'
    },
    creator: {
      id: 'creator',
      name: '创造者',
      world: 'world5',
      portrait: '/images/characters/creator.png'
    }
  },

  // ========== 场景背景 ==========
  backgrounds: {
    // 第一章：永夜王国
    church: {
      id: 'church',
      world: 'world1',
      image: '/images/backgrounds/church.png',
      name: '圣罗兰教堂'
    },
    kingdom_ruins: {
      id: 'kingdom_ruins',
      world: 'world1',
      image: '/images/backgrounds/kingdom_ruins.png',
      name: '王都废墟'
    },
    underground: {
      id: 'underground',
      world: 'world1',
      image: '/images/backgrounds/underground.png',
      name: '地下密室'
    },
    
    // 第二章：机械废土
    wasteland_street: {
      id: 'wasteland_street',
      world: 'world2',
      image: '/images/backgrounds/wasteland_street.png',
      name: '废墟街道'
    },
    bunker: {
      id: 'bunker',
      world: 'world2',
      image: '/images/backgrounds/bunker.png',
      name: '地下避难所'
    },
    battlefield: {
      id: 'battlefield',
      world: 'world2',
      image: '/images/backgrounds/battlefield.png',
      name: '猎杀者战场'
    },
    
    // 第三章：神弃之地
    temple_ruins: {
      id: 'temple_ruins',
      world: 'world3',
      image: '/images/backgrounds/temple_ruins.png',
      name: '破碎神殿'
    },
    sky_rift: {
      id: 'sky_rift',
      world: 'world3',
      image: '/images/backgrounds/sky_rift.png',
      name: '天空裂隙'
    },
    godfall: {
      id: 'godfall',
      world: 'world3',
      image: '/images/backgrounds/godfall.png',
      name: '神陨战场'
    },
    
    // 第四章：学园都市
    classroom: {
      id: 'classroom',
      world: 'world4',
      image: '/images/backgrounds/classroom.png',
      name: '普通教室'
    },
    library: {
      id: 'library',
      world: 'world4',
      image: '/images/backgrounds/library.png',
      name: '废弃图书馆'
    },
    school_sunset: {
      id: 'school_sunset',
      world: 'world4',
      image: '/images/backgrounds/school_sunset.png',
      name: '校园黄昏'
    },
    
    // 第五章：初始之境
    void: {
      id: 'void',
      world: 'world5',
      image: '/images/backgrounds/void.png',
      name: '纯白空间'
    },
    memory_sea: {
      id: 'memory_sea',
      world: 'world5',
      image: '/images/backgrounds/memory_sea.png',
      name: '记忆之海'
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
    'scene_001': 'church',
    'scene_002': 'church',
    'scene_003': 'church',
    'scene_004': 'church',
    'scene_005': 'church',
    'scene_006_a': 'church',
    'scene_006_b': 'church',
    'scene_006_c': 'church',
    'scene_007': 'church',
    'scene_008': 'church',
    'scene_009': 'church',
    'scene_010_combat': 'church',
    'scene_010_escape': 'underground',
    
    // 第二章
    'scene_012_world2': 'wasteland_street',
    'scene_013_world2': 'wasteland_street',
    'scene_014_world2': 'wasteland_street',
    'scene_015_world2_a': 'wasteland_street',
    'scene_015_world2_b': 'wasteland_street',
    'scene_015_world2_c': 'wasteland_street',
    'scene_016_world2': 'wasteland_street',
    'scene_017_world2': 'wasteland_street',
    'scene_018_world2': 'wasteland_street',
    'scene_019_world2_follow': 'wasteland_street',
    'scene_019_world2_fight': 'battlefield',
    'scene_020_world2_combat': 'battlefield',
    'scene_021_world2': 'bunker',
    'scene_021_world2_talk': 'wasteland_street',
    'scene_022_world2': 'bunker',
    'scene_023_world2': 'bunker',
    'scene_024_world2': 'bunker',
    'scene_024_world2_b': 'bunker',
    'scene_025_world2': 'bunker',
    'scene_026_world2': 'bunker',
    'scene_027_world2': 'bunker',
    'scene_028_world2': 'bunker',
    'scene_029_world2': 'bunker',
    
    // 第三章
    'scene_031_world3': 'temple_ruins',
    'scene_032_world3': 'temple_ruins',
    'scene_033_world3': 'temple_ruins',
    'scene_034_world3': 'temple_ruins',
    'scene_035_world3': 'temple_ruins',
    'scene_036_world3_a': 'temple_ruins',
    'scene_036_world3_b': 'temple_ruins',
    'scene_037_world3': 'temple_ruins',
    'scene_038_world3': 'sky_rift',
    'scene_039_world3': 'sky_rift',
    
    // 第四章
    'scene_041_world4': 'classroom',
    'scene_042_world4': 'classroom',
    'scene_043_world4': 'school_sunset',
    'scene_044_world4': 'library',
    'scene_045_world4': 'library',
    'scene_046_world4': 'library',
    'scene_047_world3_a': 'library',
    'scene_047_world3_b': 'library',
    'scene_048_world4': 'library',
    'scene_049_world4': 'library',
    
    // 第五章
    'scene_051_world5': 'void',
    'scene_052_world5': 'memory_sea',
    'scene_053_world5': 'void',
    'scene_054_world5': 'void',
    'scene_055_world5': 'void',
    'scene_056_world5': 'void',
    'scene_057_final_a': 'void',
    'scene_057_final_b': 'void',
    'scene_057_final_c': 'void',
    'scene_057_final_destroy': 'void',
    'scene_057_final_protect': 'void',
    'scene_058_final_confront': 'memory_sea',
    'scene_058_final_accept': 'memory_sea',
    'scene_058_final_persuade': 'void',
    'scene_058_final_challenge': 'void'
  },

  // ========== 场景到角色的映射 ==========
  sceneToCharacters: {
    // 第一章
    'scene_001': [],
    'scene_002': ['oldman'],
    'scene_003': ['oldman'],
    'scene_004': ['oldman'],
    'scene_005': ['oldman'],
    'scene_006_a': ['oldman'],
    'scene_006_b': ['oldman'],
    'scene_006_c': ['oldman'],
    'scene_007': ['oldman'],
    'scene_008': [],
    'scene_009': ['oldman'],
    
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

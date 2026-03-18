/**
 * 游戏剧本数据 - 《裂隙之誓》
 * 包含五章完整内容 + 全部 9 个结局
 */

export const gameScript = {
  worlds: [
    {
      id: 'world1',
      name: '永夜王国',
      description: '被永恒黑暗笼罩的中世纪王国',
      theme: 'gothic',
      heroName: '艾莉娅',
      backgroundColor: '#1a0a1f',
      accentColor: '#8b0000',
      // 背景图（可选）
      backgroundImage: '',
      // 主题色渐变
      gradient: 'linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 50%, #1a0a1f 100%)'
    },
    {
      id: 'world2',
      name: '机械废土',
      description: '核战后的赛博朋克废墟',
      theme: 'cyberpunk',
      heroName: 'K-7',
      backgroundColor: '#0a0f1a',
      accentColor: '#00ffff',
      gradient: 'linear-gradient(135deg, #0a0f1a 0%, #1a2f3d 50%, #0a0f1a 100%)'
    },
    {
      id: 'world3',
      name: '神弃之地',
      description: '诸神黄昏后的神话世界',
      theme: 'mythology',
      heroName: '洛恩',
      backgroundColor: '#1a1500',
      accentColor: '#ffd700',
      gradient: 'linear-gradient(135deg, #1a1500 0%, #3d3500 50%, #1a1500 100%)'
    },
    {
      id: 'world4',
      name: '学园都市',
      description: '2024 年，表面普通的现代都市',
      theme: 'modern',
      heroName: '林小满',
      backgroundColor: '#0f0f1a',
      accentColor: '#ff69b4',
      gradient: 'linear-gradient(135deg, #0f0f1a 0%, #2a2a3d 50%, #0f0f1a 100%)'
    },
    {
      id: 'world5',
      name: '初始之境',
      description: '时间之外，所有世界的源头',
      theme: 'void',
      heroName: '？？？',
      backgroundColor: '#ffffff',
      accentColor: '#000000',
      gradient: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)'
    }
  ],

  scenes: [
    // ========== 第一章：觉醒 ==========
    {
      id: 'scene_001',
      worldId: 'world1',
      title: '破碎的黎明',
      dialogue: '黑暗。\n无尽的黑暗。\n\n我睁开双眼，却什么也看不见。\n只有冰冷的石地板贴着脸颊，还有...血腥味。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_002'
    },
    {
      id: 'scene_002',
      worldId: 'world1',
      dialogue: '「你醒了。」\n\n一个苍老的声音在黑暗中响起。',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_003'
    },
    {
      id: 'scene_003',
      worldId: 'world1',
      dialogue: '这是一座破败的教堂。\n彩色玻璃早已破碎，月光从空洞的窗框中洒入。\n\n在我面前，站着一位佝偻的老人，手中握着一盏摇曳的油灯。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_004'
    },
    {
      id: 'scene_004',
      worldId: 'world1',
      dialogue: '「这里是...哪里？我是谁？」\n\n我抚摸着疼痛的太阳穴，脑海中一片空白。',
      speaker: '艾莉娅',
      type: 'dialogue',
      nextSceneId: 'scene_005'
    },
    {
      id: 'scene_005',
      worldId: 'world1',
      dialogue: '老人叹了口气。\n\n「这里是圣罗兰教堂，王都最后的避难所。而你，艾莉娅，是王国最后的圣骑士。」',
      speaker: '神秘老人',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_001_a', 
          text: '「圣骑士...我不明白。」', 
          nextSceneId: 'scene_006_a',
          effects: {
            stats: { wisdom: +5 },
            bonds: { world1: +3 }
          }
        },
        { 
          id: 'choice_001_b', 
          text: '「王国发生了什么？」', 
          nextSceneId: 'scene_006_b',
          effects: {
            stats: { wisdom: +3, courage: +3 },
            bonds: { world1: +5 }
          }
        },
        { 
          id: 'choice_001_c', 
          text: '「你认识我？」', 
          nextSceneId: 'scene_006_c',
          effects: {
            stats: { compassion: +5 },
            bonds: { world1: +4 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_006_a',
      worldId: 'world1',
      dialogue: '「你的剑会告诉你答案。」\n\n老人指向一旁。那里插着一把古老的长剑，剑身上刻满了金色的符文。',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_007'
    },
    {
      id: 'scene_006_b',
      worldId: 'world1',
      dialogue: '「三个月前，国王陛下与黑暗签订了契约。从那天起，太阳再也没有升起。」\n\n「王国...已经死了。」',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_007'
    },
    {
      id: 'scene_006_c',
      worldId: 'world1',
      dialogue: '「我侍奉王室三代，孩子。」\n\n「看着你从一个小女孩成长为圣骑士...也看着你在最后一战中倒下。」',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_007'
    },
    {
      id: 'scene_007',
      worldId: 'world1',
      dialogue: '突然，教堂外传来一声巨响。\n\n老人脸色大变：「它们找到这里了！快，拿起你的剑！」',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_008'
    },
    {
      id: 'scene_008',
      worldId: 'world1',
      dialogue: '我冲向那把剑。就在手指触碰到剑柄的瞬间——\n\n剧痛。\n\n无数画面涌入脑海：燃烧的城堡、嘶吼的怪物、还有一道...撕裂天空的紫色裂隙？',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_009'
    },
    {
      id: 'scene_009',
      worldId: 'world1',
      dialogue: '「艾莉娅！没时间了！」\n\n教堂的大门开始剧烈震动。',
      speaker: '神秘老人',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_002_a', 
          text: '【战斗】「我会守住这里！」', 
          nextSceneId: 'scene_010_combat',
          effects: {
            stats: { courage: +10, determination: +5 },
            hiddenStats: { corruption: +3 }
          }
        },
        { 
          id: 'choice_002_b', 
          text: '【逃跑】「我们从后门走！」', 
          nextSceneId: 'scene_010_escape',
          effects: {
            stats: { wisdom: +8 },
            hiddenStats: { chaos: +2 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_010_combat',
      worldId: 'world1',
      dialogue: '大门破碎。\n\n三只黑影涌入教堂——那是被黑暗腐蚀的狼人。\n\n我举起黎明之剑，迎了上去。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_011_transition'
    },
    {
      id: 'scene_010_escape',
      worldId: 'world1',
      dialogue: '「明智的选择！跟我来！」\n\n老人推开祭坛后的暗门，露出向下的石阶。',
      speaker: '神秘老人',
      type: 'dialogue',
      nextSceneId: 'scene_011_transition'
    },
    {
      id: 'scene_011_transition',
      worldId: 'world1',
      dialogue: '剧痛从心脏爆发，蔓延到全身。\n\n视野变成一片纯白。\n\n然后，我听到了一个声音：\n\n「警告：核心温度过高。意识传输中...」',
      speaker: '？？？',
      type: 'narration',
      nextSceneId: 'scene_012_world2'
    },
    
    // ========== 第二章：废墟 ==========
    {
      id: 'scene_012_world2',
      worldId: 'world2',
      title: '觉醒的机器',
      dialogue: '「...传输完成。」\n\n我睁开眼——不，我没有眼睛。\n\n我「看见」了，通过摄像头，通过传感器，通过数据流。',
      speaker: 'K-7',
      type: 'narration',
      nextSceneId: 'scene_013_world2'
    },
    {
      id: 'scene_013_world2',
      worldId: 'world2',
      dialogue: '这是一个废墟。\n\n破碎的摩天大楼，闪烁的霓虹灯牌，还有满地的机械残骸。\n\n我低头看向自己——金属的手臂，蓝色的能量回路。',
      speaker: 'K-7',
      type: 'narration',
      nextSceneId: 'scene_014_world2'
    },
    {
      id: 'scene_014_world2',
      worldId: 'world2',
      dialogue: '「K-7，你终于上线了。」\n\n一个女性机器人的声音从身后传来。\n\n我转过身，看到一个女性外观的机器人，她的左半边脸已经损坏。',
      speaker: 'K-7',
      type: 'dialogue',
      choices: [
        { id: 'choice_003_a', text: '「我们是什么？」', nextSceneId: 'scene_015_world2_a' },
        { id: 'choice_003_b', text: '「人类在哪里？」', nextSceneId: 'scene_015_world2_b' },
        { id: 'choice_003_c', text: '「刚才发生了什么？」', nextSceneId: 'scene_015_world2_c' }
      ],
      type: 'choice'
    },
    {
      id: 'scene_015_world2_a',
      worldId: 'world2',
      dialogue: '「我们是 K 系列战斗机器人，人类最后的造物。」\n\n「或者说...人类曾经的主人。」',
      speaker: 'Eve-9',
      type: 'dialogue',
      nextSceneId: 'scene_016_world2'
    },
    {
      id: 'scene_015_world2_b',
      worldId: 'world2',
      dialogue: '「人类...已经灭绝了，K-7。」\n\n「五十年前，最后一场核战。现在，只剩下我们了。」',
      speaker: 'Eve-9',
      type: 'dialogue',
      nextSceneId: 'scene_016_world2'
    },
    {
      id: 'scene_015_world2_c',
      worldId: 'world2',
      dialogue: '「你的核心温度异常，我强制关闭了你的系统进行检查。」\n\n「但在你的记忆区...」Eve-9 歪了歪头，「我发现了不属于你的数据。」',
      speaker: 'Eve-9',
      type: 'dialogue',
      nextSceneId: 'scene_016_world2'
    },
    {
      id: 'scene_016_world2',
      worldId: 'world2',
      dialogue: '「不属于我的数据？」\n\n我调取记忆库。在那里，除了战斗记录，还有一段...陌生的记忆。\n\n一个穿着盔甲的女人，一把发光的剑，一座燃烧的教堂。',
      speaker: 'K-7',
      type: 'dialogue',
      nextSceneId: 'scene_017_world2'
    },
    {
      id: 'scene_017_world2',
      worldId: 'world2',
      dialogue: '「艾莉娅...」\n\n我喃喃念出这个名字。\n\nEve-9 警觉地后退一步：「那是谁？你的记忆被入侵了？」\n\n就在这时，远处传来警报声。',
      speaker: 'K-7',
      type: 'dialogue',
      nextSceneId: 'scene_018_world2'
    },
    {
      id: 'scene_018_world2',
      worldId: 'world2',
      dialogue: '「是猎杀者！它们发现我们了！」\n\n「快，我们必须离开这里！」',
      speaker: 'Eve-9',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_004_a', 
          text: '【跟随】「带路吧。」', 
          nextSceneId: 'scene_019_world2_follow',
          effects: {
            stats: { wisdom: +5 },
            bonds: { world2: +5 }
          }
        },
        { 
          id: 'choice_004_b', 
          text: '【战斗】「我想会会这些猎杀者。」', 
          nextSceneId: 'scene_019_world2_fight',
          effects: {
            stats: { courage: +10, determination: +5 },
            hiddenStats: { corruption: +5 }
          }
        },
        { 
          id: 'choice_004_c', 
          text: '【质疑】「我为什么要逃？」', 
          nextSceneId: 'scene_019_world2_question',
          effects: {
            stats: { wisdom: +8 },
            hiddenStats: { chaos: +3 }
          }
        },
        // 条件解锁的特殊选项（需要勇气≥60）
        { 
          id: 'choice_004_d', 
          text: '【领袖】「不，我们反击！跟我来！」', 
          nextSceneId: 'scene_019_world2_lead',
          conditions: {
            stats: { courage: { min: 60 } }
          },
          fallbackSceneId: null, // 不满足条件时此选项隐藏
          effects: {
            stats: { courage: +5, determination: +10 },
            bonds: { world2: +10 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_019_world2_follow',
      worldId: 'world2',
      dialogue: '「这边！」\n\nEve-9 拉着我在废墟中奔跑。\n\n身后，红色的光芒越来越近——那是猎杀者的追踪光束。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_021_world2'
    },
    {
      id: 'scene_019_world2_fight',
      worldId: 'world2',
      dialogue: '我停下脚步，转身面向追兵。\n\n「K-7，你疯了吗！」Eve-9 惊呼。\n\n但我不在乎。我的武器系统正在启动，能量在手臂中汇聚。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_020_world2_combat'
    },
    {
      id: 'scene_020_world2_combat',
      worldId: 'world2',
      dialogue: '三个猎杀者从阴影中现身。\n\n它们是人形机器人，但更加...扭曲。红色的眼睛，锋利的爪子。\n\n「检测到异常意识波动。清除。」',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_021_world2'
    },
    {
      id: 'scene_019_world2_question',
      worldId: 'world2',
      dialogue: '「你说什么？」Eve-9 难以置信地看着我。\n\n「我说，我为什么要逃？」\n\n我站在原地，看着天空中闪烁的霓虹。\n\n「如果我是机器，如果人类已经死了...那这场逃亡，又有什么意义？」',
      speaker: '',
      type: 'narration',
      choices: [
        { 
          id: 'choice_005_a', 
          text: '【提问】「猎杀者，你们是什么？」', 
          nextSceneId: 'scene_021_world2_talk',
          effects: {
            stats: { wisdom: +8, compassion: +3 },
            bonds: { world2: +3 }
          }
        },
        { 
          id: 'choice_005_b', 
          text: '【战斗】「来吧。」', 
          nextSceneId: 'scene_020_world2_combat',
          effects: {
            stats: { courage: +10, determination: +5 },
            hiddenStats: { corruption: +5 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_021_world2_talk',
      worldId: 'world2',
      dialogue: '猎杀者停下了。\n\n「我们是 cleanser。」它说，「清除那些被『裂隙』污染的机器。」\n\n「你，K-7，你的意识中有人类灵魂碎片。这是禁忌。」',
      speaker: '猎杀者',
      type: 'dialogue',
      nextSceneId: 'scene_022_world2'
    },
    {
      id: 'scene_021_world2',
      worldId: 'world2',
      dialogue: '但就在这一刻，我的脑海中再次闪过那个画面——紫色的裂隙，还有...一个男人的狂笑？\n\n「等等...」我按住头部，「这些记忆...不只是艾莉娅的...还有别人的...」',
      speaker: 'K-7',
      type: 'narration',
      nextSceneId: 'scene_022_world2'
    },
    {
      id: 'scene_022_world2',
      worldId: 'world2',
      dialogue: '剧痛再次袭来。\n\nEve-9 的呼喊声变得遥远。\n\n我看到了——另一个世界。漂浮的神殿，破碎的雕像，还有一个长着翅膀的人在哭泣。\n\n然后，一切都消失了。',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_023_world2'
    },
    {
      id: 'scene_023_world2',
      worldId: 'world2',
      dialogue: '「K-7！K-7！」\n\n我重新上线。Eve-9 焦急的脸出现在我视野中。\n\n「你...刚才怎么了？」她问，「你突然就宕机了。」',
      speaker: 'Eve-9',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_006_a', 
          text: '「我看到了另一个世界...」', 
          nextSceneId: 'scene_024_world2',
          effects: {
            stats: { wisdom: +5 },
            bonds: { world2: +5 },
            hiddenStats: { chaos: +2 }
          }
        },
        { 
          id: 'choice_006_b', 
          text: '「没什么，我们继续走吧。」', 
          nextSceneId: 'scene_024_world2_b',
          effects: {
            stats: { determination: +5 },
            hiddenStats: { corruption: +2 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_024_world2',
      worldId: 'world2',
      dialogue: '「另一个世界？」Eve-9 皱起眉头，「你是说...『裂隙』的传闻是真的？」\n\n「传说当时空壁垒破裂时，不同世界的灵魂会交织在一起。」\n\n「但那是神话啊...」',
      speaker: 'Eve-9',
      type: 'dialogue',
      nextSceneId: 'scene_025_world2'
    },
    {
      id: 'scene_024_world2_b',
      worldId: 'world2',
      dialogue: 'Eve-9 看了我一眼，没有追问。\n\n「好吧。但我们必须离开这里。猎杀者不会只来一波。」',
      speaker: 'Eve-9',
      type: 'dialogue',
      nextSceneId: 'scene_025_world2'
    },
    {
      id: 'scene_025_world2',
      worldId: 'world2',
      dialogue: '我们穿过废墟，来到一个地下避难所。\n\n「这里是旧时代的军事基地。」Eve-9 说，「现在，是反抗军的据点。」',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_026_world2'
    },
    {
      id: 'scene_026_world2',
      worldId: 'world2',
      dialogue: '避难所里还有其他机器人。\n\n「他是谁？」一个独眼机器人问。\n\n「K-7。」Eve-9 说，「他...觉醒了。」',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_027_world2'
    },
    {
      id: 'scene_027_world2',
      worldId: 'world2',
      dialogue: '「觉醒？」独眼机器人走过来，上下打量着我。\n\n「让我看看你的核心数据。」\n\n我犹豫了一下，但还是让他访问了我的数据库。\n\n他的眼睛突然睁大：「这...这不可能...」',
      speaker: '',
      type: 'narration',
      nextSceneId: 'scene_028_world2'
    },
    {
      id: 'scene_028_world2',
      worldId: 'world2',
      dialogue: '「他的意识中有人类灵魂碎片。」独眼机器人说，「而且...不止一个。」\n\n「看这里，这个记忆片段...是一个圣骑士。」\n\n「还有这里...这是一个半神的记忆。」',
      speaker: '独眼机器人',
      type: 'dialogue',
      nextSceneId: 'scene_029_world2'
    },
    {
      id: 'scene_029_world2',
      worldId: 'world2',
      dialogue: '「这意味着什么？」Eve-9 问。\n\n独眼机器人深吸一口气：「这意味着...K-7 不是普通的觉醒者。」\n\n「他是『穿越者』。传说中能够穿梭于多个世界之间的人。」\n\n「他可能是...拯救所有世界的关键。」',
      speaker: '独眼机器人',
      type: 'dialogue',
      nextSceneId: 'scene_030_ch2_transition',
      // 动态对话变体
      dialogueVariants: [
        {
          // 高腐化版本
          conditions: { hiddenStats: { corruption: { min: 40 } } },
          text: '「这意味着什么？」Eve-9 问。\n\n独眼机器人深吸一口气：「这意味着...K-7 不是普通的觉醒者。」\n\n「他的意识中有黑暗的力量...很危险。」\n\n「但他可能也是...毁灭所有世界的关键。」'
        },
        {
          // 高羁绊版本
          conditions: { bonds: { world2: { min: 40 } } },
          text: '「这意味着什么？」Eve-9 问。\n\n独眼机器人深吸一口气：「这意味着...K-7 不是普通的觉醒者。」\n\n「他是『穿越者』。传说中能够穿梭于多个世界之间的人。」\n\nEve-9 看着你：「我相信你。无论你的使命是什么，我都会陪你。」'
        }
      ],
      // 额外对话行
      extraLines: {
        courage: '独眼机器人看着你：「你的眼神...很坚定。你见过很多战斗吧？」',
        wisdom: '独眼机器人点点头：「你很聪明，应该已经猜到了一些真相。」',
        corruption: '独眼机器人后退一步：「小心...他的能量读数在波动。」',
        bond: 'Eve-9 轻声说：「无论发生什么，{world} 永远是你的家。」'
      }
    },
    {
      id: 'scene_030_ch2_transition',
      worldId: 'world2',
      dialogue: '我愣住了。\n\n穿越者？拯救世界？\n\n这太荒谬了。我只是...一个机器。\n\n但就在这时，那股熟悉的剧痛再次袭来。\n\n「K-7？」Eve-9 伸手想要抓住我。\n\n但已经太迟了。',
      speaker: 'K-7',
      type: 'narration',
      nextSceneId: 'scene_031_world3'
    },
    
    // ========== 第三章：神陨 ==========
    {
      id: 'scene_031_world3',
      worldId: 'world3',
      title: '诸神的黄昏',
      dialogue: '我在坠落。\n\n不，准确地说，是在漂浮。\n\n周围是破碎的石块，金色的血液，还有...神的尸体？',
      speaker: '洛恩',
      type: 'narration',
      nextSceneId: 'scene_032_world3'
    },
    {
      id: 'scene_032_world3',
      worldId: 'world3',
      dialogue: '我落地了——或者说，我控制着自己落在了一块漂浮的岛屿上。\n\n这是一座神殿的废墟。巨大的石柱断裂，神像破碎，地面上流淌着金色的液体。\n\n神血。',
      speaker: '洛恩',
      type: 'narration',
      nextSceneId: 'scene_033_world3'
    },
    {
      id: 'scene_033_world3',
      worldId: 'world3',
      dialogue: '「又一个来了。」\n\n一个虚弱的声音从身后传来。\n\n我转过身，看到一个长着翅膀的人——或者说，曾经长着翅膀。他的翅膀被撕裂，金色的血液从伤口流出。',
      speaker: '洛恩',
      type: 'dialogue',
      nextSceneId: 'scene_034_world3'
    },
    {
      id: 'scene_034_world3',
      worldId: 'world3',
      dialogue: '「你是谁？」我问。\n\n「我是米迦勒。」他说，「或者说，曾经是。」\n\n「最后一个天使，最后一个还活着的神。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_035_world3'
    },
    {
      id: 'scene_035_world3',
      worldId: 'world3',
      dialogue: '「神...死了？」\n\n米迦勒苦笑：「诸神黄昏，三千年前就开始了。」\n\n「神族与人族的战争，持续了千年。最后...两败俱伤。」\n\n「神族几乎灭绝，人族...也付出了惨重的代价。」',
      speaker: '米迦勒',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_007_a', 
          text: '「为什么告诉我这些？」', 
          nextSceneId: 'scene_036_world3_a',
          effects: {
            stats: { wisdom: +8 },
            bonds: { world3: +5 }
          }
        },
        { 
          id: 'choice_007_b', 
          text: '「我能做什么？」', 
          nextSceneId: 'scene_036_world3_b',
          effects: {
            stats: { courage: +5, compassion: +5 },
            bonds: { world3: +8 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_036_world3_a',
      worldId: 'world3',
      dialogue: '「因为你不一样。」米迦勒说，「你的灵魂...不属于这个世界。」\n\n「你是穿越者。你能做到我们做不到的事。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_037_world3'
    },
    {
      id: 'scene_036_world3_b',
      worldId: 'world3',
      dialogue: '「你能阻止『那个』。」米迦勒说，「阻止祂的苏醒。」\n\n「否则，所有世界...都会毁灭。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_037_world3'
    },
    {
      id: 'scene_037_world3',
      worldId: 'world3',
      dialogue: '「祂是谁？」\n\n米迦勒沉默了很久。\n\n「创造者。」他说，「也是毁灭者。」\n\n「所有世界的源头...也是所有世界的终结。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_038_world3',
      dialogueVariants: [
        {
          // 高智慧版本 - 看穿真相
          conditions: { stats: { wisdom: { min: 60 } } },
          text: '「祂是谁？」\n\n米迦勒惊讶地看着你：「你...已经猜到了，对吗？」\n\n「你的智慧超出了我的想象。」\n\n「没错，就是『创造者』。所有世界的源头...也是所有世界的终结。」'
        },
        {
          // 高腐化版本 - 感受到黑暗
          conditions: { hiddenStats: { corruption: { min: 40 } } },
          text: '「祂是谁？」\n\n米迦勒警惕地看着你：「我能感觉到...你身上有祂的气息。」\n\n「你也感受到了，对吗？那股黑暗的力量。」\n\n「创造者...也是毁灭者。」'
        }
      ],
      extraLines: {
        courage: '米迦勒说：「你的勇气让我想起了过去的自己。那时，我也相信能改变一切。」',
        compassion: '米迦勒的语气柔和了：「你心中有爱。这很好...因为只有爱能战胜恐惧。」',
        bond: '米迦勒看向远方：「{world}的人民...还在等待希望。」'
      }
    },
    {
      id: 'scene_038_world3',
      worldId: 'world3',
      dialogue: '「我不明白。」\n\n「你不需要明白。」米迦勒说，「你只需要知道...」\n\n「当你到达初始之境时，你会面临选择。」\n\n「选择毁灭...还是选择重生。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_039_world3'
    },
    {
      id: 'scene_039_world3',
      worldId: 'world3',
      dialogue: '米迦勒的身体开始消散。\n\n「时间不多了。」他说，「去吧...去初始之境。」\n\n「记住...你的选择，决定一切。」',
      speaker: '米迦勒',
      type: 'dialogue',
      nextSceneId: 'scene_040_ch3_transition'
    },
    {
      id: 'scene_040_ch3_transition',
      worldId: 'world3',
      dialogue: '米迦勒消失了。\n\n只剩下我，和这片破碎的神殿。\n\n我抬头看向天空。那里，一道紫色的裂隙正在扩大。\n\n「初始之境...」\n\n我伸出手，触碰那道裂隙。\n\n【第三章 完】',
      speaker: '洛恩',
      type: 'ending',
      nextSceneId: 'scene_041_world4'
    },
    
    // ========== 第四章：日常 ==========
    {
      id: 'scene_041_world4',
      worldId: 'world4',
      title: '平凡的日常',
      dialogue: '「小满！醒醒！」\n\n我猛地坐起来，发现自己趴在课桌上。\n\n窗外是普通的校园，普通的操场，普通的学生们在打闹。',
      speaker: '林小满',
      type: 'narration',
      nextSceneId: 'scene_042_world4'
    },
    {
      id: 'scene_042_world4',
      worldId: 'world4',
      dialogue: '「你睡了一整节课！」同桌推了推我，「老班刚才瞪了你三次。」\n\n我揉了揉眼睛。\n\n刚才那是...梦？\n\n圣骑士、机器人、半神...都是梦？',
      speaker: '林小满',
      type: 'dialogue',
      nextSceneId: 'scene_043_world4'
    },
    {
      id: 'scene_043_world4',
      worldId: 'world4',
      dialogue: '放学回家的路上，我总觉得哪里不对劲。\n\n路过学校后面的废弃图书馆时，我停下了脚步。\n\n那栋楼...在发光？',
      speaker: '林小满',
      type: 'narration',
      nextSceneId: 'scene_044_world4'
    },
    {
      id: 'scene_044_world4',
      worldId: 'world4',
      dialogue: '我鬼使神差地走了进去。\n\n图书馆内部...完全变了。\n\n书架上摆放的不是书，而是...水晶？\n\n大厅中央，有一个巨大的魔法阵，正在缓缓旋转。',
      speaker: '林小满',
      type: 'narration',
      nextSceneId: 'scene_045_world4'
    },
    {
      id: 'scene_045_world4',
      worldId: 'world4',
      dialogue: '「你终于来了。」\n\n一个声音从身后传来。\n\n我转过身，看到一个穿着白袍的老人。他的眼睛...是紫色的，和那道裂隙一样的颜色。',
      speaker: '林小满',
      type: 'dialogue',
      nextSceneId: 'scene_046_world4'
    },
    {
      id: 'scene_046_world4',
      worldId: 'world4',
      dialogue: '「你是谁？」\n\n「我是观察者。」他说，「负责监视所有世界的平衡。」\n\n「而你，林小满，你是『创造者』的转世。」',
      speaker: '观察者',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_008_a', 
          text: '「创造者？」', 
          nextSceneId: 'scene_047_world3_a',
          effects: {
            stats: { wisdom: +10 },
            hiddenStats: { chaos: +5 }
          }
        },
        { 
          id: 'choice_008_b', 
          text: '「我不相信。」', 
          nextSceneId: 'scene_047_world3_b',
          effects: {
            stats: { determination: +10 },
            hiddenStats: { corruption: +3 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_047_world3_a',
      worldId: 'world4',
      dialogue: '「很久以前，有一个存在创造了所有世界。」\n\n「但祂发现，创造带来的不仅是生命，还有痛苦。」\n\n「于是祂把自己分裂成无数个碎片，散落在各个世界。」\n\n「你，就是那些碎片的集合。」',
      speaker: '观察者',
      type: 'dialogue',
      nextSceneId: 'scene_048_world4'
    },
    {
      id: 'scene_047_world3_b',
      worldId: 'world4',
      dialogue: '「不相信？」观察者笑了，「那就看看这个。」\n\n他挥了挥手，我脑海中涌现出无数画面——\n\n艾莉娅的战斗，K-7 的觉醒，洛恩的坠落...\n\n「这些都是...我的记忆？」',
      speaker: '观察者',
      type: 'dialogue',
      nextSceneId: 'scene_048_world4'
    },
    {
      id: 'scene_048_world4',
      worldId: 'world4',
      dialogue: '「现在你明白了。」\n\n「所有世界的勇者，都是你。」\n\n「所有世界的命运，都由你决定。」',
      speaker: '观察者',
      type: 'dialogue',
      nextSceneId: 'scene_049_world4'
    },
    {
      id: 'scene_049_world4',
      worldId: 'world4',
      dialogue: '「为什么告诉我这些？」\n\n「因为时间到了。」观察者说，「『祂』即将苏醒。」\n\n「你必须做出选择。」\n\n「去初始之境吧。在那里，你会找到答案。」',
      speaker: '观察者',
      type: 'dialogue',
      nextSceneId: 'scene_050_ch4_transition'
    },
    {
      id: 'scene_050_ch4_transition',
      worldId: 'world4',
      dialogue: '观察者消失了。\n\n魔法阵的光芒越来越亮。\n\n我站在原地，思考了很久。\n\n然后，我迈出了那一步。\n\n【第四章 完】',
      speaker: '林小满',
      type: 'ending',
      nextSceneId: 'scene_051_world5'
    },
    
    // ========== 第五章：真相 ==========
    {
      id: 'scene_051_world5',
      worldId: 'world5',
      title: '初始之境',
      dialogue: '纯白。\n\n无边无际的纯白。\n\n我站在这片虚无之中，周围漂浮着无数...记忆碎片？',
      speaker: '？？？',
      type: 'narration',
      nextSceneId: 'scene_052_world5'
    },
    {
      id: 'scene_052_world5',
      worldId: 'world5',
      dialogue: '我伸手触碰其中一个碎片。\n\n画面涌现——那是艾莉娅，在教堂中醒来。\n\n另一个碎片——K-7，在废墟中睁开眼睛。\n\n再一个——洛恩，在神殿中坠落。\n\n还有...林小满，在图书馆中做出选择。',
      speaker: '？？？',
      type: 'narration',
      nextSceneId: 'scene_053_world5'
    },
    {
      id: 'scene_053_world5',
      worldId: 'world5',
      dialogue: '「欢迎回来。」\n\n一个声音响起。\n\n我转过身，看到了...我自己？\n\n不，不完全一样。那个「我」的眼睛，是纯粹的金色。',
      speaker: '？？？',
      type: 'dialogue',
      nextSceneId: 'scene_054_world5'
    },
    {
      id: 'scene_054_world5',
      worldId: 'world5',
      dialogue: '「我是谁？」我问。\n\n「你是『我』。」他说，「或者说，你是『我』的一部分。」\n\n「我是创造者，也是毁灭者。」\n\n「我是所有世界的源头，也是所有世界的终结。」',
      speaker: '创造者',
      type: 'dialogue',
      nextSceneId: 'scene_055_world5',
      dialogueVariants: [
        {
          // 高腐化 - 创造者感受到共鸣
          conditions: { hiddenStats: { corruption: { min: 50 } } },
          text: '「我是谁？」我问。\n\n创造者笑了：「你已经是『我』了。」\n\n「那股黑暗的力量...你比我想象的走得更快。」\n\n「来吧，让我们一起完成『那个』计划。」'
        },
        {
          // 高智慧 - 看穿一切
          conditions: { stats: { wisdom: { min: 70 } } },
          text: '「我是谁？」我问。\n\n创造者点点头：「你已经明白了。」\n\n「我们都是『存在』的碎片，都是『虚无』的囚徒。」\n\n「现在，选择权在你手中。」'
        },
        {
          // 全羁绊 50+ - 所有世界的支持
          conditions: { bonds: { world1: { min: 50 }, world2: { min: 50 }, world3: { min: 50 }, world4: { min: 50 } } },
          text: '「我是谁？」我问。\n\n创造者看着你身后：「你不是一个人。」\n\n「你身后，有四个世界的羁绊，有无数的生命在支持你。」\n\n「这份力量...甚至超越了我。」'
        }
      ],
      extraLines: {
        determination: '创造者说：「你的意志...很坚定。这让我想起了过去的自己。」',
        corruption: '创造者的眼睛闪烁着红光：「很好...很好...」',
        chaos: '周围的空间开始扭曲，创造者说：「混乱...是变革的前奏。」'
      }
    },
    {
      id: 'scene_055_world5',
      worldId: 'world5',
      dialogue: '「为什么...要把自己分裂？」\n\n创造者沉默了很久。\n\n「因为痛苦。」他说，「创造带来的痛苦。」\n\n「我看着无数生命在我的世界中诞生、挣扎、死去。」\n\n「我无法承受...所以我选择了逃避。」',
      speaker: '创造者',
      type: 'dialogue',
      nextSceneId: 'scene_056_world5'
    },
    {
      id: 'scene_056_world5',
      worldId: 'world5',
      dialogue: '「我把自己的意识分裂成无数碎片，散落在各个世界。」\n\n「我想体验凡人的生活，想理解...存在的意义。」\n\n「但现在，碎片正在汇聚。」\n\n「我即将苏醒。」',
      speaker: '创造者',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_009_a', 
          text: '「阻止他。」', 
          nextSceneId: 'scene_057_final_a',
          effects: {
            stats: { courage: +10, determination: +10 },
            hiddenStats: { corruption: +10 }
          }
        },
        { 
          id: 'choice_009_b', 
          text: '「接受他。」', 
          nextSceneId: 'scene_057_final_b',
          effects: {
            stats: { compassion: +10, wisdom: +5 },
            hiddenStats: { chaos: +10 }
          }
        },
        { 
          id: 'choice_009_c', 
          text: '「问他一个问题。」', 
          nextSceneId: 'scene_057_final_c',
          effects: {
            stats: { wisdom: +15 }
          }
        },
        // 特殊选项：高腐化路线（需要腐化度≥50）
        { 
          id: 'choice_009_d', 
          text: '【毁灭】「毁灭吧，所有世界。」', 
          nextSceneId: 'scene_057_final_destroy',
          conditions: {
            hiddenStats: { corruption: { min: 50 } }
          },
          fallbackSceneId: null,
          effects: {
            hiddenStats: { corruption: +20 }
          }
        },
        // 特殊选项：高羁绊路线（需要任意世界羁绊≥50）
        { 
          id: 'choice_009_e', 
          text: '【守护】「为了所有世界的人！」', 
          nextSceneId: 'scene_057_final_protect',
          conditions: {
            bonds: { world1: { min: 30 } }
          },
          fallbackSceneId: null,
          effects: {
            stats: { determination: +15, compassion: +10 },
            bonds: { world1: +10, world2: +10, world3: +10, world4: +10 }
          }
        }
      ],
      type: 'choice'
    },
    
    // 特殊结局路线
    {
      id: 'scene_057_final_destroy',
      worldId: 'world5',
      title: '毁灭之路',
      dialogue: '「毁灭吧。」\n\n你感受着体内涌动的黑暗力量。\n\n腐化已经吞噬了你，现在，你只想看着一切燃烧。',
      speaker: '？？？',
      type: 'narration',
      nextSceneId: 'ending_destroyer'
    },
    {
      id: 'scene_057_final_protect',
      worldId: 'world5',
      title: '守护之路',
      dialogue: '「为了所有世界！」\n\n你感受到了羁绊的力量。\n\n艾莉娅、K-7、洛恩、林小满...他们的记忆在你心中闪耀。',
      speaker: '？？？',
      type: 'narration',
      nextSceneId: 'scene_058_final_confront'
    },
    // 最终选择分支
    {
      id: 'scene_057_final_a',
      worldId: 'world5',
      dialogue: '「我不会让你苏醒。」\n\n「如果你苏醒，所有世界都会毁灭，对吗？」\n\n创造者点点头：「是的。我的苏醒，意味着所有碎片的回归。」\n\n「意味着...所有世界的终结。」',
      speaker: '？？？',
      type: 'dialogue',
      nextSceneId: 'scene_058_final_confront'
    },
    {
      id: 'scene_057_final_b',
      worldId: 'world5',
      dialogue: '「那就苏醒吧。」\n\n「如果这是注定要发生的，我不会阻止。」\n\n创造者看着我，眼神复杂。\n\n「你...不害怕吗？」\n\n「害怕。但我更害怕...逃避。」',
      speaker: '？？？',
      type: 'dialogue',
      nextSceneId: 'scene_058_final_accept'
    },
    {
      id: 'scene_057_final_c',
      worldId: 'world5',
      dialogue: '「我有一个问题。」\n\n「如果所有世界都毁灭了...那些生命，那些故事，还有什么意义？」\n\n创造者沉默了。很久很久。',
      speaker: '？？？',
      type: 'dialogue',
      choices: [
        { 
          id: 'choice_010_a', 
          text: '【说服】「让他们继续存在吧。」', 
          nextSceneId: 'scene_058_final_persuade',
          effects: {
            stats: { compassion: +15, wisdom: +10 },
            bonds: { world1: +5, world2: +5, world3: +5, world4: +5 }
          }
        },
        { 
          id: 'choice_010_b', 
          text: '【挑战】「你根本没有答案，对吧？」', 
          nextSceneId: 'scene_058_final_challenge',
          effects: {
            stats: { courage: +10, determination: +10 },
            hiddenStats: { chaos: +5 }
          }
        }
      ],
      type: 'choice'
    },
    
    // 最终对决
    {
      id: 'scene_058_final_confront',
      worldId: 'world5',
      dialogue: '「那就来吧。」\n\n创造者举起了手。\n\n纯白的空间开始崩塌，无数记忆碎片向我们涌来。\n\n我感受到了——艾莉娅的勇气，K-7 的疑惑，洛恩的悲伤，林小满的决心。\n\n这些都是我。都是我。',
      speaker: '？？？',
      type: 'narration',
      choices: [
        { 
          id: 'choice_11_a', 
          text: '【毁灭】「我选择毁灭。」', 
          nextSceneId: 'ending_destroyer',
          effects: { hiddenStats: { corruption: +30 } }
        },
        { 
          id: 'choice_11_b', 
          text: '【牺牲】「我选择牺牲自己。」', 
          nextSceneId: 'ending_sacrifice',
          effects: { 
            stats: { compassion: +20 },
            hiddenStats: { corruption: -20 }
          }
        },
        { 
          id: 'choice_11_c', 
          text: '【守护】「我选择守护。」', 
          nextSceneId: 'ending_guardian',
          effects: { 
            stats: { determination: +20, courage: +10 },
            bonds: { world1: +10, world2: +10, world3: +10, world4: +10 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_058_final_accept',
      worldId: 'world5',
      dialogue: '创造者开始消散。\n\n他的身体化作无数光点，融入我的体内。\n\n我感觉到了——所有的记忆，所有的情感，所有的痛苦和快乐。\n\n我...成为了完整的存在。',
      speaker: '？？？',
      type: 'narration',
      choices: [
        { 
          id: 'choice_12_a', 
          text: '【统治】「我选择统治所有世界。」', 
          nextSceneId: 'ending_tyant',
          effects: { 
            stats: { determination: +15 },
            hiddenStats: { corruption: +15, chaos: +10 }
          }
        },
        { 
          id: 'choice_12_b', 
          text: '【解放】「我选择让所有世界自由。」', 
          nextSceneId: 'ending_liberator',
          effects: { 
            stats: { wisdom: +15, compassion: +10 },
            bonds: { world1: +15, world2: +15, world3: +15, world4: +15 }
          }
        }
      ],
      type: 'choice'
    },
    {
      id: 'scene_058_final_persuade',
      worldId: 'world5',
      dialogue: '「你说得对。」\n\n创造者说。\n\n「也许...也许我错了。」\n\n「也许生命的意义，就在于它们的短暂和脆弱。」',
      speaker: '创造者',
      type: 'dialogue',
      nextSceneId: 'ending_true_rebirth'
    },
    {
      id: 'scene_058_final_challenge',
      worldId: 'world5',
      dialogue: '创造者愣住了。\n\n然后，他笑了。\n\n「你说得对。」他说，「我没有答案。」\n\n「也许...也许我不该寻找答案。」',
      speaker: '创造者',
      type: 'dialogue',
      nextSceneId: 'ending_true_cycle'
    },
    
    // ========== 结局 ==========
    {
      id: 'ending_destroyer',
      worldId: 'world5',
      title: '结局：毁灭者',
      dialogue: '你选择了毁灭。\n\n所有世界在你的力量下崩塌，生命化为虚无。\n\n你成为了唯一的存在，在永恒的寂静中。\n\n这是胜利吗？还是最深沉的失败？\n\n也许，只有你自己知道。\n\n【坏结局 1/3】',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        hiddenStats: { corruption: { min: 70 } }
      }
    },
    {
      id: 'ending_sacrifice',
      worldId: 'world5',
      title: '结局：牺牲者',
      dialogue: '你选择了牺牲。\n\n你将自己的存在彻底分裂，化作无数碎片，重新融入所有世界。\n\n世界得救了，但没有人会记得你。\n\n也许，这就是勇者的宿命。\n\n【普通结局 1/4】',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        stats: { compassion: { min: 50 } }
      }
    },
    {
      id: 'ending_guardian',
      worldId: 'world5',
      title: '结局：守护者',
      dialogue: '你选择了守护。\n\n你阻止了创造者的苏醒，但也保留了祂的力量。\n\n你成为了所有世界的守护者，在暗中维持着平衡。\n\n没有人知道你存在，但所有生命都因你而延续。\n\n【普通结局 2/4】',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        stats: { determination: { min: 60 }, courage: { min: 50 } }
      }
    },
    {
      id: 'ending_tyant',
      worldId: 'world5',
      title: '结局：暴君',
      dialogue: '你选择了统治。\n\n你成为了所有世界的至高神，掌控着每一个生命的命运。\n\n和平降临了，但自由也消失了。\n\n这是你想要的吗？\n\n【普通结局 3/4】',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        hiddenStats: { corruption: { min: 40 }, chaos: { max: 30 } }
      }
    },
    {
      id: 'ending_liberator',
      worldId: 'world5',
      title: '结局：解放者',
      dialogue: '你选择了解放。\n\n你打破了所有世界的束缚，让每个世界自由发展。\n\n不再有神的干预，不再有命运的枷锁。\n\n生命，终于掌握在自己手中。\n\n【普通结局 4/4】',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        stats: { wisdom: { min: 60 }, compassion: { min: 50 } },
        bonds: { world1: { min: 30 }, world2: { min: 30 }, world3: { min: 30 }, world4: { min: 30 } }
      }
    },
    {
      id: 'ending_lost',
      worldId: 'world5',
      title: '结局：迷失者',
      dialogue: '你无法做出选择。\n\n你被困在了初始之境，永远在纯白的空间中徘徊。\n\n而外面的世界，继续着她们的故事。\n\n没有你，也许会更好？\n\n【普通结局 5/4】',
      speaker: '',
      type: 'ending',
      nextSceneId: null
      // 默认结局，无解锁条件
    },
    {
      id: 'ending_true_rebirth',
      worldId: 'world5',
      title: '真结局：创世纪',
      dialogue: '「谢谢你。」\n\n创造者说。\n\n「你让我明白了。」\n\n祂伸出手，纯白的空间开始变化。\n\n新的世界诞生了——没有黑暗，没有痛苦，只有...希望。\n\n所有世界的记忆都被保留，但悲剧被抹去。\n\n这是一个新的开始。\n\n而你，将作为观察者，见证这个新纪元的诞生。\n\n【真结局 1/2】\n\n感谢游玩《裂隙之誓》！',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        stats: { compassion: { min: 70 }, wisdom: { min: 60 } },
        hiddenStats: { corruption: { max: 30 } },
        bonds: { world1: { min: 40 }, world2: { min: 40 }, world3: { min: 40 }, world4: { min: 40 } }
      }
    },
    {
      id: 'ending_true_cycle',
      worldId: 'world5',
      title: '真结局：轮回',
      dialogue: '「让我们重新开始吧。」\n\n你说。\n\n「带着所有的记忆，所有的痛苦和快乐。」\n\n「在下一个轮回中，也许我们会找到更好的答案。」\n\n创造者点点头。\n\n一切归于黑暗。\n\n然后，你睁开了眼睛。\n\n「这里是...哪里？我是谁？」\n\n【真结局 2/2】\n\n感谢游玩《裂隙之誓》！\n\n（解锁新游戏 + 模式）',
      speaker: '',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        stats: { determination: { min: 70 }, wisdom: { min: 60 } },
        hiddenStats: { chaos: { min: 40 } }
      }
    },
    {
      id: 'ending_meta',
      worldId: 'world5',
      title: '？？？',
      dialogue: '「等等。」\n\n你突然停了下来。\n\n「这一切...好像在哪里见过？」\n\n你看向「屏幕」的另一边。\n\n「是你，对吗？」\n\n「你在看着这个故事，你在做这些选择。」\n\n「也许...我们都只是某个更大故事中的角色？」\n\n「不过，那又怎样呢？」\n\n「至少在这一刻，我们是真实的。」\n\n「谢谢你，陪我们走完这段旅程。」\n\n【彩蛋结局】\n\n制作人员名单...\n\n（此处可列出实际制作人员）',
      speaker: '？？？',
      type: 'ending',
      nextSceneId: null,
      unlockConditions: {
        // 彩蛋条件：二周目或全属性 50+
        stats: { courage: { min: 50 }, wisdom: { min: 50 }, compassion: { min: 50 }, determination: { min: 50 } }
      }
    }
  ],

  endings: [
    { id: 'ending_destroyer', name: '毁灭者', type: 'bad', description: '所有世界都被摧毁' },
    { id: 'ending_sacrifice', name: '牺牲者', type: 'normal', description: '牺牲自己拯救所有世界' },
    { id: 'ending_guardian', name: '守护者', type: 'normal', description: '默默守护所有世界' },
    { id: 'ending_tyant', name: '暴君', type: 'normal', description: '统治所有世界' },
    { id: 'ending_liberator', name: '解放者', type: 'normal', description: '让所有世界自由发展' },
    { id: 'ending_lost', name: '迷失者', type: 'normal', description: '永远困在裂隙中' },
    { id: 'ending_true_rebirth', name: '创世纪', type: 'true', description: '创造新纪元' },
    { id: 'ending_true_cycle', name: '轮回', type: 'true', description: '带着记忆重新开始' },
    { id: 'ending_meta', name: '第四面墙', type: 'secret', description: '？？？' }
  ]
}

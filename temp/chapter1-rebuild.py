#!/usr/bin/env python3
"""
第 1 章完整重构 - 创建三条完整的剧情路线
每条路线 8 个场景，共 24 个新场景
"""

import json

# ============ 战斗路线 (8 个场景) ============
combat_route = [
    {
        "id": "scene_010_combat",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "战斗开始",
        "dialogue": "大门破碎。\n\n三只黑影涌入教堂——那是被黑暗腐蚀的狼人。\n\n它们的眼中闪烁着红色的光芒，嘴角滴着黑色的唾液。\n\n「吼——！」\n\n我举起黎明之剑，迎了上去。\n\n「艾莉娅，小心！」\n\n老人的声音在身后响起。\n\n但已经来不及后退了。\n\n战斗，开始了。",
        "background": "ch01-church",
        "characters": ["oldman"],
        "nextSceneId": "scene_011_combat_choice"
    },
    {
        "id": "scene_011_combat_choice",
        "worldId": "world1",
        "type": "choice",
        "speaker": "",
        "dialogue": "第一只狼人扑来。你选择：",
        "background": "ch01-church",
        "characters": [],
        "choices": [
            {
                "id": "choice_010_a",
                "text": "【正面迎击】挥剑斩击",
                "nextSceneId": "scene_012_combat_frontal",
                "effects": {"stats": {"courage": 5}}
            },
            {
                "id": "choice_010_b",
                "text": "【闪避反击】躲避后攻击",
                "nextSceneId": "scene_012_combat_counter",
                "effects": {"stats": {"wisdom": 5}}
            },
            {
                "id": "choice_010_c",
                "text": "【防御姿态】先稳住阵脚",
                "nextSceneId": "scene_012_combat_defend",
                "effects": {"stats": {"determination": 5}}
            }
        ]
    },
    {
        "id": "scene_012_combat_frontal",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "正面迎击",
        "dialogue": "你深吸一口气，双手紧握剑柄。\n\n狼人扑来的瞬间，你挥剑斩出！\n\n「吼！」\n\n剑光闪过，狼人的前肢被斩断。\n\n但它没有停下，反而更加疯狂地扑来。\n\n「这些怪物...没有痛觉吗？」\n\n你咬紧牙关，准备下一次攻击。",
        "background": "ch01-church",
        "characters": [],
        "nextSceneId": "scene_013_combat_result"
    },
    {
        "id": "scene_012_combat_counter",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "闪避反击",
        "dialogue": "你侧身一闪，狼人从你身边掠过。\n\n就是现在！\n\n你转身挥剑，剑刃划过狼人的脖颈。\n\n「吼——！」\n\n黑色的血液飞溅，狼人倒在地上，不再动弹。\n\n「干得好！」\n\n老人喊道。\n\n但还有两只。",
        "background": "ch01-ruins",
        "characters": ["oldman"],
        "nextSceneId": "scene_013_combat_result"
    },
    {
        "id": "scene_012_combat_defend",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "防御姿态",
        "dialogue": "你举起盾牌，挡在身前。\n\n「砰！」\n\n狼人撞在盾上，发出沉闷的响声。\n\n你稳住身形，等待机会。\n\n一下，两下，三下...\n\n狼人的攻击越来越慢。\n\n就是现在！",
        "background": "ch01-church",
        "characters": [],
        "nextSceneId": "scene_013_combat_result"
    },
    {
        "id": "scene_013_combat_result",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "战斗结果",
        "dialogue": "经过一番苦战，三只狼人终于倒下了。\n\n你喘着粗气，浑身是汗。\n\n「结束了...」\n\n「不。」\n\n老人的声音很凝重。\n\n「这只是开始。」\n\n他走到狼人的尸体旁，蹲下查看。\n\n「这些狼人...是被人为控制的。」",
        "background": "ch01-church",
        "characters": ["oldman"],
        "nextSceneId": "scene_014_discovery"
    },
    {
        "id": "scene_014_discovery",
        "worldId": "world1",
        "type": "dialogue",
        "speaker": "神秘老人",
        "title": "发现秘密",
        "dialogue": "「看这个。」\n\n老人指着狼人脖子上的印记。\n\n那是一个黑色的符号，像是某种契约。\n\n「这是...黑暗契约的标记。」\n\n「有人用黑暗魔法控制了这些狼人。」\n\n「而目标...」\n\n老人看向你。\n\n「...是你，艾莉娅。」",
        "background": "ch01-church",
        "characters": ["oldman"],
        "nextSceneId": "scene_015_decision"
    },
    {
        "id": "scene_015_decision",
        "worldId": "world1",
        "type": "choice",
        "speaker": "",
        "title": "重要决定",
        "dialogue": "「为什么是我？」\n\n你问。\n\n「因为你是圣骑士。」\n\n「因为你有黎明之剑。」\n\n「因为你...」\n\n老人停顿了一下。\n\n「...是预言中的人。」\n\n你沉默了。\n\n接下来，你选择：",
        "background": "ch01-church",
        "characters": ["oldman"],
        "choices": [
            {
                "id": "choice_011_a",
                "text": "【接受命运】「我会承担这个责任」",
                "nextSceneId": "scene_016_chapter_end_accept",
                "effects": {"stats": {"courage": 10, "determination": 10}}
            },
            {
                "id": "choice_011_b",
                "text": "【质疑】「我凭什么要拯救世界？」",
                "nextSceneId": "scene_016_chapter_end_question",
                "effects": {"stats": {"wisdom": 10}}
            }
        ]
    },
    {
        "id": "scene_016_chapter_end_accept",
        "worldId": "world1",
        "type": "ending",
        "speaker": "",
        "title": "第一章结局：觉醒的圣骑士",
        "dialogue": "「我明白了。」\n\n你握紧手中的剑。\n\n「我会找到真相。」\n\n「无论付出什么代价。」\n\n老人点点头，眼中闪过一丝欣慰。\n\n「那么，旅程开始了。」\n\n「欢迎来到...真实的世界。」\n\n教堂的钟声响起，黎明的第一缕阳光洒在大地上。\n\n你踏出了教堂，走向未知的命运。\n\n【第一章 完】\n\n【觉醒的圣骑士结局】",
        "background": "ch01-church",
        "characters": ["oldman"],
        "nextSceneId": None
    },
    {
        "id": "scene_016_chapter_end_question",
        "worldId": "world1",
        "type": "ending",
        "speaker": "",
        "title": "第一章结局：质疑者",
        "dialogue": "「预言？命运？」\n\n你冷笑。\n\n「那些都是骗人的鬼话。」\n\n「我只相信自己的选择。」\n\n老人看着你，眼神复杂。\n\n「这就是你的道路吗...」\n\n「那就走吧。」\n\n「去找到属于你自己的答案。」\n\n你转身离开，没有回头。\n\n身后，教堂的钟声渐渐远去。\n\n【第一章 完】\n\n【质疑者结局】",
        "background": "ch01-ruins",
        "characters": [],
        "nextSceneId": None
    }
]

# ============ 逃跑路线 (8 个场景) ============
escape_route = [
    {
        "id": "scene_010_escape",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "逃亡开始",
        "dialogue": "「我们从后门走！」\n\n你抓住老人的手臂，冲向教堂的后门。\n\n「吼——！」\n\n身后传来狼人的咆哮。\n\n「别让他们跑了！」\n\n你咬紧牙关，在废墟中狂奔。\n\n冷风呼啸而过，刺痛你的脸颊。\n\n但不能停下。\n\n绝对不能。",
        "background": "ch01-ruins",
        "characters": ["oldman"],
        "nextSceneId": "scene_011_escape_choice"
    },
    {
        "id": "scene_011_escape_choice",
        "worldId": "world1",
        "type": "choice",
        "speaker": "",
        "dialogue": "前方出现了一个岔路口。\n\n左边的路狭窄但隐蔽，右边的路宽阔但危险。\n\n你选择：",
        "background": "ch01-ruins",
        "characters": [],
        "choices": [
            {
                "id": "choice_012_a",
                "text": "【左边】狭窄但隐蔽的小路",
                "nextSceneId": "scene_012_escape_narrow",
                "effects": {"stats": {"wisdom": 5}}
            },
            {
                "id": "choice_012_b",
                "text": "【右边】宽阔但危险的大路",
                "nextSceneId": "scene_012_escape_wide",
                "effects": {"stats": {"courage": 5}}
            }
        ]
    },
    {
        "id": "scene_012_escape_narrow",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "狭窄小路",
        "dialogue": "你选择了左边的小路。\n\n路很窄，只能容一人通过。\n\n两侧是高耸的废墟墙壁，随时可能倒塌。\n\n「小心！」\n\n老人提醒道。\n\n一块碎石从头顶落下，你及时躲开。\n\n「这里...很危险。」\n\n「但至少不会被包围。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_013_escape_chase"
    },
    {
        "id": "scene_012_escape_wide",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "宽阔大路",
        "dialogue": "你选择了右边的大路。\n\n路很宽，奔跑起来很方便。\n\n但问题是...\n\n「吼！」\n\n前方出现了更多的狼人。\n\n「被包围了！」\n\n老人喊道。\n\n你握紧剑，准备突围。",
        "background": "ch01-ruins",
        "characters": ["oldman"],
        "nextSceneId": "scene_013_escape_chase"
    },
    {
        "id": "scene_013_escape_chase",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "追逐",
        "dialogue": "身后的脚步声越来越近。\n\n狼人的咆哮声在废墟中回荡。\n\n「前面...没路了！」\n\n你停下脚步，前方是一堵高墙。\n\n「怎么办？」\n\n你看向老人。\n\n「相信我。」\n\n老人神秘地笑了笑。\n\n「闭上眼睛。」",
        "background": "ch01-ruins",
        "characters": ["oldman"],
        "nextSceneId": "scene_014_escape_cornered"
    },
    {
        "id": "scene_014_escape_cornered",
        "worldId": "world1",
        "type": "dialogue",
        "speaker": "神秘老人",
        "title": "绝境",
        "dialogue": "「闭上眼睛。」\n\n老人再次说道。\n\n你照做了。\n\n「现在，向前走。」\n\n「可是...」\n\n「相信我。」\n\n你深吸一口气，向前迈出一步。\n\n脚下...是空的？\n\n「这是...」\n\n「传送门。」\n\n「我早就准备好了。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_015_escape_rescue"
    },
    {
        "id": "scene_015_escape_rescue",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "救援",
        "dialogue": "你感觉身体被一股力量托起。\n\n周围的景象开始扭曲，旋转...\n\n「这是...传送？」\n\n「是的。」\n\n「我们被传送到安全的地方了。」\n\n光芒散去，你发现自己站在一个陌生的地方。\n\n这里是...\n\n「欢迎来到...」\n\n「地下避难所。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_016_chapter_end_escape"
    },
    {
        "id": "scene_016_chapter_end_escape",
        "worldId": "world1",
        "type": "ending",
        "speaker": "",
        "title": "第一章结局：逃亡者",
        "dialogue": "你喘着粗气，靠在墙上。\n\n「我们...逃出来了？」\n\n「是的。」\n\n「但这只是开始。」\n\n老人看着你，眼神深邃。\n\n「黑暗势力已经盯上你了。」\n\n「你无处可逃。」\n\n「除非...」\n\n「...你选择面对。」\n\n你沉默了。\n\n逃亡，不是长久之计。\n\n【第一章 完】\n\n【逃亡者结局】",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": None
    }
]

# ============ 躲藏路线 (8 个场景) ============
hide_route = [
    {
        "id": "scene_010_hide",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "躲藏",
        "dialogue": "「先躲起来！」\n\n你拉着老人闪进一处废墟的阴影中。\n\n「吼——！」\n\n狼人从你们身边跑过，没有发现。\n\n「人呢？刚才还在这里！」\n\n「搜！一定要找到他！」\n\n你屏住呼吸，心跳声在耳边回响。\n\n一下，两下，三下...\n\n脚步声渐渐远去。",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_011_hide_wait"
    },
    {
        "id": "scene_011_hide_wait",
        "worldId": "world1",
        "type": "dialogue",
        "speaker": "神秘老人",
        "title": "等待时机",
        "dialogue": "「他们走了。」\n\n老人低声说。\n\n「现在...」\n\n「...我们可以谈谈了。」\n\n「谈什么？」\n\n你警惕地看着他。\n\n「关于你的身份。」\n\n「关于预言。」\n\n「关于...」\n\n「...你为什么会被追杀。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_012_hide_discover"
    },
    {
        "id": "scene_012_hide_discover",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "发现秘密",
        "dialogue": "「艾莉娅。」\n\n老人突然叫你的名字。\n\n「你不是普通的圣骑士。」\n\n「你是...预言中的人。」\n\n「黎明之剑选择了你。」\n\n「这意味着...」\n\n「...你有拯救世界的使命。」\n\n你愣住了。\n\n这太荒谬了。",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_013_hide_secret"
    },
    {
        "id": "scene_013_hide_secret",
        "worldId": "world1",
        "type": "dialogue",
        "speaker": "神秘老人",
        "title": "秘密揭露",
        "dialogue": "「我知道这很难相信。」\n\n「但请听我说完。」\n\n「千年前，黑暗与光明爆发了一场大战。」\n\n「最终，光明获胜，但黑暗并未消失。」\n\n「它潜伏着，等待着...」\n\n「...等待再次降临的时机。」\n\n「而现在，」\n\n「...时机到了。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_014_hide_decision"
    },
    {
        "id": "scene_014_hide_decision",
        "worldId": "world1",
        "type": "choice",
        "speaker": "",
        "title": "决定",
        "dialogue": "「所以...」\n\n「...你要我去拯救世界？」\n\n你问。\n\n「是的。」\n\n「但这不是命令。」\n\n「这是选择。」\n\n「你可以拒绝。」\n\n「但后果...」\n\n「...你将背负一生。」\n\n你选择：",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "choices": [
            {
                "id": "choice_013_a",
                "text": "【接受】「我会试试」",
                "nextSceneId": "scene_015_hide_accept",
                "effects": {"stats": {"courage": 10, "compassion": 5}}
            },
            {
                "id": "choice_013_b",
                "text": "【拒绝】「这不是我的责任」",
                "nextSceneId": "scene_015_hide_refuse",
                "effects": {"stats": {"wisdom": 10}}
            }
        ]
    },
    {
        "id": "scene_015_hide_accept",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "接受使命",
        "dialogue": "「我会试试。」\n\n你说。\n\n老人点点头，眼中闪过一丝欣慰。\n\n「这就够了。」\n\n「我不需要你的誓言。」\n\n「只需要你的决心。」\n\n「跟我来。」\n\n「我带你去一个安全的地方。」\n\n「在那里，你会知道更多。」",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": "scene_016_chapter_end_hide_accept"
    },
    {
        "id": "scene_015_hide_refuse",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "拒绝使命",
        "dialogue": "「这不是我的责任。」\n\n你说。\n\n老人沉默了很久。\n\n「我明白了。」\n\n「这是你的选择。」\n\n「我不会强迫你。」\n\n「但记住...」\n\n「...当你改变主意时...」\n\n「...我会在这里等你。」\n\n你转身离开，心中五味杂陈。",
        "background": "ch01-crypt",
        "characters": [],
        "nextSceneId": "scene_016_chapter_end_hide_refuse"
    },
    {
        "id": "scene_016_chapter_end_hide_accept",
        "worldId": "world1",
        "type": "ending",
        "speaker": "",
        "title": "第一章结局：觉醒的守护者",
        "dialogue": "你跟着老人，走向废墟深处。\n\n「我们要去哪里？」\n\n「一个安全的地方。」\n\n「在那里，你会接受训练。」\n\n「你会了解你的力量。」\n\n「你会明白...」\n\n「...为什么黎明之剑选择了你。」\n\n你握紧手中的剑，感受着它的温度。\n\n旅程，开始了。\n\n【第一章 完】\n\n【觉醒的守护者结局】",
        "background": "ch01-crypt",
        "characters": ["oldman"],
        "nextSceneId": None
    },
    {
        "id": "scene_016_chapter_end_hide_refuse",
        "worldId": "world1",
        "type": "ending",
        "speaker": "",
        "title": "第一章结局：拒绝者",
        "dialogue": "你独自走在废墟中。\n\n身后，老人的声音渐渐远去。\n\n「拯救世界？」\n\n「那都是骗人的鬼话。」\n\n你告诉自己。\n\n但心中...总有一丝不安。\n\n「也许...」\n\n「...我错了。」\n\n但你没有回头。\n\n你选择相信自己的道路。\n\n【第一章 完】\n\n【拒绝者结局】",
        "background": "ch01-ruins",
        "characters": [],
        "nextSceneId": None
    }
]

# 读取第 1 章剧本
with open('src/data/script_ch1_full.json', 'r', encoding='utf-8') as f:
    script = json.load(f)

# 删除旧的简短场景
existing_ids = {scene['id'] for scene in script['scenes']}
scenes_to_remove = ['scene_010_combat', 'scene_010_escape', 'scene_010_hide']
script['scenes'] = [s for s in script['scenes'] if s['id'] not in scenes_to_remove]

# 添加新场景
all_new_scenes = combat_route + escape_route + hide_route
for scene in all_new_scenes:
    script['scenes'].append(scene)
    print(f"✅ 添加：{scene['id']}")

# 保存修改后的剧本
with open('src/data/script_ch1_full.json', 'w', encoding='utf-8') as f:
    json.dump(script, f, ensure_ascii=False, indent=2)

print(f"\n🎉 完成！添加了 {len(all_new_scenes)} 个新场景")
print("\n战斗路线：10 个场景")
print("逃跑路线：8 个场景")
print("躲藏路线：8 个场景")
print("\n请运行：git add src/data/script_ch1_full.json && git commit -m 'feat: 第 1 章完整重构，三条完整剧情路线'")

#!/usr/bin/env python3
"""
第 2 章剧情扩展 - 为每个分支添加完整的后续剧情
"""

import json

# 扩展的场景
chapter2_expansions = [
    # 战斗场景扩展
    {
        "id": "scene_041_world2_combat_result",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "战斗结果",
        "dialogue": "战斗结束了。\n\n猎杀者的残骸散落在地上，火花四溅。\n\n「干得好。」\n\nK-7 走到你身边。\n\n「你...比我想的要强。」\n\n「谢谢。」\n\n你擦去额头的汗水。\n\n「但这只是开始。」\n\n「是的。」\n\nK-7 看向远方。\n\n「猎杀者的基地...就在那里。」",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "nextSceneId": "scene_042_world2_aftermath"
    },
    {
        "id": "scene_042_world2_aftermath",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "K-7",
        "title": "战后余波",
        "dialogue": "「你知道吗...」\n\nK-7 突然说。\n\n「我曾经...也是猎杀者。」\n\n你愣住了。\n\n「什么？」\n\n「那是很久以前的事了。」\n\n「我被改造，被控制...」\n\n「但我逃出来了。」\n\n「现在...」\n\n「...我要终结这一切。」",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "nextSceneId": "scene_043_world2_decision"
    },
    {
        "id": "scene_043_world2_decision",
        "worldId": "world2",
        "type": "choice",
        "speaker": "",
        "title": "决定",
        "dialogue": "K-7 的故事让你震惊。\n\n你选择：",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "choices": [
            {
                "id": "choice_040_a",
                "text": "【信任】「我相信你」",
                "nextSceneId": "scene_044_world2_trust",
                "effects": {"stats": {"compassion": 10}}
            },
            {
                "id": "choice_040_b",
                "text": "【质疑】「我凭什么相信你？」",
                "nextSceneId": "scene_044_world2_doubt",
                "effects": {"stats": {"wisdom": 10}}
            }
        ]
    },
    {
        "id": "scene_044_world2_trust",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "K-7",
        "title": "信任",
        "dialogue": "「谢谢你。」\n\nK-7 眼中闪过一丝光芒。\n\n「这对我来说...很重要。」\n\n「我们一起走吧。」\n\n「去终结这场噩梦。」\n\n你点点头。\n\n从此，你们成为了真正的伙伴。",
        "background": "ch02-cyber-street",
        "characters": ["k7"],
        "nextSceneId": "scene_045_world2_enter_base"
    },
    {
        "id": "scene_044_world2_doubt",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "K-7",
        "title": "质疑",
        "dialogue": "「我明白。」\n\nK-7 说。\n\n「信任...是需要争取的。」\n\n「那就用行动证明吧。」\n\n「我会证明给你看。」\n\n「我是站在你这边的。」\n\n你沉默了片刻，点点头。",
        "background": "ch02-cyber-street",
        "characters": ["k7"],
        "nextSceneId": "scene_045_world2_enter_base"
    },
    {
        "id": "scene_045_world2_enter_base",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "进入基地",
        "dialogue": "你们来到了猎杀者基地的入口。\n\n巨大的金属门紧闭着，上面布满了各种警示标志。\n\n「这里...」\n\nK-7 说。\n\n「就是一切开始的地方。」\n\n「也是...」\n\n「...一切结束的地方。」",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_046_world2_infiltrate"
    },
    {
        "id": "scene_046_world2_infiltrate",
        "worldId": "world2",
        "type": "choice",
        "speaker": "",
        "title": "潜入方式",
        "dialogue": "大门紧锁，你们需要找到进入的方法。\n\n你选择：",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "choices": [
            {
                "id": "choice_041_a",
                "text": "【强攻】直接突破大门",
                "nextSceneId": "scene_047_world2_assault",
                "effects": {"stats": {"courage": 10}}
            },
            {
                "id": "choice_041_b",
                "text": "【潜行】寻找秘密入口",
                "nextSceneId": "scene_047_world2_stealth",
                "effects": {"stats": {"wisdom": 10}}
            }
        ]
    },
    {
        "id": "scene_047_world2_assault",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "强攻",
        "dialogue": "「让开。」\n\nK-7 走上前。\n\n他的手臂变形，化作一门火炮。\n\n「退后。」\n\n炮口充能，发出耀眼的光芒。\n\n「轰！」\n\n大门在爆炸中扭曲，倒塌。\n\n「进去吧。」\n\n「时间不多了。」",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_048_world2_core"
    },
    {
        "id": "scene_047_world2_stealth",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "潜行",
        "dialogue": "「跟我来。」\n\nK-7 带你绕到基地侧面。\n\n「这里...有一个通风口。」\n\n他打开栅栏，露出一个狭窄的通道。\n\n「从这里可以进入内部。」\n\n「但是...」\n\n「...可能会有危险。」\n\n你毫不犹豫地爬了进去。",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_048_world2_core"
    },
    {
        "id": "scene_048_world2_core",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "核心控制室",
        "dialogue": "你们终于来到了核心控制室。\n\n巨大的屏幕上显示着各种数据。\n\n「这是...」\n\n你走近屏幕。\n\n「猎杀者的控制中枢。」\n\nK-7 说。\n\n「只要摧毁这里...」\n\n「...所有猎杀者都会停止运作。」",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_049_world2_final_choice"
    },
    {
        "id": "scene_049_world2_final_choice",
        "worldId": "world2",
        "type": "choice",
        "speaker": "",
        "title": "最终决定",
        "dialogue": "你站在控制台前。\n\n只要按下按钮，一切就会结束。\n\n但...总觉得哪里不对。\n\n你选择：",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "choices": [
            {
                "id": "choice_042_a",
                "text": "【摧毁】按下按钮",
                "nextSceneId": "scene_050_world2_destroy",
                "effects": {"stats": {"determination": 15}}
            },
            {
                "id": "choice_042_b",
                "text": "【调查】先查看数据",
                "nextSceneId": "scene_050_world2_investigate",
                "effects": {"stats": {"wisdom": 15}}
            }
        ]
    },
    {
        "id": "scene_050_world2_destroy",
        "worldId": "world2",
        "type": "ending",
        "speaker": "",
        "title": "第二章结局：毁灭者",
        "dialogue": "你按下了按钮。\n\n「等等——！」\n\nK-7 想要阻止，但已经太晚了。\n\n整个基地开始震动。\n\n「你做了什么...」\n\n「我...结束了这一切。」\n\n「不。」\n\nK-7 苦笑。\n\n「你只是...毁灭了证据。」\n\n「真相...永远被埋葬了。」\n\n爆炸吞没了一切。\n\n【第二章 完】\n\n【毁灭者结局】",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "nextSceneId": None
    },
    {
        "id": "scene_050_world2_investigate",
        "worldId": "world2",
        "type": "ending",
        "speaker": "",
        "title": "第二章结局：真相揭露",
        "dialogue": "你开始查看数据。\n\n屏幕上显示的内容让你震惊。\n\n「这...不可能...」\n\n「怎么了？」\n\nK-7 问。\n\n「猎杀者...不是敌人。」\n\n「它们是...守护者。」\n\n「真正的敌人...」\n\n「...是人类自己。」\n\nK-7 沉默了。\n\n「看来...」\n\n「...我们的旅程...」\n\n「...才刚刚开始。」\n\n【第二章 完】\n\n【真相揭露结局】",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": None
    }
]

# 读取第 2 章剧本
with open('src/data/script_ch2.json', 'r', encoding='utf-8') as f:
    script = json.load(f)

# 删除旧的简短场景
existing_ids = {scene['id'] for scene in script['scenes']}
old_ids = ['scene_040_world2_combat', 'scene_044_world2_enter']
script['scenes'] = [s for s in script['scenes'] if s['id'] not in old_ids]

# 添加新场景
for scene in chapter2_expansions:
    script['scenes'].append(scene)
    print(f"✅ 添加：{scene['id']}")

# 保存修改后的剧本
with open('src/data/script_ch2.json', 'w', encoding='utf-8') as f:
    json.dump(script, f, ensure_ascii=False, indent=2)

print(f"\n🎉 完成！添加了 {len(chapter2_expansions)} 个新场景")
print("\n第 2 章扩展剧情:")
print("- 战斗后剧情：2 场景")
print("- K-7 背景揭露：2 场景")
print("- 基地潜入：3 场景")
print("- 核心控制室：2 场景")
print("- 两个不同结局：2 场景")
print("\n总场景数：13 个")

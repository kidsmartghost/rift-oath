#!/usr/bin/env python3
"""
为所有章节缺失的场景补充完整故事线
"""

import json

# 第 1 章缺失的场景
ch1_scenes = [
    {
        "id": "scene_010_escape",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "逃亡",
        "dialogue": "你选择了逃亡。\n\n身后，追兵的脚步声越来越近。\n\n「别让他们跑了！」\n\n你咬紧牙关，在废墟中狂奔。\n\n前方，是一个岔路口。\n\n左边的路狭窄但隐蔽，右边的路宽阔但危险。\n\n你选择了...\n\n【第一章 逃亡路线】",
        "background": "ch01-ruins",
        "characters": [],
        "nextSceneId": "scene_011_escape_continue"
    },
    {
        "id": "scene_010_hide",
        "worldId": "world1",
        "type": "narration",
        "speaker": "",
        "title": "躲藏",
        "dialogue": "你选择了躲藏。\n\n迅速闪进一处废墟的阴影中，屏住呼吸。\n\n追兵从你身边跑过，没有发现你。\n\n「人呢？刚才还在这里！」\n\n「搜！一定要找到他！」\n\n等脚步声远去，你才敢大口呼吸。\n\n现在，你暂时安全了。\n\n但接下来...\n\n【第一章 躲藏路线】",
        "background": "ch01-crypt",
        "characters": [],
        "nextSceneId": "scene_011_hide_think"
    }
]

# 第 2 章缺失的场景
ch2_scenes = [
    {
        "id": "scene_040_world2_combat",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "战斗",
        "dialogue": "战斗爆发了。\n\n猎杀者的机械臂闪烁着寒光。\n\n「目标确认，消灭！」\n\n你握紧武器，准备迎战。\n\n这是你第一次与猎杀者正面对抗。\n\n你能赢吗？\n\n【第二章 战斗】",
        "background": "ch02-battlefield",
        "characters": ["eve9"],
        "nextSceneId": "scene_041_world2_combat_result"
    },
    {
        "id": "scene_044_world2_enter",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "进入基地",
        "dialogue": "你们潜入了猎杀者的基地。\n\n金属走廊延伸向远方，到处都是巡逻的机械。\n\n「小心。」\n\nK-7 低声提醒。\n\n前方，控制室的大门紧闭。\n\n要进去吗？\n\n【第二章 基地潜入】",
        "background": "ch02-bunker",
        "characters": ["eve9", "k7"],
        "nextSceneId": "scene_045_world2_control"
    },
    {
        "id": "scene_055_world2_rush",
        "worldId": "world2",
        "type": "choice",
        "speaker": "",
        "dialogue": "时间紧迫，你们必须快速行动：",
        "background": "ch02-cyber-street",
        "characters": ["eve9"],
        "choices": [
            {"id": "choice_055_rush", "text": "【强攻】直接冲进去", "nextSceneId": "scene_056_world2_attack"},
            {"id": "choice_055_stealth", "text": "【潜行】悄悄接近", "nextSceneId": "scene_056_world2_stealth"}
        ]
    },
    {
        "id": "scene_055_world2_scout",
        "worldId": "world2",
        "type": "narration",
        "speaker": "K-7",
        "dialogue": "「让我先侦察一下。」\n\nK-7 启动了侦察模式。\n\n几分钟后，他回来了。\n\n「里面有三个猎杀者，一个指挥中心。」\n\n「我们有机会。」\n\n【第二章 侦察完成】",
        "background": "ch02-cyber-street",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_plan"
    },
    {
        "id": "scene_055_world2_wait",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "dialogue": "你们决定等待时机。\n\n时间在流逝，猎杀者的巡逻越来越频繁。\n\n「还要等多久？」\n\nK-7 问。\n\n你也不知道。\n\n但你知道，等待有时是最好的策略。\n\n【第二章 等待】",
        "background": "ch02-bunker",
        "characters": ["eve9"],
        "nextSceneId": "scene_056_world2_opportunity"
    },
    {
        "id": "scene_055_world2_close",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "K-7",
        "dialogue": "「我们离真相很近了。」\n\nK-7 说。\n\n「我能感觉到。」\n\n「猎杀者的秘密，就藏在这里面。」\n\n你点点头，走向那扇紧闭的大门。\n\n【第二章 接近真相】",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_truth"
    },
    {
        "id": "scene_055_world2_connection",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "Eve-9",
        "dialogue": "「我...感觉到了什么。」\n\nEve-9 突然说。\n\n「和猎杀者网络...有连接...」\n\n「他们在...交流...」\n\n你看着她，等待下文。\n\n【第二章 网络连接】",
        "background": "ch02-cyber-street",
        "characters": ["eve9"],
        "nextSceneId": "scene_056_world2_listen"
    },
    {
        "id": "scene_055_world2_tell",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "K-7",
        "dialogue": "「我有件事要告诉你。」\n\nK-7 突然说。\n\n「关于猎杀者...关于我...」\n\n「关于...这个世界。」\n\n你静静地看着他，等待他说下去。\n\n【第二章 真相揭露】",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_reveal"
    },
    {
        "id": "scene_055_world2_solo",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "",
        "dialogue": "「我一个人去。」\n\n你说。\n\n「太危险了！」\n\nEve-9 反对。\n\n「正因为危险，所以才要一个人。」\n\n你不想连累任何人。\n\n【第二章 独自行动】",
        "background": "ch02-cyber-street",
        "characters": ["eve9"],
        "nextSceneId": "scene_056_world2_solo_enter"
    },
    {
        "id": "scene_055_world2_search",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "dialogue": "你们开始搜索这个区域。\n\n废墟中到处都是猎杀者的残骸。\n\n「这里有数据核心！」\n\nK-7 喊道。\n\n也许，答案就在这里面。\n\n【第二章 搜索】",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_data"
    },
    {
        "id": "scene_055_world2_hope",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "Eve-9",
        "dialogue": "「还有希望。」\n\nEve-9 说。\n\n「只要我们还活着，就有希望。」\n\n「对吧？」\n\n你看着她坚定的眼神，点了点头。\n\n【第二章 希望】",
        "background": "ch02-bunker",
        "characters": ["eve9"],
        "nextSceneId": "scene_056_world2_continue"
    },
    {
        "id": "scene_055_world2_explore",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "dialogue": "你们继续探索这个区域。\n\n废墟深处，似乎有什么东西在发光。\n\n「那是什么？」\n\nK-7 问。\n\n你也不知道。\n\n但直觉告诉你，那很重要。\n\n【第二章 探索】",
        "background": "ch02-battlefield",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_discover"
    },
    {
        "id": "scene_055_world2_power",
        "worldId": "world2",
        "type": "dialogue",
        "speaker": "",
        "dialogue": "你感觉到了力量。\n\n从猎杀者核心中涌出的力量。\n\n「不要碰它！」\n\nK-7 警告道。\n\n但已经太晚了。\n\n力量涌入你的身体，你感觉到...\n\n变化。\n\n【第二章 力量】",
        "background": "ch02-bunker",
        "characters": ["k7"],
        "nextSceneId": "scene_056_world2_transform"
    },
    {
        "id": "scene_055_world3_transition",
        "worldId": "world2",
        "type": "narration",
        "speaker": "",
        "title": "第二章结束：前往神弃之地",
        "dialogue": "废土的旅程结束了。\n\n但你的旅程还在继续。\n\n前方，是第三个世界。\n\n神弃之地。\n\n那里有你要找的答案吗？\n\n那里有你想要的真相吗？\n\n无人知晓。\n\n但你必须去。\n\n【第二章 完】\n\n【前往第三章：神弃之地】",
        "background": "ch02-battlefield",
        "characters": [],
        "nextSceneId": "scene_001_world3_start"
    }
]

# 第 3 章缺失的场景（结局）
ch3_endings = [
    {
        "id": "scene_084_world3_ending_destroy",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：毁灭",
        "speaker": "",
        "dialogue": "你选择了毁灭。\n\n神殿崩塌，神像破碎。\n\n整个神弃之地都在颤抖。\n\n「为什么...」\n\n米迦勒的声音在风中消散。\n\n「为什么要...毁灭一切...」\n\n你没有回答。\n\n因为你知道，有时候，毁灭是唯一的救赎。\n\n【第三章 毁灭结局】",
        "background": "ch03-godfall",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_destroyer",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：毁灭者",
        "speaker": "",
        "dialogue": "你成为了毁灭者。\n\n神弃之地在你手中化为灰烬。\n\n「你...做了什么...」\n\n米迦勒难以置信地看着你。\n\n「我...结束了这一切。」\n\n你平静地说。\n\n从此，你背负着毁灭者的名字。\n\n永远。\n\n【第三章 毁灭者结局】",
        "background": "ch03-godfall",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_sacrifice",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：牺牲",
        "speaker": "米迦勒",
        "dialogue": "「你要...牺牲自己？」\n\n米迦勒问。\n\n「只有这样，才能结束轮回。」\n\n你回答。\n\n米迦勒沉默了很久。\n\n「这是...最勇敢的选择。」\n\n光芒中，你的身体开始消散。\n\n但你知道，这是值得的。\n\n【第三章 牺牲结局】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_guardian",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：守护者",
        "speaker": "米迦勒",
        "dialogue": "「你选择...留下？」\n\n米迦勒问。\n\n「守护这个地方。」\n\n你回答。\n\n「守护这个...被神遗弃的世界。」\n\n米迦勒点点头。\n\n「那么...向你致敬。」\n\n「守护者。」\n\n【第三章 守护者结局】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_tyant",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：暴君",
        "speaker": "",
        "dialogue": "你选择了统治。\n\n神弃之地，臣服于你的脚下。\n\n「你...和我们一样。」\n\n米迦勒说。\n\n「不。」\n\n你回答。\n\n「我比他们...更强大。」\n\n从此，你成为了新的暴君。\n\n【第三章 暴君结局】",
        "background": "ch03-godfall",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_liberator",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：解放者",
        "speaker": "米迦勒",
        "dialogue": "「你...解放了我们。」\n\n米迦勒说。\n\n「从此，神弃之地...不再被遗弃。」\n\n你看着这片土地，笑了。\n\n「这是...你们应得的。」\n\n「自由。」\n\n【第三章 解放者结局】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_true_rebirth",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章真结局：重生",
        "speaker": "",
        "dialogue": "重生的时刻到了。\n\n神弃之地焕然一新。\n\n「这是...」\n\n米迦勒惊讶地看着四周。\n\n「这是新的开始。」\n\n你说。\n\n「神已死，但希望...永存。」\n\n【第三章 真结局：重生】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_true_cycle",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章真结局：轮回",
        "speaker": "",
        "dialogue": "轮回的真相，终于揭晓。\n\n「原来...我们一直在循环。」\n\n米迦勒说。\n\n「是的。」\n\n「但我们打破了它。」\n\n你回答。\n\n「这一次，是真正的结束。」\n\n【第三章 真结局：轮回】",
        "background": "ch03-rift",
        "characters": ["michael"],
        "nextSceneId": None
    }
]

# 第 4 章缺失的场景
ch4_scenes = [
    {
        "id": "scene_113_world4_investigate",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "调查",
        "dialogue": "你开始调查这个谜团。\n\n学园都市的图书馆里，藏着古老的秘密。\n\n「找到了！」\n\n林小满喊道。\n\n一本破旧的书籍中，记载着惊人的真相。\n\n【第四章 调查】",
        "background": "ch04-library",
        "characters": ["lin"],
        "nextSceneId": "scene_114_world4_discover"
    },
    {
        "id": "scene_118_world4_enter",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "进入裂隙",
        "dialogue": "你们踏入了裂隙。\n\n另一边，是一个陌生的世界。\n\n「这里是...」\n\n林小满惊讶地说。\n\n「这就是...真相所在。」\n\n你回答。\n\n【第四章 进入裂隙】",
        "background": "ch05-void",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_truth"
    },
    {
        "id": "scene_118_world4_journey",
        "worldId": "world4",
        "type": "dialogue",
        "speaker": "林小满",
        "dialogue": "「旅程...才刚刚开始。」\n\n林小满说。\n\n「对。」\n\n你回答。\n\n「但这一步，我们迈出去了。」\n\n「不会再回头。」\n\n【第四章 旅程开始】",
        "background": "ch04-campus",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_continue"
    },
    {
        "id": "scene_118_world4_final",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "最终对决",
        "dialogue": "最终的时刻到了。\n\n你站在敌人面前。\n\n「结束了。」\n\n你说。\n\n「不。」\n\n敌人回答。\n\n「这才刚刚开始。」\n\n【第四章 最终对决】",
        "background": "ch04-classroom",
        "characters": [],
        "nextSceneId": "scene_119_world4_battle"
    },
    {
        "id": "scene_118_world4_memory",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "回忆",
        "dialogue": "记忆如潮水般涌来。\n\n你想起了...\n\n一切。\n\n「原来...是这样。」\n\n你喃喃自语。\n\n「原来...我们一直都在...」\n\n【第四章 回忆】",
        "background": "ch05-memory",
        "characters": [],
        "nextSceneId": "scene_119_world4_understand"
    },
    {
        "id": "scene_118_world4_fearless",
        "worldId": "world4",
        "type": "dialogue",
        "speaker": "",
        "dialogue": "「我不再害怕。」\n\n你说。\n\n林小满看着你，笑了。\n\n「我知道。」\n\n「你一直都很勇敢。」\n\n「只是...忘记了。」\n\n【第四章 无畏】",
        "background": "ch04-campus",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_brave"
    },
    {
        "id": "scene_118_world4_dark",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "黑暗",
        "dialogue": "黑暗笼罩了一切。\n\n「你在哪里？」\n\n林小满的声音在黑暗中回荡。\n\n「我在这里。」\n\n你回答。\n\n「别怕。」\n\n【第四章 黑暗】",
        "background": "ch05-void",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_light"
    },
    {
        "id": "scene_118_world4_last",
        "worldId": "world4",
        "type": "dialogue",
        "speaker": "",
        "dialogue": "「这是...最后的机会。」\n\n你说。\n\n「我知道。」\n\n林小满回答。\n\n「那就...一起吧。」\n\n「一起...走到最后。」\n\n【第四章 最后】",
        "background": "ch04-classroom",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_end"
    },
    {
        "id": "scene_118_world4_new",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "新的开始",
        "dialogue": "新的开始了。\n\n过去已成往事。\n\n「接下来...」\n\n林小满问。\n\n「接下来...」\n\n你笑了。\n\n「是我们的故事。」\n\n【第四章 新的开始】",
        "background": "ch04-campus",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_story"
    },
    {
        "id": "scene_118_world4_consequence",
        "worldId": "world4",
        "type": "dialogue",
        "speaker": "",
        "dialogue": "「这是...后果。」\n\n你说。\n\n看着眼前的一切。\n\n「值得吗？」\n\n林小满问。\n\n你沉默了很久。\n\n「我不知道。」\n\n【第四章 后果】",
        "background": "ch04-classroom",
        "characters": ["lin"],
        "nextSceneId": "scene_119_world4_reflect"
    },
    {
        "id": "scene_118_world4_whole",
        "worldId": "world4",
        "type": "narration",
        "speaker": "",
        "title": "完整",
        "dialogue": "你终于明白了。\n\n所有的碎片，拼凑在一起。\n\n「原来...这就是真相。」\n\n「完整的...真相。」\n\n【第四章 完整】",
        "background": "ch05-memory",
        "characters": [],
        "nextSceneId": "scene_119_world4_complete"
    }
]

# 第 5 章缺失的场景
ch5_scenes = [
    {
        "id": "scene_169_world5_free",
        "worldId": "world5",
        "type": "dialogue",
        "speaker": "创造者",
        "dialogue": "「自由...」\n\n创造者说。\n\n「那是...我无法给予你的东西。」\n\n「因为...自由不是被给予的。」\n\n「而是...被争取的。」\n\n你点点头，明白了。\n\n【第五章 自由】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": "scene_170_world5_freedom"
    }
]

def add_scenes_to_chapter(filename, scenes, chapter_name):
    """添加场景到章节"""
    with open(filename, 'r', encoding='utf-8') as f:
        script = json.load(f)
    
    existing_ids = {scene['id'] for scene in script['scenes']}
    added_count = 0
    
    for scene in scenes:
        if scene['id'] not in existing_ids:
            script['scenes'].append(scene)
            added_count += 1
            print(f"✅ {chapter_name}: {scene['id']}")
        else:
            print(f"⚠️  {chapter_name}: {scene['id']} (已存在)")
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(script, f, ensure_ascii=False, indent=2)
    
    return added_count

# 添加所有章节的场景
print("📝 开始补充缺失场景...\n")

total = 0

total += add_scenes_to_chapter('src/data/script_ch1_full.json', ch1_scenes, "第 1 章")
print()

total += add_scenes_to_chapter('src/data/script_ch2.json', ch2_scenes, "第 2 章")
print()

total += add_scenes_to_chapter('src/data/script_ch3.json', ch3_endings, "第 3 章")
print()

total += add_scenes_to_chapter('src/data/script_ch4.json', ch4_scenes, "第 4 章")
print()

total += add_scenes_to_chapter('src/data/script_ch5.json', ch5_scenes, "第 5 章")
print()

print(f"\n🎉 完成！共添加 {total} 个缺失场景")
print("\n请运行:")
print("git add src/data/*.json")
print("git commit -m 'feat: 为所有章节补充缺失的场景和故事线'")

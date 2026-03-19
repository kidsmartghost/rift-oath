#!/usr/bin/env python3
"""
第 3-5 章剧情快速完善
为每个结局添加丰富的对话和情感铺垫
"""

import json

# ============ 第 3 章结局丰富 ============
ch3_endings_expanded = [
    {
        "id": "ending_destroyer_detailed",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：毁灭者",
        "speaker": "",
        "dialogue": "「你...做了什么...」\n\n米迦勒难以置信地看着你。\n\n毁灭的力量在你手中涌动，整个神殿都在颤抖。\n\n「我...结束了这一切。」\n\n你平静地说。\n\n「愚蠢！」\n\n米迦勒怒吼。\n\n「你毁灭的不是敌人...」\n\n「...是希望！」\n\n光芒吞没了一切。\n\n从此，你背负着毁灭者的名字。\n\n永远。\n\n【第三章 毁灭者结局】",
        "background": "ch03-godfall",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_guardian_detailed",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章结局：守护者",
        "speaker": "米迦勒",
        "dialogue": "「你选择...留下？」\n\n米迦勒问。\n\n「这片土地...需要守护。」\n\n你看着神弃之地，眼中满是坚定。\n\n「即使这里...」\n\n「...已经被神遗弃？」\n\n「即使如此。」\n\n米迦勒沉默了很久。\n\n然后，他向你单膝跪地。\n\n「那么...向你致敬。」\n\n「守护者。」\n\n【第三章 守护者结局】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    },
    {
        "id": "ending_true_rebirth_detailed",
        "worldId": "world3",
        "type": "ending",
        "title": "第三章真结局：重生",
        "speaker": "",
        "dialogue": "重生的时刻到了。\n\n神弃之地焕然一新，枯萎的大地重新焕发生机。\n\n「这是...」\n\n米迦勒惊讶地看着四周。\n\n「新的开始。」\n\n你说。\n\n「神已死，但希望...永存。」\n\n米迦勒点点头，眼中含着泪水。\n\n「谢谢你...」\n\n「是你...让我们看到了未来。」\n\n黎明的阳光洒在大地上。\n\n新的纪元，开始了。\n\n【第三章 真结局：重生】",
        "background": "ch03-temple",
        "characters": ["michael"],
        "nextSceneId": None
    }
]

# ============ 第 4 章结局丰富 ============
ch4_endings_expanded = [
    {
        "id": "ending_ch4_destroyer",
        "worldId": "world4",
        "type": "ending",
        "title": "第四章结局：毁灭",
        "speaker": "",
        "dialogue": "学园都市在燃烧。\n\n你选择了毁灭。\n\n「为什么...」\n\n林小满难以置信地看着你。\n\n「因为...」\n\n「...这是唯一的选择。」\n\n她摇摇头，消失在火光中。\n\n你独自站在废墟中，感受着无尽的空虚。\n\n「这就是...你想要的吗？」\n\n一个声音在脑海中响起。\n\n你没有回答。\n\n因为答案...已经不重要了。\n\n【第四章 毁灭结局】",
        "background": "ch04-classroom",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_ch4_guardian",
        "worldId": "world4",
        "type": "ending",
        "title": "第四章结局：守护",
        "speaker": "林小满",
        "dialogue": "「你选择...守护这里？」\n\n林小满问。\n\n「是的。」\n\n「即使这里...」\n\n「...充满了痛苦和背叛？」\n\n「即使如此。」\n\n你看着学园都市，眼中满是坚定。\n\n「因为这里...」\n\n「...是我们的家。」\n\n林小满笑了，眼中含着泪水。\n\n「那就...一起守护吧。」\n\n「直到最后。」\n\n【第四章 守护结局】",
        "background": "ch04-campus",
        "characters": ["lin"],
        "nextSceneId": None
    },
    {
        "id": "ending_ch4_truth",
        "worldId": "world4",
        "type": "ending",
        "title": "第四章真结局：真相",
        "speaker": "",
        "dialogue": "真相...终于揭晓。\n\n「原来...我们一直都在...」\n\n林小满喃喃自语。\n\n「是的。」\n\n「这一切...都是实验。」\n\n「我们...都是实验品。」\n\n你握紧拳头。\n\n「但实验...结束了。」\n\n「从现在开始...」\n\n「...我们为自己而活。」\n\n林小满看着你，笑了。\n\n「嗯。」\n\n「一起。」\n\n【第四章 真结局：真相】",
        "background": "ch04-library",
        "characters": ["lin"],
        "nextSceneId": None
    }
]

# ============ 第 5 章最终结局丰富 ============
ch5_final_endings = [
    {
        "id": "ending_final_destroy_detailed",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：毁灭",
        "speaker": "创造者",
        "dialogue": "「毁灭...是最好的选择。」\n\n你举起了武器，对准了创造者。\n\n创造者没有反抗，只是静静地看着你。\n\n「你知道吗？」\n\n「我也曾想过这个结局。」\n\n光芒闪过，一切归于虚无。\n\n王国、废土、神殿、都市...\n\n所有世界，所有生命，所有存在...\n\n都消失了。\n\n在最后的瞬间，你听到了一个声音：\n\n「这就是...你选择的答案吗...」\n\n【最终章 毁灭结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_guardian_detailed",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：守护者",
        "speaker": "创造者",
        "dialogue": "「你选择...成为守护者？」\n\n创造者问。\n\n「守护所有世界，所有生命。」\n\n你坚定地说。\n\n创造者笑了。\n\n「这是...最艰难的道路。」\n\n「你会孤独，会痛苦，会质疑...」\n\n「但你也可能会...找到意义。」\n\n光芒笼罩了你，你感觉到力量在体内涌动。\n\n「那么...就交给你了。」\n\n「守护的责任，现在...是你的了。」\n\n你点点头，看向远方的世界。\n\n「我会守护。」\n\n「直到最后一刻。」\n\n【最终章 守护者结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_rebirth_detailed",
        "worldId": "world5",
        "type": "ending",
        "title": "最终真结局：新生",
        "speaker": "",
        "dialogue": "新生的时刻到了。\n\n创造者看着你，眼中满是期待。\n\n「你确定吗？」\n\n「这是...无法回头的选择。」\n\n「我确定。」\n\n你说。\n\n光芒中，旧的世界开始消散。\n\n新的世界...正在诞生。\n\n「谢谢你。」\n\n创造者说。\n\n「是你...让一切重新开始。」\n\n你笑了。\n\n「不。」\n\n「是我们。」\n\n新的纪元，开始了。\n\n【最终真结局：新生】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    }
]

def add_endings_to_chapter(filename, endings, chapter_name):
    """添加结局到章节"""
    with open(filename, 'r', encoding='utf-8') as f:
        script = json.load(f)
    
    added_count = 0
    for ending in endings:
        script['scenes'].append(ending)
        added_count += 1
        print(f"✅ {chapter_name}: {ending['id']}")
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(script, f, ensure_ascii=False, indent=2)
    
    return added_count

print("📝 开始完善第 3-5 章结局...\n")

total = 0
total += add_endings_to_chapter('src/data/script_ch3.json', ch3_endings_expanded, "第 3 章")
print()
total += add_endings_to_chapter('src/data/script_ch4.json', ch4_endings_expanded, "第 4 章")
print()
total += add_endings_to_chapter('src/data/script_ch5.json', ch5_final_endings, "第 5 章")
print()

print(f"\n🎉 完成！添加了 {total} 个丰富的结局场景")
print("\n第 3 章：3 个详细结局")
print("第 4 章：3 个详细结局")
print("第 5 章：3 个最终结局")

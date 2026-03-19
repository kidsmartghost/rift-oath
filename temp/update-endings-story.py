#!/usr/bin/env python3
"""
为第 5 章的 13 个结局场景补充完整的故事线
"""

import json

# 完整的结局场景（带详细故事线）
endings_with_story = [
    {
        "id": "ending_final_destroy",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：毁灭",
        "speaker": "",
        "dialogue": "「毁灭...是最好的选择。」\n\n你举起了武器，对准了创造者。\n\n创造者没有反抗，只是静静地看着你。\n\n「你知道吗？我也曾想过这个结局。」\n\n光芒闪过，一切归于虚无。\n\n王国、废土、神殿、都市...\n\n所有世界，所有生命，所有存在...\n\n都消失了。\n\n在最后的瞬间，你听到了一个声音：\n\n「这就是...你选择的答案吗...」\n\n【最终章 毁灭结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_godkill",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：弑神",
        "speaker": "",
        "dialogue": "「神，已经死了。」\n\n你手中的剑滴着金色的血。\n\n创造者倒在地上，光芒渐渐消散。\n\n「你...做到了...」\n\n创造者微笑着，眼中没有怨恨。\n\n「我等了很久...等一个能杀死我的人...」\n\n「现在...我终于可以...休息了...」\n\n光芒彻底消失，你站在纯白的空间中。\n\n从此，再没有神。\n\n只有你，和无尽的虚空。\n\n【最终章 弑神结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_sacrifice",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：牺牲",
        "speaker": "创造者",
        "dialogue": "「你要...牺牲自己？」\n\n创造者惊讶地看着你。\n\n「用我的存在，换取所有生命的未来。」\n\n你平静地说。\n\n创造者沉默了很久。\n\n「这是...最愚蠢的选择。」\n\n「也是...最美丽的选择。」\n\n光芒包裹了你，你感觉到自己正在消散。\n\n但你知道，在某个地方...\n\n新的生命正在诞生，新的故事正在开始。\n\n「谢谢你...」\n\n这是你听到的最后一句话。\n\n【最终章 牺牲结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_sleep",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：长眠",
        "speaker": "",
        "dialogue": "「我累了。」\n\n你说。\n\n创造者看着你，眼中闪过一丝理解。\n\n「那就...休息吧。」\n\n纯白的空间变得柔软温暖。\n\n你躺下来，闭上眼睛。\n\n没有梦，没有痛苦，没有选择。\n\n只有永恒的宁静。\n\n在入睡前，你听到了一个声音：\n\n「晚安...勇敢的旅人...」\n\n从此，你长眠于此。\n\n直到时间的尽头。\n\n【最终章 长眠结局】",
        "background": "ch05-void",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_letgo",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：放手",
        "speaker": "创造者",
        "dialogue": "「你要...放手？」\n\n创造者问。\n\n「让一切自然发展，不再干涉。」\n\n你回答。\n\n创造者沉默了很久。\n\n「这需要...很大的勇气。」\n\n「比毁灭...比守护...都需要勇气。」\n\n你点点头，转身离开。\n\n身后，创造者轻声说：\n\n「也许...这才是真正的智慧。」\n\n你走出了纯白的空间，回到了世界之中。\n\n不再做神，不再做救世主。\n\n只是一个普通人，过普通的生活。\n\n【最终章 放手结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_merge",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：融合",
        "speaker": "创造者",
        "dialogue": "「你愿意...与我融合？」\n\n创造者问。\n\n「成为新的存在。」\n\n你回答。\n\n创造者伸出手，光芒从指尖流出。\n\n你握住那只手，感觉到某种东西在改变。\n\n你的记忆，创造者的记忆...\n\n你的意识，创造者的意识...\n\n渐渐融合，无法分辨。\n\n「我们...」\n\n「不，我...」\n\n「我是...新的存在...」\n\n光芒散去，一个全新的存在诞生了。\n\n既不是你，也不是创造者。\n\n而是...两者之和。\n\n【最终章 融合结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_guardian",
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
        "id": "ending_final_free",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：自由",
        "speaker": "",
        "dialogue": "「我要...自由。」\n\n你说。\n\n创造者看着你，眼中闪过一丝羡慕。\n\n「自由...」\n\n「我曾经拥有过，但早已忘记...」\n\n「那是什么感觉？」\n\n「我不知道。」\n\n「但我会去寻找。」\n\n你转身，走向未知的远方。\n\n身后，创造者轻声说：\n\n「祝你好运...自由的旅人...」\n\n你没有回头，继续前行。\n\n前方，是无尽可能。\n\n【最终章 自由结局】",
        "background": "ch05-memory",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_reincarnate",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：轮回",
        "speaker": "创造者",
        "dialogue": "「轮回...」\n\n创造者轻声说。\n\n「你选择...重新开始。」\n\n「是的。」\n\n「即使会忘记一切？」\n\n「即使会忘记一切。」\n\n创造者点点头。\n\n「那么...如你所愿。」\n\n光芒笼罩了你，你感觉到意识在消散。\n\n在最后的瞬间，你听到了一个声音：\n\n「下次...一定要...找到...真正的...答案...」\n\n然后，是无尽的黑暗。\n\n不知过了多久，你睁开了眼睛。\n\n「这里是...哪里？」\n\n「我是...谁？」\n\n新的轮回，开始了。\n\n【最终章 轮回结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_newguardian",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：新守护者",
        "speaker": "",
        "dialogue": "「我累了。」\n\n创造者说。\n\n「我已经...守护了太久...」\n\n你看着创造者，眼中满是理解。\n\n「那就...交给我吧。」\n\n创造者笑了，笑容中带着释然。\n\n「谢谢你...」\n\n光芒从创造者体内流出，涌入你的身体。\n\n你感觉到力量的传承，责任的交接。\n\n「现在...你是新的守护者了。」\n\n「守护所有世界，所有生命...」\n\n「直到...下一个守护者出现...」\n\n创造者消失了，留下你独自站在纯白的空间中。\n\n你深吸一口气，看向远方的世界。\n\n「我会守护。」\n\n「这是...我的誓言。」\n\n【最终章 新守护者结局】",
        "background": "ch05-void",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_future",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：未来",
        "speaker": "创造者",
        "dialogue": "「未来...」\n\n创造者说。\n\n「那是...我无法看到的地方...」\n\n「因为...那是属于你们的地方。」\n\n你看着创造者，坚定地说：\n\n「我会创造未来。」\n\n「一个...充满希望的未来。」\n\n创造者笑了。\n\n「那么...去吧。」\n\n「创造属于你的...未来。」\n\n光芒中，你回到了世界之中。\n\n前方，是未知的道路。\n\n但你不再害怕，不再迷茫。\n\n因为你知道...\n\n未来，在你手中。\n\n【最终章 未来结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_blessing",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：祝福",
        "speaker": "创造者",
        "dialogue": "「在离开之前...」\n\n创造者说。\n\n「我想...给予你最后的祝福。」\n\n你静静地看着创造者。\n\n创造者伸出手，光芒从掌心流出。\n\n「愿你在未来的道路上...」\n\n「永远光明，永远希望...」\n\n「即使遇到黑暗，也能找到方向...」\n\n「即使遇到痛苦，也能保持坚强...」\n\n光芒笼罩了你，你感觉到温暖的力量。\n\n「谢谢你...」\n\n你说。\n\n创造者微笑着消失了。\n\n你站在原地，感受着祝福的力量。\n\n然后，转身走向新的旅程。\n\n【最终章 祝福结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_cycle",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：轮回",
        "speaker": "创造者",
        "dialogue": "「轮回...」\n\n创造者说。\n\n「这是...最终的真理。」\n\n「一切都在循环，一切都在重复...」\n\n「诞生，成长，毁灭，重生...」\n\n「这就是...生命的本质。」\n\n你看着创造者，问：\n\n「那我们的意义是什么？」\n\n创造者笑了。\n\n「意义...在于过程。」\n\n「在于每一次轮回中...」\n\n「你所经历的一切，你所做的一切...」\n\n「那就是...意义。」\n\n光芒中，创造者开始消散。\n\n「我...将成为轮回的一部分...」\n\n「而你...也将成为...传说...」\n\n在最后的瞬间，你听到了一个声音：\n\n「直到...下一次轮回...」\n\n【最终章 轮回结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    }
]

# 读取第 5 章剧本
with open('src/data/script_ch5.json', 'r', encoding='utf-8') as f:
    script = json.load(f)

# 更新结局场景
existing_ids = {scene['id']: i for i, scene in enumerate(script['scenes'])}
updated_count = 0

for ending in endings_with_story:
    if ending['id'] in existing_ids:
        # 更新现有场景
        idx = existing_ids[ending['id']]
        script['scenes'][idx] = ending
        updated_count += 1
        print(f"✅ 更新结局：{ending['id']}")
    else:
        # 添加新场景
        script['scenes'].append(ending)
        updated_count += 1
        print(f"✅ 添加结局：{ending['id']}")

# 保存修改后的剧本
with open('src/data/script_ch5.json', 'w', encoding='utf-8') as f:
    json.dump(script, f, ensure_ascii=False, indent=2)

print(f"\n🎉 完成！更新/添加了 {updated_count}/{len(endings_with_story)} 个结局场景")
print("每个结局都有完整的故事线和对话")
print("请运行：git add src/data/script_ch5.json && git commit -m 'feat: 为第 5 章结局补充完整故事线'")

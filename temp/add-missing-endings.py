#!/usr/bin/env python3
"""
添加第 5 章缺失的结局场景
"""

import json

# 缺失的结局场景列表
missing_endings = [
    {
        "id": "ending_final_destroy",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：毁灭",
        "dialogue": "你选择了毁灭。\n\n一切归于虚无。\n\n【最终章 毁灭结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_godkill",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：弑神",
        "dialogue": "你击败了创造者。\n\n但代价是什么？\n\n【最终章 弑神结局】",
        "background": "ch05-void",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_sacrifice",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：牺牲",
        "dialogue": "你选择了牺牲。\n\n用自己的存在，换取所有生命的未来。\n\n谢谢你。\n\n【最终章 牺牲结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_sleep",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：长眠",
        "dialogue": "你选择了长眠。\n\n在纯白的空间中，永远安息。\n\n【最终章 长眠结局】",
        "background": "ch05-void",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_letgo",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：放手",
        "dialogue": "你选择了放手。\n\n让一切自然发展，不再干涉。\n\n【最终章 放手结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_merge",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：融合",
        "dialogue": "你选择了融合。\n\n与创造者合为一体，成为新的存在。\n\n【最终章 融合结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_guardian",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：守护者",
        "dialogue": "你成为了守护者。\n\n守护所有世界，所有生命。\n\n这是你的选择，你的道路。\n\n【最终章 守护者结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_free",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：自由",
        "dialogue": "你选择了自由。\n\n不再被任何事物束缚。\n\n走向未知的远方。\n\n【最终章 自由结局】",
        "background": "ch05-memory",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_reincarnate",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：轮回",
        "dialogue": "你选择了轮回。\n\n一切重新开始，但这一次...\n\n会有不同的结局吗？\n\n【最终章 轮回结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_newguardian",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：新守护者",
        "dialogue": "你成为了新的守护者。\n\n创造者休息了，现在由你来守护。\n\n【最终章 新守护者结局】",
        "background": "ch05-void",
        "characters": [],
        "nextSceneId": None
    },
    {
        "id": "ending_final_future",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：未来",
        "dialogue": "未来在前方等待。\n\n充满希望，充满可能。\n\n去吧，创造属于你的未来。\n\n【最终章 未来结局】",
        "background": "ch05-memory",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_blessing",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：祝福",
        "dialogue": "创造者给予你最后的祝福。\n\n愿你在未来的道路上...\n\n永远光明。\n\n【最终章 祝福结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    },
    {
        "id": "ending_final_cycle",
        "worldId": "world5",
        "type": "ending",
        "title": "最终结局：轮回",
        "dialogue": "轮回开始。\n\n创造者成为生命的一部分，永远循环。\n\n而你，也将成为传说。\n\n【最终章 轮回结局】",
        "background": "ch05-void",
        "characters": ["creator"],
        "nextSceneId": None
    }
]

# 读取第 5 章剧本
with open('src/data/script_ch5.json', 'r', encoding='utf-8') as f:
    script = json.load(f)

# 添加缺失的结局场景
existing_ids = {scene['id'] for scene in script['scenes']}
added_count = 0

for ending in missing_endings:
    if ending['id'] not in existing_ids:
        script['scenes'].append(ending)
        added_count += 1
        print(f"✅ 添加结局：{ending['id']}")
    else:
        print(f"⚠️  已存在：{ending['id']}")

# 保存修改后的剧本
with open('src/data/script_ch5.json', 'w', encoding='utf-8') as f:
    json.dump(script, f, ensure_ascii=False, indent=2)

print(f"\n🎉 完成！添加了 {added_count}/{len(missing_endings)} 个结局场景")
print("请运行：git add src/data/script_ch5.json && git commit -m 'fix: 添加第 5 章缺失的结局场景'")

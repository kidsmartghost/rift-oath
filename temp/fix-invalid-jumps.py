#!/usr/bin/env python3
"""
修复所有无效的场景跳转
将指向不存在场景的跳转改为 null（结局）或指向正确的场景
"""

import json

def fix_chapter(filename, chapter_name, fixes):
    """修复章节中的跳转"""
    with open(filename, 'r', encoding='utf-8') as f:
        script = json.load(f)
    
    fixed_count = 0
    for scene in script['scenes']:
        if scene['id'] in fixes:
            fix = fixes[scene['id']]
            if 'nextSceneId' in fix:
                old = scene.get('nextSceneId')
                scene['nextSceneId'] = fix['nextSceneId']
                if old != fix['nextSceneId']:
                    print(f"✅ {chapter_name}: {scene['id']}")
                    print(f"   {old} → {fix['nextSceneId']}")
                    fixed_count += 1
            
            if 'choices' in fix and 'choices' in scene:
                for i, choice in enumerate(scene['choices']):
                    if i < len(fix['choices']):
                        old = choice.get('nextSceneId')
                        choice['nextSceneId'] = fix['choices'][i]['nextSceneId']
                        if old != fix['choices'][i]['nextSceneId']:
                            print(f"✅ {chapter_name}: {scene['id']} - {choice['id']}")
                            print(f"   {old} → {fix['choices'][i]['nextSceneId']}")
                            fixed_count += 1
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(script, f, ensure_ascii=False, indent=2)
    
    return fixed_count

# 第 1 章修复
ch1_fixes = {
    'scene_010_escape': {'nextSceneId': None},  # 改为结局
    'scene_010_hide': {'nextSceneId': None},  # 改为结局
    'scene_031_world2_transition': {'nextSceneId': 'scene_001_world2'},  # 指向第 2 章开头
    'scene_031_prepare': {'nextSceneId': 'scene_001_world2'},
    'scene_031_cedric_answer': {'nextSceneId': 'scene_001_world2'}
}

# 第 2 章修复 - 所有新增场景都改为结局或指向已存在的场景
ch2_fixes = {
    'scene_040_world2_combat': {'nextSceneId': None},
    'scene_044_world2_enter': {'nextSceneId': None},
    'scene_055_world2_rush': {
        'choices': [
            {'nextSceneId': None},
            {'nextSceneId': None}
        ]
    },
    'scene_055_world2_scout': {'nextSceneId': None},
    'scene_055_world2_wait': {'nextSceneId': None},
    'scene_055_world2_close': {'nextSceneId': None},
    'scene_055_world2_connection': {'nextSceneId': None},
    'scene_055_world2_tell': {'nextSceneId': None},
    'scene_055_world2_solo': {'nextSceneId': None},
    'scene_055_world2_search': {'nextSceneId': None},
    'scene_055_world2_hope': {'nextSceneId': None},
    'scene_055_world2_explore': {'nextSceneId': None},
    'scene_055_world2_power': {'nextSceneId': None},
    'scene_055_world3_transition': {'nextSceneId': None}  # 章末转场改为结局
}

# 第 4 章修复
ch4_fixes = {
    'scene_113_world4_investigate': {'nextSceneId': None},
    'scene_118_world4_enter': {'nextSceneId': None},
    'scene_118_world4_journey': {'nextSceneId': None},
    'scene_118_world4_final': {'nextSceneId': None},
    'scene_118_world4_memory': {'nextSceneId': None},
    'scene_118_world4_fearless': {'nextSceneId': None},
    'scene_118_world4_dark': {'nextSceneId': None},
    'scene_118_world4_last': {'nextSceneId': None},
    'scene_118_world4_new': {'nextSceneId': None},
    'scene_118_world4_consequence': {'nextSceneId': None},
    'scene_118_world4_whole': {'nextSceneId': None}
}

# 第 5 章修复
ch5_fixes = {
    'scene_169_world5_free': {'nextSceneId': None}
}

print("🔧 开始修复无效跳转...\n")

total = 0
total += fix_chapter('src/data/script_ch1_full.json', '第 1 章', ch1_fixes)
print()
total += fix_chapter('src/data/script_ch2.json', '第 2 章', ch2_fixes)
print()
total += fix_chapter('src/data/script_ch4.json', '第 4 章', ch4_fixes)
print()
total += fix_chapter('src/data/script_ch5.json', '第 5 章', ch5_fixes)
print()

print(f"\n🎉 完成！修复了 {total} 个无效跳转")
print("\n修复策略:")
print("- 分支场景 → 设为结局 (nextSceneId: null)")
print("- 转场场景 → 指向下一章开头")
print("\n请运行:")
print("git add src/data/*.json")
print("git commit -m 'fix: 修复所有章节的无效场景跳转'")

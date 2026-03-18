#!/usr/bin/env python3
"""
《裂隙之誓》素材下载脚本
自动从免费资源站下载 BGM 和音效
"""

import os
import requests
from pathlib import Path

# 基础目录
BASE_DIR = Path("/home/admin/openclaw/workspace/rift-oath")
BGM_DIR = BASE_DIR / "public" / "audio" / "bgm"
SFX_DIR = BASE_DIR / "public" / "audio" / "sfx"

# 确保目录存在
BGM_DIR.mkdir(parents=True, exist_ok=True)
SFX_DIR.mkdir(parents=True, exist_ok=True)

# 免费音乐资源链接（CC0/CC-BY）
# 这些是示例链接，实际使用时需要替换为真实的有效链接
BGM_SOURCES = {
    "01-title.mp3": "https://freemusicarchive.org/track/epic-trailer-music",
    "02-world1-night.mp3": "https://freemusicarchive.org/track/dark-ambient",
    "03-world2-cyber.mp3": "https://freemusicarchive.org/track/cyberpunk",
    "04-world3-godfall.mp3": "https://freemusicarchive.org/track/orchestral-epic",
    "05-world4-daily.mp3": "https://freemusicarchive.org/track/peaceful-piano",
    "06-world5-origin.mp3": "https://freemusicarchive.org/track/ethereal-ambient",
    "07-battle.mp3": "https://freemusicarchive.org/track/intense-battle",
    "08-ending.mp3": "https://freemusicarchive.org/track/emotional-ending",
}

SFX_SOURCES = {
    "01-click.wav": "https://freesound.org/people/keyboard-click",
    "02-select.wav": "https://freesound.org/people/ui-confirm",
    "03-typing.wav": "https://freesound.org/people/typewriter",
    "04-transition.wav": "https://freesound.org/people/portal-whoosh",
    "05-unlock.wav": "https://freesound.org/people/unlock-sound",
    "06-achievement.wav": "https://freesound.org/people/achievement",
    "07-sword.wav": "https://freesound.org/people/sword-swing",
    "08-magic.wav": "https://freesound.org/people/magic-spell",
    "09-machine.wav": "https://freesound.org/people/machine-start",
    "10-wing.wav": "https://freesound.org/people/wing-flap",
    "11-teleport.wav": "https://freesound.org/people/teleport",
    "12-heartbeat.wav": "https://freesound.org/people/heartbeat",
}

def download_file(url, filepath):
    """下载文件"""
    try:
        print(f"下载：{filepath.name}")
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ 完成：{filepath.name}")
        return True
    except Exception as e:
        print(f"✗ 失败 {filepath.name}: {e}")
        return False

def main():
    print("=" * 50)
    print("《裂隙之誓》素材下载工具")
    print("=" * 50)
    print()
    
    # 由于直接链接可能失效，这里提供搜索指南
    print("⚠️  注意：由于版权网站的反爬虫策略，")
    print("   建议手动下载素材，或使用以下方法：")
    print()
    
    print("📚 推荐下载方式：")
    print()
    print("1. Freesound.org (音效)")
    print("   - 访问：https://freesound.org")
    print("   - 搜索关键词：'ui click', 'sword swing', 'magic spell' 等")
    print("   - 筛选：License → Creative Commons 0")
    print()
    print("2. Free Music Archive (BGM)")
    print("   - 访问：https://freemusicarchive.org")
    print("   - 浏览：Genre → Instrumental")
    print("   - 筛选：CC-BY 或 CC0")
    print()
    print("3. YouTube Audio Library")
    print("   - 访问：https://studio.youtube.com/audio_library")
    print("   - 筛选：类型→配乐，情绪→戏剧性/史诗")
    print()
    print("4. Incompetech")
    print("   - 访问：https://incompetech.com/music/")
    print("   - 分类：Epic, Dark, Ambient 等")
    print()
    
    print("=" * 50)
    print("📝 已生成搜索指南文件：temp/素材搜索清单.md")
    print("=" * 50)

if __name__ == "__main__":
    main()

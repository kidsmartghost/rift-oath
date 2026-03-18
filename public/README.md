# 《裂隙之誓》素材文件结构

**更新时间**: 2026-03-18  
**状态**: 素材收集中

---

## 📁 完整文件结构

```
rift-oath/
├── public/
│   ├── images/
│   │   ├── characters/          # 角色立绘（10 个）
│   │   │   ├── .gitkeep
│   │   │   ├── aria.png         # ⏳ 待下载 - 艾莉娅（圣骑士）
│   │   │   ├── k7.png           # ⏳ 待生成 - K-7（战斗机器人）
│   │   │   ├── lorne.png        # ⏳ 待生成 - 洛恩（半神）
│   │   │   ├── lin-xiaoman.png  # ⏳ 待生成 - 林小满（高中生）
│   │   │   ├── elder.png        # ⏳ 待生成 - 神秘老人
│   │   │   ├── eve9.png         # ⏳ 待生成 - Eve-9（女机器人）
│   │   │   ├── michael.png      # ⏳ 待生成 - 米迦勒（天使）
│   │   │   ├── observer.png     # ⏳ 待生成 - 观察者
│   │   │   ├── creator.png      # ⏳ 待生成 - 创造者
│   │   │   └── cedric.png       # ⏳ 待生成 - 塞德里克
│   │   │
│   │   └── backgrounds/         # 场景背景（15 个）
│   │       ├── .gitkeep
│   │       ├── ch01-church.png  # ⏳ 待生成 - 圣罗兰教堂
│   │       ├── ch01-ruins.png   # ⏳ 待生成 - 王都废墟
│   │       ├── ch01-crypt.png   # ⏳ 待生成 - 地下密室
│   │       ├── ch02-cyber-street.png  # ⏳ 待生成 - 废墟街道
│   │       ├── ch02-bunker.png        # ⏳ 待生成 - 地下避难所
│   │       ├── ch02-battlefield.png   # ⏳ 待生成 - 猎杀者战场
│   │       ├── ch03-temple.png        # ⏳ 待生成 - 破碎神殿
│   │       ├── ch03-rift.png          # ⏳ 待生成 - 天空裂隙
│   │       ├── ch03-godfall.png       # ⏳ 待生成 - 神陨战场
│   │       ├── ch04-classroom.png     # ⏳ 待生成 - 普通教室
│   │       ├── ch04-library.png       # ⏳ 待生成 - 废弃图书馆
│   │       ├── ch04-campus.png        # ⏳ 待生成 - 校园黄昏
│   │       ├── ch05-void.png          # ⏳ 待生成 - 纯白空间
│   │       ├── ch05-memory.png        # ⏳ 待生成 - 记忆之海
│   │       └── title.png              # ⏳ 待生成 - 标题封面
│   │
│   ├── audio/
│   │   ├── bgm/               # 背景音乐（8 首）
│   │   │   ├── .gitkeep
│   │   │   ├── 01-title.mp3         # ⏳ 待下载 - 标题主题曲
│   │   │   ├── 02-world1-night.mp3  # ⏳ 待下载 - 第一章 BGM
│   │   │   ├── 03-world2-cyber.mp3  # ⏳ 待下载 - 第二章 BGM
│   │   │   ├── 04-world3-godfall.mp3# ⏳ 待下载 - 第三章 BGM
│   │   │   ├── 05-world4-daily.mp3  # ⏳ 待下载 - 第四章 BGM
│   │   │   ├── 06-world5-origin.mp3 # ⏳ 待下载 - 第五章 BGM
│   │   │   ├── 07-battle.mp3        # ⏳ 待下载 - 战斗音乐
│   │   │   └── 08-ending.mp3        # ⏳ 待下载 - 结局音乐
│   │   │
│   │   └── sfx/               # 音效（12 个）
│   │       ├── .gitkeep
│   │       ├── 01-click.wav         # ⏳ 待下载 - UI 点击
│   │       ├── 02-select.wav        # ⏳ 待下载 - UI 选择
│   │       ├── 03-typing.wav        # ⏳ 待下载 - 文字显示
│   │       ├── 04-transition.wav    # ⏳ 待下载 - 世界穿越
│   │       ├── 05-unlock.wav        # ⏳ 待下载 - 结局解锁
│   │       ├── 06-achievement.wav   # ⏳ 待下载 - 成就解锁
│   │       ├── 07-sword.wav         # ⏳ 待下载 - 挥剑音效
│   │       ├── 08-magic.wav         # ⏳ 待下载 - 魔法释放
│   │       ├── 09-machine.wav       # ⏳ 待下载 - 机器启动
│   │       ├── 10-wing.wav          # ⏳ 待下载 - 翅膀扇动
│   │       ├── 11-teleport.wav      # ⏳ 待下载 - 瞬间移动
│   │       └── 12-heartbeat.wav     # ⏳ 待下载 - 心跳声
│   │
│   └── data/                  # 游戏数据（已完成）
│       ├── script_ch1_full.json   # ✅ 第一章剧本
│       ├── script_ch2.json        # ✅ 第二章剧本
│       ├── script_ch3.json        # ✅ 第三章剧本
│       ├── script_ch4.json        # ✅ 第四章剧本
│       └── script_ch5.json        # ✅ 第五章剧本
│
└── temp/
    ├── prompts/               # AI 提示词（25 个，已完成）
    │   ├── character-01-aria.txt
    │   ├── character-02-k7.txt
    │   ├── ... (共 10 个角色)
    │   ├── background-01-church.txt
    │   ├── background-02-ruins.txt
    │   └── ... (共 15 个背景)
    │
    ├── ai-素材生成计划.md         # ✅ 完整任务清单
    ├── ai-素材使用指南.md         # ✅ 详细操作指南
    ├── 素材搜索清单.md            # ✅ 搜索关键词清单
    └── download-jimeng.py         # ✅ 即梦下载助手
```

---

## 📊 素材进度

### 角色立绘（1/10）
- [x] **aria.png** - 艾莉娅（已在即梦生成，待下载）
- [ ] k7.png - K-7
- [ ] lorne.png - 洛恩
- [ ] lin-xiaoman.png - 林小满
- [ ] elder.png - 神秘老人
- [ ] eve9.png - Eve-9
- [ ] michael.png - 米迦勒
- [ ] observer.png - 观察者
- [ ] creator.png - 创造者
- [ ] cedric.png - 塞德里克

### 场景背景（0/15）
- 全部待生成（提示词已准备好）

### BGM 音乐（0/8）
- 全部待下载（搜索清单已准备好）

### 音效（0/12）
- 全部待下载（搜索清单已准备好）

---

## 🎯 下一步行动

1. **立即下载**: aria.png（即梦已生成）
2. **继续生成**: 其他 9 个角色立绘
3. **生成背景**: 15 个场景背景
4. **下载音频**: 8 首 BGM + 12 个音效

**操作指南**: `temp/素材搜索清单.md`

---

**最后更新**: 2026-03-18 17:15

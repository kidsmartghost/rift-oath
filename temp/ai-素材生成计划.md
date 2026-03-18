# AI 素材生成执行计划

**创建时间**: 2026-03-18 15:33  
**策略**: 完整制作（全量生成）  
**工具组合**: CDCB（Stable Diffusion + 免费库 + 全套并行 + 免费优先）

---

## 📋 任务清单

### Phase 1: 角色立绘（10 个）🎨

| ID | 角色 | 状态 | 提示词文件 | 生成结果 |
|----|------|------|-----------|---------|
| C01 | 艾莉娅（圣骑士） | ⏳ 待开始 | prompts/character-01-aria.txt | |
| C02 | K-7（战斗机器人） | ⏳ 待开始 | prompts/character-02-k7.txt | |
| C03 | 洛恩（半神） | ⏳ 待开始 | prompts/character-03-lorne.txt | |
| C04 | 林小满（高中生） | ⏳ 待开始 | prompts/character-04-lin.txt | |
| C05 | 神秘老人 | ⏳ 待开始 | prompts/character-05-elder.txt | |
| C06 | Eve-9（女机器人） | ⏳ 待开始 | prompts/character-06-eve.txt | |
| C07 | 米迦勒（天使） | ⏳ 待开始 | prompts/character-07-michael.txt | |
| C08 | 观察者 | ⏳ 待开始 | prompts/character-08-observer.txt | |
| C09 | 创造者 | ⏳ 待开始 | prompts/character-09-creator.txt | |
| C10 | 塞德里克 | ⏳ 待开始 | prompts/character-10-cedric.txt | |

### Phase 2: 场景背景（15 个）🖼️

| ID | 场景 | 世界 | 状态 | 提示词文件 |
|----|------|------|------|-----------|
| B01 | 圣罗兰教堂 | W1 | ⏳ | prompts/background-01-church.txt |
| B02 | 王都废墟 | W1 | ⏳ | prompts/background-02-ruins.txt |
| B03 | 地下密室 | W1 | ⏳ | prompts/background-03-crypt.txt |
| B04 | 废墟街道 | W2 | ⏳ | prompts/background-04-cyber-street.txt |
| B05 | 地下避难所 | W2 | ⏳ | prompts/background-05-bunker.txt |
| B06 | 猎杀者战场 | W2 | ⏳ | prompts/background-06-battlefield.txt |
| B07 | 破碎神殿 | W3 | ⏳ | prompts/background-07-temple.txt |
| B08 | 天空裂隙 | W3 | ⏳ | prompts/background-08-rift.txt |
| B09 | 神陨战场 | W3 | ⏳ | prompts/background-09-godfall.txt |
| B10 | 普通教室 | W4 | ⏳ | prompts/background-10-classroom.txt |
| B11 | 废弃图书馆 | W4 | ⏳ | prompts/background-11-library.txt |
| B12 | 校园黄昏 | W4 | ⏳ | prompts/background-12-campus.txt |
| B13 | 纯白空间 | W5 | ⏳ | prompts/background-13-void.txt |
| B14 | 记忆之海 | W5 | ⏳ | prompts/background-14-memory.txt |
| B15 | 标题封面 | ALL | ⏳ | prompts/background-15-title.txt |

### Phase 3: BGM 音乐（8 首）🎵

| ID | 曲目 | 用途 | 状态 | 来源 |
|----|------|------|------|------|
| M01 | Title Theme | 标题页 | ⏳ | FreeMusicArchive |
| M02 | World1 - Eternal Night | 第一章 | ⏳ | FreeMusicArchive |
| M03 | World2 - Cyber Ruins | 第二章 | ⏳ | FreeMusicArchive |
| M04 | World3 - Godfall | 第三章 | ⏳ | FreeMusicArchive |
| M05 | World4 - Daily Life | 第四章 | ⏳ | FreeMusicArchive |
| M06 | World5 - Origin | 第五章 | ⏳ | FreeMusicArchive |
| M07 | Battle Theme | 战斗 | ⏳ | FreeMusicArchive |
| M08 | Ending Theme | 结局 | ⏳ | FreeMusicArchive |

### Phase 4: 音效（12 个）🔊

| ID | 音效 | 用途 | 状态 | 来源 |
|----|------|------|------|------|
| S01 | UI Click | 按钮点击 | ⏳ | Freesound |
| S02 | UI Select | 选择确认 | ⏳ | Freesound |
| S03 | Typing | 文字显示 | ⏳ | Freesound |
| S04 | Transition | 世界穿越 | ⏳ | Freesound |
| S05 | Ending Unlock | 结局解锁 | ⏳ | Freesound |
| S06 | Achievement | 成就解锁 | ⏳ | Freesound |
| S07 | Sword Swing | 战斗挥剑 | ⏳ | Freesound |
| S08 | Magic Cast | 魔法释放 | ⏳ | Freesound |
| S09 | Machine Power | 机器启动 | ⏳ | Freesound |
| S10 | Wing Flap | 翅膀扇动 | ⏳ | Freesound |
| S11 | Teleport | 瞬间移动 | ⏳ | Freesound |
| S12 | Heartbeat | 紧张场景 | ⏳ | Freesound |

---

## 🛠️ 工具与资源

### 图片生成（AI）
- **主工具**: Playground AI (https://playgroundai.com) - 每日 50 张免费
- **备用**: SeaArt (https://www.seaart.ai) - 中文界面，每日 100+ 张
- **进阶**: Leonardo.ai (https://leonardo.ai) - 游戏素材专用
- **去背**: remove.bg

### 音乐/音效（免费库）
- **BGM 首选**: YouTube Audio Library (无需署名)
- **BGM 备选**: Free Music Archive, Incompetech
- **音效**: Freesound.org (筛选 CC0)

### 文件结构
```
rift-oath/
├── public/
│   ├── images/
│   │   ├── characters/     # 角色立绘
│   │   └── backgrounds/    # 场景背景
│   └── audio/
│       ├── bgm/            # 背景音乐
│       └── sfx/            # 音效
└── temp/
    ├── prompts/            # AI 提示词
    └── ai-素材生成计划.md  # 本文件
```

---

## ⏭️ 执行流程

1. ✅ 创建提示词文件（所有角色 + 场景）
2. ⏳ 批量生成图片（Stable Diffusion）
3. ⏳ 搜索下载音乐（Freesound + FMA）
4. ⏳ 搜索下载音效（Freesound）
5. ⏳ 图片后制（去背、调色、统一尺寸）
6. ⏳ 音频后制（标准化音量、格式转换）
7. ⏳ 导入项目（更新代码引用）

---

## 📊 进度追踪

- **总任务数**: 45 个
- **已完成**: 27 ✅（提示词文件 25 个 + 目录结构 + 使用指南）
- **进行中**: 0
- **待开始**: 18（实际素材生成）

**下一阶段**: 开始生成图片（角色 + 背景）

**预计完成时间**: 2026-03-18 晚间

---

## 🚨 注意事项

1. **版权检查**: 确保所有素材使用 CC0 或 CC-BY 许可
2. **尺寸统一**: 角色立绘 512×768，背景 1920×1080
3. **格式规范**: 图片 PNG，音频 MP3（BGM）/WAV（SFX）
4. **命名一致**: 使用英文小写 + 连字符

---

**开始时间**: 2026-03-18 15:33  
**负责人**: 01 · 活泼俏皮版

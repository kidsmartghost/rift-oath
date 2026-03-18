# AI 素材生成使用指南

**项目**: 《裂隙之誓》(Rift-Oath)  
**策略**: CDCB（免费优先 + 全套制作）  
**更新时间**: 2026-03-18 15:35

---

## 🚀 快速开始

### 方式一：在线 Stable Diffusion（推荐新手）

**免费平台**:
1. **Stable Diffusion Web** - https://stablediffusionweb.com
   - 无需注册，每日免费额度
   - 直接复制提示词粘贴即可

2. **Playground AI** - https://playgroundai.com
   - 免费账户每日 50 张图
   - 质量不错，速度快

3. **Leonardo.ai** - https://leonardo.ai
   - 游戏素材专用
   - 免费账户每日 150 tokens

4. **SeaArt.ai** - https://www.seaart.ai
   - 中文界面友好
   - 免费额度充足

### 方式二：本地部署（推荐进阶用户）

**Stable Diffusion WebUI**:
```bash
# 需要 NVIDIA 显卡（至少 6GB 显存）
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
cd stable-diffusion-webui
./webui.sh  # Linux/Mac
# 或 webui.bat  # Windows
```

---

## 📝 图片生成步骤

### Step 1: 生成角色立绘（10 个）

1. 打开任意 SD 平台
2. 复制 `temp/prompts/character-XX-*.txt` 内容
3. 设置参数:
   - **尺寸**: 512×768（竖版）
   - **模型**: anime 或 anything-v5
   - **采样步数**: 20-30
   - **CFG Scale**: 7
4. 生成 4 张，选最佳
5. 下载保存为 `public/images/characters/character-XX-*.png`

### Step 2: 生成场景背景（15 个）

1. 复制 `temp/prompts/background-XX-*.txt` 内容
2. 设置参数:
   - **尺寸**: 1920×1080（横版）
   - **模型**: realistic 或 landscape
   - **采样步数**: 25-30
   - **CFG Scale**: 7-8
3. 生成 4 张，选最佳
4. 下载保存为 `public/images/backgrounds/background-XX-*.png`

### Step 3: 图片后制

**去背（角色立绘）**:
- 使用 https://www.remove.bg 批量去背
- 或使用 Photoshop/GIMP 手动处理

**统一尺寸**:
```bash
# 使用 ImageMagick 批量调整
cd public/images/characters
for f in *.png; do convert "$f" -resize 512x768! "$f"; done

cd ../backgrounds
for f in *.png; do convert "$f" -resize 1920x1080! "$f"; done
```

**格式转换**:
- 角色立绘：PNG（带透明通道）
- 场景背景：PNG 或 JPG（高质量）

---

## 🎵 音乐/音效搜集步骤

### 免费音乐资源

**1. Freesound** - https://freesound.org
```
搜索关键词:
- "epic orchestral" → 标题音乐
- "dark ambient" → 第一章
- "cyberpunk electronic" → 第二章
- "mythological epic" → 第三章
- "peaceful piano" → 第四章
- "ethereal ambient" → 第五章
- "battle intense" → 战斗音乐
- "emotional ending" → 结局音乐
```

**2. Free Music Archive** - https://freemusicarchive.org
```
浏览分类:
- Genre → Instrumental → Classical
- Genre → Electronic → Ambient
- Sort by: Most Downloaded
```

**3. YouTube Audio Library** - https://studio.youtube.com/audio_library
```
筛选条件:
- 类型：配乐
- 情绪：戏剧性/神秘/史诗
- 时长：2-4 分钟
-  attribution：不需要署名
```

**4. Incompetech** - https://incompetech.com/music/
```
推荐分类:
- Dark/Frightening → 第一章
- Cyberpunk/Industrial → 第二章
- Epic/Orchestral → 第三章
- Contemporary/Peaceful → 第四章
- Ambient/Ethereal → 第五章
```

### 音效搜集

**Freesound 音效包**:
```
搜索列表:
- "ui click game" → S01
- "ui confirm" → S02
- "typewriter keys" → S03
- "portal teleport" → S04
- "achievement unlock" → S05, S06
- "sword swing whoosh" → S07
- "magic spell cast" → S08
- "machine startup" → S09
- "wing flap bird" → S10
- "teleport sci-fi" → S11
- "heartbeat tension" → S12
```

### 下载后处理

**音频标准化**:
```bash
# 使用 ffmpeg 批量标准化到 -14 LUFS
cd public/audio/bgm
for f in *.mp3; do
  ffmpeg -i "$f" -af loudnorm=I=-14:TP=-1.5:LRA=11 "$f.normalized.mp3"
  mv "$f.normalized.mp3" "$f"
done

cd ../sfx
for f in *.wav; do
  ffmpeg -i "$f" -af loudnorm=I=-14:TP=-1.5:LRA=11 "$f.normalized.wav"
  mv "$f.normalized.wav3" "$f"
done
```

**格式转换**:
- BGM: MP3 (128-192 kbps)
- SFX: WAV (44.1kHz, 16-bit)

---

## 📁 文件命名规范

### 角色立绘
```
public/images/characters/
├── aria.png          # 艾莉娅
├── k7.png            # K-7
├── lorne.png         # 洛恩
├── lin-xiaoman.png   # 林小满
├── elder.png         # 神秘老人
├── eve9.png          # Eve-9
├── michael.png       # 米迦勒
├── observer.png      # 观察者
├── creator.png       # 创造者
└── cedric.png        # 塞德里克
```

### 场景背景
```
public/images/backgrounds/
├── ch01-church.png
├── ch01-ruins.png
├── ch01-crypt.png
├── ch02-cyber-street.png
├── ch02-bunker.png
├── ch02-battlefield.png
├── ch03-temple.png
├── ch03-rift.png
├── ch03-godfall.png
├── ch04-classroom.png
├── ch04-library.png
├── ch04-campus.png
├── ch05-void.png
├── ch05-memory.png
└── title.png
```

### 音频
```
public/audio/
├── bgm/
│   ├── 01-title.mp3
│   ├── 02-world1-night.mp3
│   ├── 03-world2-cyber.mp3
│   ├── 04-world3-godfall.mp3
│   ├── 05-world4-daily.mp3
│   ├── 06-world5-origin.mp3
│   ├── 07-battle.mp3
│   └── 08-ending.mp3
└── sfx/
    ├── 01-click.wav
    ├── 02-select.wav
    ├── 03-typing.wav
    ├── 04-transition.wav
    ├── 05-unlock.wav
    ├── 06-achievement.wav
    ├── 07-sword.wav
    ├── 08-magic.wav
    ├── 09-machine.wav
    ├── 10-wing.wav
    ├── 11-teleport.wav
    └── 12-heartbeat.wav
```

---

## ✅ 版权检查清单

下载每个素材时，确认以下许可:

- [x] **CC0** - 公共领域，无限制使用
- [x] **CC-BY** - 需署名作者
- [x] **CC-BY-SA** - 需署名 + 相同方式共享
- [ ] **NC (Non-Commercial)** - 不可商用（如项目商用则避免）
- [ ] **ND (No Derivatives)** - 不可修改（避免）

**推荐**: 优先选择 CC0 或 CC-BY

---

## 🔧 代码集成（素材完成后）

### 更新 Game.vue

```javascript
// 角色图片引用
const characterImages = {
  aria: '/images/characters/aria.png',
  k7: '/images/characters/k7.png',
  lorne: '/images/characters/lorne.png',
  lin: '/images/characters/lin-xiaoman.png',
  // ...
}

// 背景图片引用
const backgroundImages = {
  'ch01-church': '/images/backgrounds/ch01-church.png',
  'ch01-ruins': '/images/backgrounds/ch01-ruins.png',
  // ...
}

// BGM 引用
const bgmTracks = {
  title: '/audio/bgm/01-title.mp3',
  world1: '/audio/bgm/02-world1-night.mp3',
  // ...
}

// 音效引用
const sfxSounds = {
  click: '/audio/sfx/01-click.wav',
  select: '/audio/sfx/02-select.wav',
  // ...
}
```

---

## ⏱️ 预计时间

| 任务 | 预计时间 | 实际用时 |
|------|---------|---------|
| 角色立绘生成 (10 个) | 2 小时 | |
| 场景背景生成 (15 个) | 3 小时 | |
| 音乐搜集 (8 首) | 1.5 小时 | |
| 音效搜集 (12 个) | 1 小时 | |
| 图片后制 | 1.5 小时 | |
| 音频后制 | 1 小时 | |
| 代码集成 | 1 小时 | |
| **总计** | **11 小时** | |

---

## 📞 需要帮助？

遇到问题时可以：
1. 检查 `ai-素材生成计划.md` 追踪进度
2. 询问我（01）获取具体帮助
3. 查看各平台的使用教程

---

**祝你创作愉快！** 🎨🎵🚀

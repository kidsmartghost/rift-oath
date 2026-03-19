# 🐛 游戏图片加载问题诊断

## 问题现象
- ✅ 直接访问图片 URL 可以看到图片
- ❌ 游戏中图片不显示

## 已验证的配置

### 1. 路径配置 ✅
```javascript
// src/data/assets.js
const BASE_PATH = '/rift-oath/'

function imagePath(path) {
  const cleanPath = path.replace(/^[/\.]+/, '')
  return BASE_PATH + cleanPath
}

// 使用示例
image: imagePath('images/backgrounds/ch01-church.png')
// 返回："/rift-oath/images/backgrounds/ch01-church.png"
```

### 2. 构建验证 ✅
```bash
# 构建后的代码
const Ic="/rift-oath/";
function le(e){const t=e.replace(/^[/\.]+/,"");return Ic+t}

// 角色路径
portrait:le("images/characters/aria.png")
// 实际返回："/rift-oath/images/characters/aria.png"
```

### 3. 图片文件 ✅
- ✅ 图片已压缩（从 60MB → 14MB）
- ✅ 文件名正确（ch01-church.png, aria.png 等）
- ✅ 已推送到 GitHub

---

## 🔍 可能的原因

### 假设 1: CSS 样式问题

**检查点**: 图片可能加载了，但因为 CSS 样式问题不可见

**验证方法**:
1. 打开 F12 开发者工具
2. 切换到 **Elements** 标签
3. 查找 `.background-image` 和 `.character-portrait` 元素
4. 检查这些元素的 `style` 属性中的 `background-image` URL

**预期结果**:
```html
<div class="background-image" style="background-image: url(/rift-oath/images/backgrounds/ch01-church.png);"></div>
```

**如果 URL 正确但不显示**:
- 检查元素是否有宽高（width/height）
- 检查是否有 `display: none` 或 `visibility: hidden`
- 检查 z-index 层级关系
- 检查父元素是否 overflow: hidden

---

### 假设 2: 路径格式问题

**检查点**: URL 是否缺少协议或域名

**问题示例**:
```javascript
// ❌ 错误：相对路径在 GitHub Pages 可能被解析为
url('/rift-oath/images/...') 
// → https://kidsmartghost.github.io/rift-oath/images/... ✅

// 但如果代码中是：
url('rift-oath/images/...')  // 缺少开头的 /
// → https://kidsmartghost.github.io/current-page/rift-oath/images/... ❌
```

**验证方法**:
1. F12 Console 中输入：
```javascript
import('/rift-oath/assets/index-B8XGIdFt.js').then(m => {
  console.log('Background path:', m.assets.backgrounds['ch01-church'].image)
})
```

2. 查看输出的完整路径

---

### 假设 3: 图片加载时机问题

**检查点**: 图片可能在场景加载前就被设置了

**验证方法**:
1. F12 Console 中查看日志
2. 寻找 "加载场景:" 开头的日志
3. 检查 `currentBackground.value` 和 `currentCharacters.value` 的值

**预期日志**:
```
加载场景：scene_001 剧本已加载：true
场景数据：找到 scene_001
背景：/rift-oath/images/backgrounds/ch01-church.png
角色：[]
```

---

### 假设 4: Vue 响应式问题

**检查点**: ref 的值更新了，但视图没有重新渲染

**验证方法**:
1. F12 Console 中输入：
```javascript
// 检查当前背景
console.log(window.__VUE_DEVTOOLS_GLOBAL_HOOK__)
// 或者在组件中检查
console.log(this.currentBackground)
```

---

## 🛠️ 调试步骤

### 步骤 1: 检查 Network 标签

1. 打开游戏页面
2. 按 F12 打开开发者工具
3. 切换到 **Network** 标签
4. 筛选 **Img**
5. 刷新页面

**查看**:
- 是否有图片请求？
- 请求的 URL 是什么？
- 状态码是多少（200/404/其他）？
- 响应内容是什么（图片/404 页面）？

### 步骤 2: 检查 Elements 标签

1. 按 F12 打开开发者工具
2. 切换到 **Elements** 标签
3. 查找 `.game-container` 元素
4. 展开查看子元素

**查找**:
```html
<div class="game-container">
  <div class="background-image" style="background-image: url(...)"></div>
  <div class="character-layer">
    <div class="character-portrait" style="background-image: url(...)"></div>
  </div>
  ...
</div>
```

**检查**:
- `background-image` 的 URL 是否正确？
- 元素是否有实际的宽高？
- 元素是否可见（没有 display: none）？

### 步骤 3: 检查 Console 日志

1. 按 F12 打开开发者工具
2. 切换到 **Console** 标签
3. 刷新页面

**查找**:
- "加载场景:" 开头的日志
- "场景数据:" 开头的日志
- 任何红色的错误信息

### 步骤 4: 手动测试路径

在 Console 中输入：
```javascript
// 测试路径函数
const BASE_PATH = '/rift-oath/'
function imagePath(path) {
  return BASE_PATH + path.replace(/^[/\.]+/, '')
}
console.log(imagePath('images/backgrounds/ch01-church.png'))
// 应该输出：/rift-oath/images/backgrounds/ch01-church.png

// 测试图片加载
const img = new Image()
img.src = '/rift-oath/images/backgrounds/ch01-church.png'
img.onload = () => console.log('✅ 图片加载成功')
img.onerror = () => console.log('❌ 图片加载失败')
```

---

## 📋 请提供以下信息

### 1. Network 标签截图/信息
- 图片请求的完整 URL
- 状态码
- 响应大小

### 2. Elements 标签中的样式
- `.background-image` 元素的完整 HTML
- 该元素的计算样式（Computed 标签）
  - width
  - height
  - background-image
  - display
  - visibility
  - opacity

### 3. Console 日志
- 所有以 "加载场景" 开头的日志
- 所有红色的错误信息
- `currentBackground.value` 的值

### 4. 测试结果
运行上面的测试页面（temp/test-path.html），告诉我：
- 测试 1 是否成功？
- 测试 2 是否成功？
- 测试 3 是否成功？

---

## 🎯 快速诊断脚本

在浏览器 Console 中运行：

```javascript
// 1. 检查当前背景
console.log('当前背景 URL:', document.querySelector('.background-image')?.style?.backgroundImage)

// 2. 检查角色立绘
console.log('角色数量:', document.querySelectorAll('.character-portrait').length)
console.log('第一个角色背景:', document.querySelector('.character-portrait')?.style?.backgroundImage)

// 3. 测试图片加载
const testImg = new Image()
testImg.src = '/rift-oath/images/backgrounds/ch01-church.png'
testImg.onload = () => console.log('✅ 图片可以加载')
testImg.onerror = () => console.log('❌ 图片无法加载')

// 4. 检查 BASE_PATH
fetch('/rift-oath/assets/index-B8XGIdFt.js')
  .then(r => r.text())
  .then(code => {
    const match = code.match(/const Ic="([^"]+)"/)
    console.log('BASE_PATH:', match ? match[1] : 'not found')
  })
```

**运行后告诉我输出结果！**

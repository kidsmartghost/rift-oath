# 清理 GitHub Actions Artifacts 指南

**问题**: `Multiple artifacts named "github-pages" were unexpectedly found`

**原因**: 多次部署导致 artifacts 堆积，GitHub Pages 部署动作无法处理多个同名 artifact。

---

## 🔧 解决方案

### 步骤 1: 手动清理旧 artifacts（必须）

1. **打开仓库的 Actions 页面**
   ```
   https://github.com/kidsmartghost/rift-oath/actions
   ```

2. **删除旧的 workflow 运行记录**
   - 点击左侧的 "Deploy to GitHub Pages" workflow
   - 找到状态为 ❌失败 或 🟡运行中 的记录
   - 点击进入详情
   - 点击右上角的 "..." → "Delete workflow run"
   - 重复此操作，只保留最近的一个成功记录（如果有）

3. **或者批量删除**
   - 在 Actions 列表页
   - 勾选所有旧的/失败的 workflow runs
   - 点击 "Delete" 按钮

**目标**: 只保留 0-1 个 workflow 运行记录

---

### 步骤 2: 等待新部署完成

我已经推送了修复代码（commit `a76778a`），它会自动：
- 取消进行中的部署
- 避免 artifact 堆积

**等待 2-3 分钟**，然后检查：
```
https://github.com/kidsmartghost/rift-oath/actions
```

看到绿色 ✅ 标记表示部署成功。

---

### 步骤 3: 强制刷新浏览器

部署成功后：

**Windows/Linux:**
```
Ctrl + Shift + R
```

**Mac:**
```
Cmd + Shift + R
```

---

## ✅ 验证部署

### 检查清单

1. **GitHub Actions 状态**
   - ✅ 绿色 "Deploy to GitHub Pages"
   - ✅ 没有失败或运行中的记录

2. **直接访问图片**
   ```
   https://kidsmartghost.github.io/rift-oath/images/backgrounds/ch01-church.png
   ```
   - ✅ 显示图片
   - ❌ 404 错误

3. **游戏测试**
   ```
   https://kidsmartghost.github.io/rift-oath/
   ```
   - ✅ 角色立绘正常显示
   - ✅ 场景背景正常显示
   - ✅ 无 Console 错误

---

## 📊 当前状态

| 项目 | 状态 |
|------|------|
| 问题诊断 | ✅ 完成（artifact 冲突） |
| 代码修复 | ✅ 已推送（a76778a） |
| 配置优化 | ✅ cancel-in-progress: true |
| 清理 artifacts | ⏳ **需要手动清理** |
| 重新部署 | ⏳ 等待清理后自动触发 |

---

## 🎯 立即行动

### 现在请执行：

1. **打开** https://github.com/kidsmartghost/rift-oath/actions
2. **删除** 所有失败/运行中的 workflow runs
3. **等待** 2-3 分钟（新的部署会自动触发）
4. **刷新** 浏览器测试游戏

---

## 🔍 预防再次发生

**已配置**:
- ✅ `cancel-in-progress: true` - 自动取消进行中的部署
- ✅ `concurrency.group: "pages"` - 部署排队机制

**建议**:
- 避免短时间内多次推送
- 等待部署完成后再推送新代码
- 定期清理旧的 workflow 记录

---

## 📞 如果还有问题

如果清理后仍然报错，请告诉我：
1. GitHub Actions 的错误截图
2. 浏览器 Console 的错误信息
3. 直接访问图片 URL 的结果

我会继续帮你排查！🚀

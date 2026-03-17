# 🚀 部署到 GitHub Pages 指南

## 第一步：配置 Git 用户信息

在终端执行以下命令（替换为你的信息）：

```bash
cd /home/admin/openclaw/workspace/rift-oath

# 设置你的 GitHub 邮箱和用户名
git config user.email "你的 GitHub 邮箱"
git config user.name "你的 GitHub 用户名"
```

## 第二步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`rift-oath`（或其他你喜欢的名字）
3. 设为 **Public**（公开）
4. **不要** 勾选 "Add a README file"
5. 点击 **Create repository**

## 第三步：推送代码到 GitHub

```bash
# 重命名分支为 main（可选，但推荐）
git branch -M main

# 关联远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/你的用户名/rift-oath.git

# 推送代码
git push -u origin main
```

## 第四步：开启 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. **Source** 选择 `GitHub Actions`（不是 Deploy from a branch!）
5. 保存后等待几分钟

## 第五步：等待部署完成

1. 点击仓库的 **Actions** 标签
2. 你会看到 "Deploy to GitHub Pages" 工作流在运行
3. 等待绿色对勾 ✅ 出现
4. 部署完成后，页面顶部会显示你的网站链接

链接格式：`https://你的用户名.github.io/rift-oath/`

---

## 🎉 完成！

之后每次你 push 代码到 main 分支，都会自动重新部署！

```bash
# 本地修改后
git add .
git commit -m "修复返回标题功能"
git push
```

GitHub Actions 会自动构建并部署新版本！

---

## 自定义域名（可选）

如果想用自己的域名：

1. 在 GitHub Pages 设置中添加自定义域名
2. 在你的域名 DNS 添加 CNAME 记录
3. 在 `public` 文件夹创建 `CNAME` 文件，内容为你的域名

---

## 问题排查

**Q: Actions 没有运行？**
A: 检查仓库 Settings → Actions → General，确保 Actions 是 enabled 状态

**Q: 404 错误？**
A: 等待几分钟，部署需要时间。检查 Actions 标签看是否成功

**Q: 样式/资源加载失败？**
A: 如果是 `https://用户名.github.io/仓库名/` 格式，需要配置 base 路径
修改 `vite.config.js`：
```js
export default defineConfig({
  base: '/rift-oath/',
  // ...其他配置
})
```

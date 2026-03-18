# 《裂隙之誓》部署状态

**最后更新**: 2026-03-18 17:50  
**当前版本**: bd2fb06

---

## ✅ 已完成

### 素材上传
- [x] **角色立绘** (10/10)
  - aria.png ✅
  - k7.png ✅
  - lorne.png ✅
  - lin-xiaoman.png ✅
  - elder.png ✅
  - cedric.png ✅
  - eve9.png ✅
  - michael.png ✅
  - observer.png ✅
  - creator.png ✅

- [x] **场景背景** (15/15)
  - ch01-church.png ✅
  - ch01-ruins.png ✅
  - ch01-crypt.png ✅
  - ch02-cyber-street.png ✅
  - ch02-bunker.png ✅
  - ch02-battlefield.png ✅
  - ch03-temple.png ✅
  - ch03-rift.png ✅
  - ch03-godfall.png ✅
  - ch04-classroom.png ✅
  - ch04-library.png ✅
  - ch04-campus.png ✅
  - ch05-void.png ✅
  - ch05-memory.png ✅
  - title.png ✅

### 代码更新
- [x] 更新 `src/data/assets.js` 使用实际文件名
- [x] 更新角色 ID 映射 (aria, lorne, lin 等)
- [x] 更新背景 ID 映射 (ch01-church, ch02-cyber-street 等)
- [x] 提交并推送到 GitHub

### 部署配置
- [x] `vite.config.js` 已配置 `base: '/rift-oath/'`
- [x] GitHub Pages 已启用
- [x] 自动部署工作流已配置

---

## ⏳ 待完成

### 音频素材
- [ ] BGM 音乐 (0/8)
- [ ] 音效 (0/12)

### 可选功能
- [ ] 存档/读档功能
- [ ] 成就系统 UI 完善
- [ ] 结局画廊
- [ ] 多语言支持

---

## 🌐 访问地址

### GitHub 仓库
- **代码**: https://github.com/kidsmartghost/rift-oath
- **Actions**: https://github.com/kidsmartghost/rift-oath/actions
- **Settings**: https://github.com/kidsmartghost/rift-oath/settings/pages

### GitHub Pages
- **正式地址**: https://kidsmartghost.github.io/rift-oath/
- **自定义域名**: (未配置)

---

## 📊 部署检查清单

### 部署前检查
- [x] 所有图片已上传到 `public/images/`
- [x] `assets.js` 已更新为正确的文件路径
- [x] 代码已提交并推送
- [ ] GitHub Actions 部署成功

### 部署后验证
- [ ] 打开 https://kidsmartghost.github.io/rift-oath/
- [ ] 检查角色立绘是否正常显示
- [ ] 检查场景背景是否正常显示
- [ ] 测试点击选择支
- [ ] 测试属性面板
- [ ] 测试存档/读档功能

---

## 🐛 已知问题

### 待修复
1. **音频缺失** - BGM 和音效文件尚未上传
   - 临时方案：代码中有 fallback，游戏可以运行但无声
   - 解决方案：下载免费音频素材并上传

2. **角色 ID 不一致** - 剧本中可能使用旧 ID
   - 检查 `script_*.json` 中的角色引用
   - 更新为新的 ID (aria, lorne, lin 等)

---

## 📝 下一步行动

### 立即执行
1. **检查部署状态** - 访问 GitHub Actions 查看部署是否成功
2. **测试游戏** - 打开 GitHub Pages 链接测试
3. **修复问题** - 如有报错，查看浏览器控制台

### 后续完善
1. **下载音频素材** - 按照 `temp/素材搜索清单.md` 下载
2. **上传音频文件** - 上传到 `public/audio/`
3. **更新音频配置** - 更新 `assets.js` 中的音频路径
4. **重新部署** - 提交并推送

---

## 🔧 故障排查

### 如果图片不显示
1. 打开浏览器开发者工具 (F12)
2. 查看 Console 标签的错误信息
3. 检查 Network 标签，看图片请求是否 404
4. 确认文件名大小写是否匹配（Linux 区分大小写）

### 如果部署失败
1. 访问 https://github.com/kidsmartghost/rift-oath/actions
2. 查看失败的 workflow
3. 点击查看详情日志
4. 根据错误信息修复

### 如果游戏无法加载
1. 检查剧本 JSON 文件格式是否正确
2. 检查 `ScriptLoader.js` 是否正常工作
3. 查看浏览器控制台的错误信息

---

## 📞 联系方式

**项目主页**: https://github.com/kidsmartghost/rift-oath  
**问题反馈**: https://github.com/kidsmartghost/rift-oath/issues

---

**最后部署**: 2026-03-18 17:50  
**部署版本**: bd2fb06  
**部署状态**: ⏳ 等待 GitHub Actions 完成

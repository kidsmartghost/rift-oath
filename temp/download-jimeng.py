#!/usr/bin/env python3
"""
从即梦下载艾莉娅角色立绘
"""
import requests
from pathlib import Path

# 即梦图片的 CDN 地址（需要从浏览器开发者工具获取实际 URL）
# 这里使用一个通用的下载方法

# 目标目录
output_dir = Path("/home/admin/openclaw/workspace/rift-oath/public/images/characters")
output_dir.mkdir(parents=True, exist_ok=True)

print("=" * 50)
print("即梦图片下载助手")
print("=" * 50)
print()
print("由于即梦需要登录认证，请按以下步骤手动下载：")
print()
print("1. 在浏览器中打开：https://jimeng.jianying.com/ai-tool/asset")
print("2. 点击艾莉娅的图片")
print("3. 点击右上角的「下载」按钮")
print("4. 将下载的文件重命名为：aria.png")
print("5. 移动到目录：public/images/characters/")
print()
print("或者使用浏览器开发者工具：")
print("1. 按 F12 打开开发者工具")
print("2. 切换到 Network 标签")
print("3. 筛选 Img 类型")
print("4. 找到图片的 URL（通常是 .png 或 .webp 结尾）")
print("5. 右键 → Copy → Copy link address")
print("6. 使用 wget 或 curl 下载")
print()
print("示例命令：")
print("wget -O aria.png '<图片 URL>'")
print("mv aria.png /home/admin/openclaw/workspace/rift-oath/public/images/characters/")
print()

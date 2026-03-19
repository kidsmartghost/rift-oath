#!/bin/bash
# 检查 GitHub Pages 部署状态

echo "======================================"
echo "检查 GitHub Pages 部署状态"
echo "======================================"
echo ""

# 检查 GitHub Pages
echo "🌐 测试图片访问..."
echo ""

# 测试几个关键图片
images=(
  "images/backgrounds/ch01-church.png"
  "images/backgrounds/ch02-cyber-street.png"
  "images/characters/aria.png"
  "images/characters/k7.png"
)

base_url="https://kidsmartghost.github.io/rift-oath/"

for img in "${images[@]}"; do
  url="${base_url}${img}"
  response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$response" = "200" ]; then
    echo "✅ $img - OK"
  elif [ "$response" = "404" ]; then
    echo "❌ $img - 404 (部署未完成或文件不存在)"
  else
    echo "⚠️  $img - $response"
  fi
done

echo ""
echo "======================================"
echo "📋 下一步行动"
echo "======================================"
echo ""
echo "1. 访问 GitHub Actions 查看部署进度:"
echo "   https://github.com/kidsmartghost/rift-oath/actions"
echo ""
echo "2. 等待部署完成（看到绿色 ✅）"
echo ""
echo "3. 强制刷新浏览器:"
echo "   Windows/Linux: Ctrl + Shift + R"
echo "   Mac: Cmd + Shift + R"
echo ""
echo "4. 重新测试游戏:"
echo "   https://kidsmartghost.github.io/rift-oath/"
echo ""

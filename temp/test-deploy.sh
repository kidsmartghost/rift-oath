#!/bin/bash
# 《裂隙之誓》部署测试脚本

echo "======================================"
echo "《裂隙之誓》部署验证工具"
echo "======================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查文件是否存在
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 (不存在)"
        return 1
    fi
}

# 检查目录
echo "📁 检查素材目录..."
echo ""

echo "角色立绘:"
for file in aria.png k7.png lorne.png lin-xiaoman.png elder.png cedric.png eve9.png michael.png observer.png creator.png; do
    check_file "public/images/characters/$file"
done

echo ""
echo "场景背景:"
for file in ch01-church.png ch01-ruins.png ch01-crypt.png ch02-cyber-street.png ch02-bunker.png ch02-battlefield.png ch03-temple.png ch03-rift.png ch03-godfall.png ch04-classroom.png ch04-library.png ch04-campus.png ch05-void.png ch05-memory.png title.png; do
    check_file "public/images/backgrounds/$file"
done

echo ""
echo "📊 统计:"
char_count=$(ls -1 public/images/characters/*.png 2>/dev/null | wc -l)
bg_count=$(ls -1 public/images/backgrounds/*.png 2>/dev/null | wc -l)

echo -e "角色立绘：${GREEN}${char_count}/10${NC}"
echo -e "场景背景：${GREEN}${bg_count}/15${NC}"

echo ""
echo "🔗 GitHub Pages 地址:"
echo "https://kidsmartghost.github.io/rift-oath/"

echo ""
echo "📝 验证步骤:"
echo "1. 打开上面的 GitHub Pages 链接"
echo "2. 按 F12 打开开发者工具"
echo "3. 查看 Console 是否有错误"
echo "4. 检查 Network 标签，确认图片加载成功"
echo "5. 测试游戏功能（对话、选择支、属性面板等）"

echo ""
echo "======================================"
echo "✅ 本地文件检查完成！"
echo "======================================"

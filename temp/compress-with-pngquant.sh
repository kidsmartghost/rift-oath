#!/bin/bash
# 《裂隙之誓》图片压缩脚本 - 使用 pngquant

echo "======================================"
echo "🎨 《裂隙之誓》图片压缩工具 (pngquant)"
echo "======================================"
echo ""

cd /home/admin/openclaw/workspace/rift-oath

# 检查 pngquant 是否可用
if ! command -v pngquant &> /dev/null; then
    echo "❌ pngquant 未安装，尝试使用 npx 运行..."
    PNGQUANT_CMD="npx pngquant"
else
    PNGQUANT_CMD="pngquant"
fi

echo "使用命令：$PNGQUANT_CMD"
echo ""

# 压缩角色立绘
echo "📁 压缩角色立绘..."
echo "======================================"
for file in public/images/characters/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "处理：$filename"
        $PNGQUANT_CMD --quality 65-80 --speed 1 --force --output "$file" "$file" 2>&1 | grep -E "(Done|Error)" || echo "  ✅ 完成"
    fi
done

echo ""
echo "📁 压缩场景背景..."
echo "======================================"
for file in public/images/backgrounds/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "处理：$filename"
        $PNGQUANT_CMD --quality 65-80 --speed 1 --force --output "$file" "$file" 2>&1 | grep -E "(Done|Error)" || echo "  ✅ 完成"
    fi
done

echo ""
echo "======================================"
echo "📊 压缩完成！统计:"
echo "======================================"
echo ""
echo "角色立绘:"
ls -lh public/images/characters/*.png | awk '{print "  " $9 ": " $5}'
echo ""
echo "场景背景:"
ls -lh public/images/backgrounds/*.png | awk '{print "  " $9 ": " $5}'
echo ""
echo "======================================"
echo "💡 下一步:"
echo "1. 检查图片质量"
echo "2. git add public/images/"
echo "3. git commit -m '优化：压缩图片大小'"
echo "4. git push"
echo "======================================"

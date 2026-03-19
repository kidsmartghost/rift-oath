#!/usr/bin/env python3
"""
《裂隙之誓》图片压缩脚本
使用 Pillow 压缩 PNG 图片，目标：
- 背景：1920×1080，质量 85%，目标 <500KB
- 角色：512×768，质量 85%，目标 <300KB
"""

import os
from PIL import Image
import sys

# 配置
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHARACTERS_DIR = os.path.join(PROJECT_ROOT, 'public/images/characters')
BACKGROUNDS_DIR = os.path.join(PROJECT_ROOT, 'public/images/backgrounds')

# 目标尺寸和质量
CHARACTER_SIZE = (512, 768)  # 角色立绘尺寸
BACKGROUND_SIZE = (1920, 1080)  # 背景尺寸
PNG_QUALITY = 85  # PNG 压缩质量 (1-100)

def compress_image(input_path, output_path, target_size, quality=PNG_QUALITY):
    """压缩单张图片"""
    try:
        with Image.open(input_path) as img:
            # 转换为 RGB（移除 alpha 通道，如果需要保留透明通道，改用 RGBA）
            # 如果原图有透明通道，保留它
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')
            
            # 调整尺寸
            img = img.resize(target_size, Image.Resampling.LANCZOS)
            
            # 保存压缩后的图片
            if output_path.lower().endswith('.png'):
                # PNG 使用 optimize 参数
                img.save(output_path, 'PNG', optimize=True, quality=quality)
            else:
                # JPG
                img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # 计算压缩比
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            ratio = (1 - compressed_size / original_size) * 100
            
            return True, ratio, original_size, compressed_size
    except Exception as e:
        return False, 0, 0, 0, str(e)

def process_directory(directory, target_size, description):
    """处理整个目录的图片"""
    print(f"\n{'='*60}")
    print(f"📁 处理 {description}: {directory}")
    print(f"{'='*60}")
    
    if not os.path.exists(directory):
        print(f"❌ 目录不存在：{directory}")
        return 0, 0
    
    files = [f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not files:
        print("⚠️  没有找到图片文件")
        return 0, 0
    
    total_original = 0
    total_compressed = 0
    success_count = 0
    
    for filename in files:
        input_path = os.path.join(directory, filename)
        output_path = input_path  # 覆盖原文件
        
        print(f"\n处理：{filename}")
        
        success, ratio, orig_size, comp_size = compress_image(
            input_path, output_path, target_size
        )
        
        if success:
            total_original += orig_size
            total_compressed += comp_size
            success_count += 1
            
            # 格式化大小显示
            def format_size(size):
                if size < 1024:
                    return f"{size}B"
                elif size < 1024*1024:
                    return f"{size/1024:.1f}KB"
                else:
                    return f"{size/(1024*1024):.2f}MB"
            
            print(f"  ✅ {format_size(orig_size)} → {format_size(comp_size)} (压缩 {ratio:.1f}%)")
        else:
            print(f"  ❌ 失败：{success}")
    
    # 统计
    overall_ratio = (1 - total_compressed / total_original) * 100 if total_original > 0 else 0
    
    print(f"\n{'='*60}")
    print(f"📊 {description} 压缩统计:")
    print(f"  处理文件数：{success_count}/{len(files)}")
    print(f"  原始总大小：{total_original/(1024*1024):.2f}MB")
    print(f"  压缩后总大小：{total_compressed/(1024*1024):.2f}MB")
    print(f"  总体压缩率：{overall_ratio:.1f}%")
    print(f"  节省空间：{(total_original - total_compressed)/(1024*1024):.2f}MB")
    print(f"{'='*60}")
    
    return success_count, len(files)

def main():
    print("🎨 《裂隙之誓》图片压缩工具")
    print("="*60)
    
    # 检查 Pillow 是否安装
    try:
        from PIL import Image
    except ImportError:
        print("\n❌ 错误：Pillow 未安装")
        print("请运行：pip install Pillow")
        sys.exit(1)
    
    # 处理角色立绘
    char_success, char_total = process_directory(
        CHARACTERS_DIR, 
        CHARACTER_SIZE,
        "角色立绘"
    )
    
    # 处理背景
    bg_success, bg_total = process_directory(
        BACKGROUNDS_DIR,
        BACKGROUND_SIZE,
        "场景背景"
    )
    
    # 总统计
    print("\n" + "="*60)
    print("🎉 全部处理完成！")
    print(f"  角色立绘：{char_success}/{char_total} 成功")
    print(f"  场景背景：{bg_success}/{bg_total} 成功")
    print("="*60)
    
    print("\n💡 下一步:")
    print("1. 检查压缩后的图片质量是否可接受")
    print("2. 提交到 Git: git add public/images/")
    print("3. 推送部署：git commit -m '优化：压缩图片以加快加载速度' && git push")

if __name__ == '__main__':
    main()

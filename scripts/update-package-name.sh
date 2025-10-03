#!/bin/bash

# 更新包名脚本
# 用法: ./scripts/update-package-name.sh <new-scope>
# 例如: ./scripts/update-package-name.sh suchuhong

set -e

if [ -z "$1" ]; then
  echo "❌ 错误: 请提供新的 scope 名称"
  echo "用法: ./scripts/update-package-name.sh <scope>"
  echo "例如: ./scripts/update-package-name.sh suchuhong"
  exit 1
fi

NEW_SCOPE=$1
OLD_NAME="@such12138/react-clipboard-lite"
NEW_NAME="@${NEW_SCOPE}/react-clipboard-lite"

echo "🔄 更新包名..."
echo "   从: $OLD_NAME"
echo "   到: $NEW_NAME"
echo ""

# 更新 package.json 文件
echo "📝 更新 package.json 文件..."

# 库的 package.json
sed -i.bak "s|\"name\": \"@such12138/react-clipboard-lite\"|\"name\": \"@${NEW_SCOPE}/react-clipboard-lite\"|g" packages/react-clipboard-lite/package.json

# demo 的 package.json
sed -i.bak "s|\"@such12138/react-clipboard-lite\": \"workspace:\*\"|\"@${NEW_SCOPE}/react-clipboard-lite\": \"workspace:*\"|g" apps/vite-demo/package.json

# 更新 README 文件
echo "📝 更新 README 文件..."
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" README.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" README.zh-CN.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" packages/react-clipboard-lite/README.md

# 更新文档
echo "📝 更新文档文件..."
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" docs/index.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" docs/guide.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" docs/api.md

# 更新其他文档
echo "📝 更新其他文档..."
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" PUBLISHING.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" QUICK_PUBLISH.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" PRE_PUBLISH_CHECKLIST.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" PROJECT_OVERVIEW.md
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" docs/publishing.md

# 更新 package.json 中的脚本
echo "📝 更新脚本命令..."
sed -i.bak "s|@such12138/react-clipboard-lite|@${NEW_SCOPE}/react-clipboard-lite|g" package.json

# 删除备份文件
echo "🧹 清理备份文件..."
find . -name "*.bak" -type f -delete

echo ""
echo "✅ 完成！包名已更新为: $NEW_NAME"
echo ""
echo "📋 下一步:"
echo "1. 运行 pnpm install 更新依赖"
echo "2. 检查更改: git diff"
echo "3. 提交更改: git add . && git commit -m 'chore: update package name to @${NEW_SCOPE}/react-clipboard-lite'"
echo "4. 发布: pnpm --filter @${NEW_SCOPE}/react-clipboard-lite publish --access public"

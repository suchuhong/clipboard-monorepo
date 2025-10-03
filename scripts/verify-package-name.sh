#!/bin/bash

# 验证包名更新脚本
# 检查项目中是否还有旧的包名引用

set -e

OLD_NAME="@such/react-clipboard-lite"
NEW_NAME="@such12138/react-clipboard-lite"

echo "🔍 检查项目中的包名引用..."
echo ""

# 排除的目录
EXCLUDE_DIRS="node_modules .git dist .cache .vitepress/cache .vitepress/dist storybook-static test-results playwright-report"

# 构建 grep 排除参数
EXCLUDE_ARGS=""
for dir in $EXCLUDE_DIRS; do
  EXCLUDE_ARGS="$EXCLUDE_ARGS --exclude-dir=$dir"
done

# 检查旧包名
echo "📋 检查旧包名: $OLD_NAME"
OLD_COUNT=$(grep -r "$OLD_NAME" $EXCLUDE_ARGS . 2>/dev/null | wc -l | tr -d ' ')

if [ "$OLD_COUNT" -gt 0 ]; then
  echo "❌ 发现 $OLD_COUNT 处旧包名引用:"
  echo ""
  grep -rn "$OLD_NAME" $EXCLUDE_ARGS . 2>/dev/null || true
  echo ""
  echo "请更新这些文件中的包名"
  exit 1
else
  echo "✅ 未发现旧包名引用"
fi

echo ""

# 检查新包名
echo "📋 检查新包名: $NEW_NAME"
NEW_COUNT=$(grep -r "$NEW_NAME" $EXCLUDE_ARGS . 2>/dev/null | wc -l | tr -d ' ')

if [ "$NEW_COUNT" -gt 0 ]; then
  echo "✅ 发现 $NEW_COUNT 处新包名引用"
else
  echo "⚠️  未发现新包名引用，这可能不正常"
  exit 1
fi

echo ""
echo "🎉 包名验证通过！"
echo ""
echo "📝 关键文件检查:"

# 检查关键文件
check_file() {
  local file=$1
  if [ -f "$file" ]; then
    if grep -q "$NEW_NAME" "$file"; then
      echo "  ✅ $file"
    else
      echo "  ⚠️  $file (未找到新包名)"
    fi
  else
    echo "  ❓ $file (文件不存在)"
  fi
}

check_file "packages/react-clipboard-lite/package.json"
check_file "apps/vite-demo/package.json"
check_file "README.md"
check_file "docs/index.md"
check_file ".changeset/initial-setup.md"

echo ""
echo "✨ 验证完成！"

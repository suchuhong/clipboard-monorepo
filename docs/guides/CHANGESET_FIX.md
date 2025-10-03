# 🔧 修复 Changeset 包名问题

## 问题

```
Found changeset initial-setup for package @such/react-clipboard-lite which is not in the workspace
```

## 原因

`.changeset/` 目录中的 changeset 文件还引用了旧的包名 `@such/react-clipboard-lite`。

## 解决方案

### 已自动修复

`.changeset/initial-setup.md` 已更新为使用新包名 `@such12138/react-clipboard-lite`。

### 如果还有其他 changeset 文件

检查 `.changeset/` 目录中的所有 `.md` 文件：

```bash
ls -la .changeset/
```

如果有其他 changeset 文件引用旧包名，需要更新它们：

```bash
# 查找所有引用旧包名的 changeset
grep -r "@such/react-clipboard-lite" .changeset/

# 批量替换（macOS/Linux）
find .changeset -name "*.md" -type f -exec sed -i '' 's/@such\/react-clipboard-lite/@such12138\/react-clipboard-lite/g' {} +

# 或手动编辑每个文件
```

### 或者删除旧的 changesets

如果不需要保留旧的 changeset 历史：

```bash
# 删除除了 config.json 和 README.md 之外的所有文件
cd .changeset
rm *.md
# 保留 config.json 和 README.md
```

然后创建新的 changeset：

```bash
pnpm run changeset
```

## 验证

运行以下命令验证：

```bash
# 检查是否还有旧包名
grep -r "@such/react-clipboard-lite" .changeset/

# 应该只找到新包名
grep -r "@such12138/react-clipboard-lite" .changeset/
```

## 提交更改

```bash
git add .changeset/
git commit -m "fix: update package name in changesets"
git push
```

## 完成

现在 GitHub Actions 应该可以正常运行了！

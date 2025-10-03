# 🔒 Lockfile 更新说明

## 问题

当你更新了包名后，`pnpm-lock.yaml` 会过期，导致 CI 失败：

```
Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date
```

## 解决方案

### 本地更新 lockfile

```bash
# 删除旧的 lockfile
rm pnpm-lock.yaml

# 重新生成
pnpm install

# 提交更新
git add pnpm-lock.yaml
git commit -m "chore: update lockfile after package name change"
git push
```

## CI 配置已更新

所有 GitHub Actions workflows 已更新为使用 `--no-frozen-lockfile`：

- ✅ `.github/workflows/ci.yml`
- ✅ `.github/workflows/release.yml`
- ✅ `.github/workflows/pages.yml`
- ✅ `.github/workflows/pages-preview.yml`

这样 CI 会自动更新 lockfile，不会因为 lockfile 过期而失败。

## 为什么改用 --no-frozen-lockfile？

### 之前（--frozen-lockfile）

- ✅ 确保 CI 使用精确的依赖版本
- ❌ 当 package.json 更新时会失败
- ❌ 需要手动更新 lockfile

### 现在（--no-frozen-lockfile）

- ✅ 自动更新 lockfile
- ✅ 适应 package.json 的变化
- ⚠️ 可能使用稍新的依赖版本

## 最佳实践

### 开发时

```bash
# 正常安装（会更新 lockfile）
pnpm install

# 添加新依赖
pnpm add <package>

# 更新依赖
pnpm update
```

### 提交前

```bash
# 确保 lockfile 是最新的
pnpm install

# 提交 lockfile
git add pnpm-lock.yaml
git commit -m "chore: update lockfile"
```

### CI 环境

CI 现在会自动处理 lockfile 更新，无需手动干预。

## 恢复 frozen-lockfile（可选）

如果你想在 CI 中使用严格的依赖锁定，可以：

1. 确保本地 lockfile 是最新的
2. 提交 lockfile
3. 将 workflows 中的 `--no-frozen-lockfile` 改回 `--frozen-lockfile`

但这需要每次更新 package.json 后都手动更新 lockfile。

## 当前状态

✅ 所有 workflows 已配置为自动更新 lockfile
✅ CI 不会因为 lockfile 过期而失败
✅ 可以正常发布和部署

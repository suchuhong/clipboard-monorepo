# 快速发布指南

## 🚀 快速开始

### 方式一：自动发布（推荐）

1. **配置 npm token**（仅首次）
   - 登录 [npmjs.com](https://www.npmjs.com)
   - 生成 Automation token
   - 在 GitHub 仓库添加 Secret：`NPM_TOKEN`

2. **创建变更集**

   ```bash
   pnpm run changeset
   ```

3. **提交并推送**

   ```bash
   git add .
   git commit -m "chore: add changeset"
   git push
   ```

4. **合并自动创建的 PR**
   - GitHub Actions 会自动创建 "Version Packages" PR
   - 审查并合并 PR
   - 自动发布到 npm ✨

### 方式二：手动发布

```bash
# 1. 登录 npm
pnpm login

# 2. 构建
pnpm run build

# 3. 创建变更集
pnpm run changeset

# 4. 更新版本
pnpm run version-packages

# 5. 提交
git add .
git commit -m "chore(release): publish packages"
git push

# 6. 发布
pnpm run release

# 7. 推送标签
git push --follow-tags
```

## 📋 版本类型

- `patch` - Bug 修复（0.0.x）
- `minor` - 新功能（0.x.0）
- `major` - 破坏性更新（x.0.0）

## ✅ 发布前检查

```bash
pnpm test          # 测试通过
pnpm run lint      # 代码检查通过
pnpm run build     # 构建成功
```

## 📚 详细文档

查看 [docs/publishing.md](./docs/publishing.md) 了解完整的发布流程和最佳实践。

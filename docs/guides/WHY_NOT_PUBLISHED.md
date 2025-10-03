# 🤔 为什么构建成功但没有发布到 npm？

## 原因分析

GitHub Actions 构建成功，但包没有发布到 npm，通常有以下几个原因：

## 1. Changesets 工作流程

Changesets 的自动发布流程分为两步：

### 第一次推送（有 changeset）

1. ✅ 检测到 `.changeset/` 目录中有 changeset 文件
2. ✅ 自动创建一个 **"Version Packages"** PR
3. ⏸️ **不会立即发布**，等待 PR 合并

### 第二次推送（合并 PR 后）

1. ✅ PR 被合并到 main 分支
2. ✅ 检测到没有新的 changeset
3. ✅ 自动发布到 npm

## 2. 检查 GitHub

### 查看 Pull Requests

访问：https://github.com/suchuhong/clipboard-monorepo/pulls

查找名为 **"Version Packages"** 或 **"chore(release): publish packages"** 的 PR。

**如果找到这个 PR**：

- ✅ 说明 Changesets 正常工作
- 📝 审查 PR 中的版本更新和 CHANGELOG
- ✔️ 合并 PR 后会自动发布

**如果没有找到 PR**：

- 继续检查下面的原因

### 查看 Actions 日志

访问：https://github.com/suchuhong/clipboard-monorepo/actions/workflows/release.yml

查看最近的运行日志，检查：

- 是否有错误信息
- Changesets action 的输出
- 是否尝试创建 PR

## 3. NPM_TOKEN 未配置

### 检查 Secret

1. 访问：https://github.com/suchuhong/clipboard-monorepo/settings/secrets/actions
2. 查找名为 `NPM_TOKEN` 的 secret
3. 如果不存在，需要添加

### 添加 NPM_TOKEN

1. 登录 [npmjs.com](https://www.npmjs.com)
2. 点击头像 → Access Tokens
3. 点击 "Generate New Token" → "Classic Token"
4. 选择 "Automation" 类型
5. 复制生成的 token
6. 在 GitHub 仓库添加 Secret：
   - Name: `NPM_TOKEN`
   - Value: 粘贴 token
7. 点击 "Add secret"

### 重新触发 Workflow

添加 token 后：

```bash
git commit --allow-empty -m "chore: trigger release workflow"
git push
```

## 4. 权限问题

### 检查 Workflow 权限

1. 访问：https://github.com/suchuhong/clipboard-monorepo/settings/actions
2. 滚动到 "Workflow permissions"
3. 确保选择了 **"Read and write permissions"**
4. 勾选 **"Allow GitHub Actions to create and approve pull requests"**
5. 点击 "Save"

## 5. 手动发布

如果自动发布有问题，可以手动发布：

### 方法 1：本地发布

```bash
# 1. 确保已登录 npm
pnpm login

# 2. 更新版本
pnpm run version-packages

# 3. 提交版本更新
git add .
git commit -m "chore(release): publish packages"
git push

# 4. 发布
pnpm --filter @such12138/react-clipboard-lite publish --access public

# 5. 推送标签
git push --follow-tags
```

### 方法 2：合并 Version PR

如果 GitHub 已经创建了 "Version Packages" PR：

1. 访问 PR 页面
2. 审查更改
3. 合并 PR
4. 自动发布会在合并后触发

## 6. 调试步骤

### 步骤 1：检查 Changeset

```bash
# 查看现有的 changesets
ls -la .changeset/

# 应该看到 .md 文件（除了 README.md 和 config.json）
```

### 步骤 2：查看 Actions 日志

1. 访问 Actions 页面
2. 点击最近的 "release" workflow
3. 查看 "Create Release Pull Request or Publish" 步骤
4. 检查输出信息

### 步骤 3：检查包名

确认 package.json 中的包名正确：

```json
{
  "name": "@such12138/react-clipboard-lite"
}
```

### 步骤 4：检查 npm 权限

```bash
# 检查登录状态
npm whoami

# 检查包是否已存在
npm view @such12138/react-clipboard-lite
```

## 7. 常见错误信息

### "No changesets found"

**原因**：没有 changeset 文件

**解决**：

```bash
pnpm run changeset
git add .changeset/
git commit -m "chore: add changeset"
git push
```

### "NPM_TOKEN not found"

**原因**：GitHub Secrets 中没有 NPM_TOKEN

**解决**：按照上面的步骤添加 NPM_TOKEN

### "403 Forbidden"

**原因**：没有发布权限

**解决**：

- 确认 npm 账号有权限
- 首次发布 scoped 包需要 `--access public`

### "404 Not Found"

**原因**：包名不存在或 scope 无权限

**解决**：

- 检查包名是否正确
- 确认有 scope 的使用权限

## 8. 预期的发布流程

### 正常流程

1. **开发阶段**

   ```bash
   # 开发功能
   git add .
   git commit -m "feat: add new feature"
   ```

2. **创建 Changeset**

   ```bash
   pnpm run changeset
   # 选择包、版本类型、填写说明
   git add .changeset/
   git commit -m "chore: add changeset"
   git push
   ```

3. **自动创建 PR**
   - GitHub Actions 检测到 changeset
   - 自动创建 "Version Packages" PR
   - PR 包含版本更新和 CHANGELOG

4. **审查并合并 PR**
   - 审查 PR 中的更改
   - 合并 PR 到 main

5. **自动发布**
   - 合并后自动触发发布
   - 发布到 npm
   - 创建 GitHub Release

## 9. 快速检查清单

- [ ] `.changeset/` 目录中有 changeset 文件
- [ ] GitHub Secrets 中有 `NPM_TOKEN`
- [ ] Workflow permissions 设置为 "Read and write"
- [ ] 允许 Actions 创建 PR
- [ ] 包名正确（`@such12138/react-clipboard-lite`）
- [ ] npm 账号已登录且有权限
- [ ] 检查 GitHub Actions 日志

## 10. 获取帮助

如果以上都检查过了还是不行：

1. 查看 [GitHub Actions 日志](https://github.com/suchuhong/clipboard-monorepo/actions)
2. 查看 [Pull Requests](https://github.com/suchuhong/clipboard-monorepo/pulls)
3. 查看 [Issues](https://github.com/suchuhong/clipboard-monorepo/issues)
4. 参考 [Changesets 文档](https://github.com/changesets/changesets)

## 📚 相关文档

- [Quick Start](./QUICK_START.md) - 快速发布指南
- [Publishing Guide](./PUBLISHING.md) - 详细发布文档
- [npm Setup](./NPM_SETUP.md) - npm 配置
- [GitHub Pages Setup](./GITHUB_PAGES_SETUP.md) - GitHub Pages 设置

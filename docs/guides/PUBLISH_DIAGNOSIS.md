# 🔍 发布诊断指南

## 快速诊断

### 步骤 1：检查是否有 Version PR

访问：https://github.com/suchuhong/clipboard-monorepo/pulls

**如果看到 "Version Packages" PR**：

- ✅ Changesets 正常工作
- 📝 审查并合并这个 PR
- ⏳ 合并后会自动发布到 npm

**如果没有 PR**：

- 继续下面的诊断

### 步骤 2：检查 NPM_TOKEN

访问：https://github.com/suchuhong/clipboard-monorepo/settings/secrets/actions

**如果看到 NPM_TOKEN**：

- ✅ Token 已配置

**如果没有 NPM_TOKEN**：

- ❌ 需要添加 token
- 📝 按照下面的步骤添加

### 步骤 3：检查 Actions 日志

访问：https://github.com/suchuhong/clipboard-monorepo/actions/workflows/release.yml

点击最近的运行，查看 "Create Release Pull Request or Publish" 步骤的输出。

**可能的输出**：

#### 情况 A：创建了 PR

```
Created Pull Request #123
```

→ 去合并这个 PR

#### 情况 B：没有 changeset

```
No changesets found
```

→ 需要创建 changeset

#### 情况 C：发布成功

```
Published @such12138/react-clipboard-lite@0.1.0
```

→ 检查 npm 是否真的发布了

#### 情况 D：错误

```
Error: ...
```

→ 根据错误信息解决

## 解决方案

### 方案 1：等待并合并 PR（最常见）

如果 GitHub 已经创建了 "Version Packages" PR：

1. 访问 PR 页面
2. 审查版本更新和 CHANGELOG
3. 点击 "Merge pull request"
4. 等待几分钟
5. 检查 npm：https://www.npmjs.com/package/@such12138/react-clipboard-lite

### 方案 2：添加 NPM_TOKEN

如果没有配置 NPM_TOKEN：

1. **获取 npm token**
   - 登录 https://www.npmjs.com
   - 头像 → Access Tokens
   - Generate New Token → Classic Token
   - 选择 "Automation"
   - 复制 token

2. **添加到 GitHub**
   - 访问：https://github.com/suchuhong/clipboard-monorepo/settings/secrets/actions
   - New repository secret
   - Name: `NPM_TOKEN`
   - Value: 粘贴 token
   - Add secret

3. **重新触发**
   ```bash
   git commit --allow-empty -m "chore: trigger release"
   git push
   ```

### 方案 3：创建新的 Changeset

如果没有 changeset：

```bash
# 创建 changeset
pnpm run changeset

# 选择：
# - Package: @such12138/react-clipboard-lite
# - Version: minor (首次发布建议用 minor)
# - Summary: initial release

# 提交
git add .changeset/
git commit -m "chore: add changeset for initial release"
git push
```

### 方案 4：手动发布

如果自动发布有问题，手动发布：

```bash
# 1. 登录 npm
pnpm login

# 2. 构建
pnpm --filter @such12138/react-clipboard-lite run build

# 3. 发布
pnpm --filter @such12138/react-clipboard-lite publish --access public
```

## 诊断命令

### 本地检查

```bash
# 1. 检查 changeset
ls -la .changeset/

# 2. 检查包名
cat packages/react-clipboard-lite/package.json | grep "name"

# 3. 检查构建产物
ls -la packages/react-clipboard-lite/dist/

# 4. 检查 npm 登录
npm whoami

# 5. 检查包是否已发布
npm view @such12138/react-clipboard-lite
```

### GitHub 检查

1. **Pull Requests**：https://github.com/suchuhong/clipboard-monorepo/pulls
2. **Actions**：https://github.com/suchuhong/clipboard-monorepo/actions
3. **Secrets**：https://github.com/suchuhong/clipboard-monorepo/settings/secrets/actions
4. **Permissions**：https://github.com/suchuhong/clipboard-monorepo/settings/actions

## 常见场景

### 场景 1：首次发布

**现象**：有 changeset，构建成功，但没有发布

**原因**：Changesets 会先创建 PR，不会直接发布

**解决**：

1. 查找 "Version Packages" PR
2. 合并 PR
3. 等待自动发布

### 场景 2：没有 NPM_TOKEN

**现象**：Actions 日志显示 "NPM_TOKEN not found"

**解决**：按照上面的步骤添加 NPM_TOKEN

### 场景 3：没有 Changeset

**现象**：Actions 日志显示 "No changesets found"

**解决**：创建 changeset 并推送

### 场景 4：权限问题

**现象**：Actions 日志显示权限错误

**解决**：

1. 检查 Workflow permissions
2. 确保设置为 "Read and write"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

## 验证发布

发布成功后：

1. **npm 网站**
   - 访问：https://www.npmjs.com/package/@such12138/react-clipboard-lite
   - 应该看到你的包

2. **测试安装**

   ```bash
   npm install @such12138/react-clipboard-lite
   ```

3. **GitHub Release**
   - 访问：https://github.com/suchuhong/clipboard-monorepo/releases
   - 应该看到新的 release

## 时间线

正常的发布时间线：

1. **T+0**: 推送 changeset → 触发 workflow
2. **T+2min**: Workflow 完成 → 创建 PR
3. **T+X**: 手动合并 PR
4. **T+X+2min**: 自动发布到 npm
5. **T+X+3min**: 可以在 npm 上看到包

## 下一步

根据你的情况：

1. **如果有 Version PR** → 合并它
2. **如果没有 NPM_TOKEN** → 添加它
3. **如果没有 Changeset** → 创建它
4. **如果都有但还是不行** → 手动发布

## 📚 相关文档

- [Why Not Published](./WHY_NOT_PUBLISHED.md) - 详细原因分析
- [Quick Start](./QUICK_START.md) - 快速发布指南
- [Publishing Guide](./PUBLISHING.md) - 完整发布文档
- [npm Setup](./NPM_SETUP.md) - npm 配置指南

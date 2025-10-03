# 发布到 npm

本指南介绍如何将 `@such/react-clipboard-lite` 发布到 npm 仓库。

## 前置准备

### 1. 注册 npm 账号

如果还没有 npm 账号，请先注册：

1. 访问 [npmjs.com](https://www.npmjs.com/signup)
2. 注册账号
3. 验证邮箱

### 2. 本地登录 npm

```bash
npm login
# 或
pnpm login
```

输入你的 npm 用户名、密码和邮箱。

### 3. 验证登录状态

```bash
npm whoami
```

应该显示你的 npm 用户名。

## 手动发布流程

### 步骤 1：确保代码质量

```bash
# 运行所有测试
pnpm test

# 运行代码检查
pnpm run lint

# 格式化代码
pnpm run format
```

### 步骤 2：构建包

```bash
# 构建库
pnpm --filter @such/react-clipboard-lite run build
```

构建后会在 `packages/react-clipboard-lite/dist/` 生成：

- `index.cjs` - CommonJS 格式
- `index.mjs` - ES Module 格式
- `index.d.ts` - TypeScript 类型定义

### 步骤 3：创建 Changeset

```bash
pnpm run changeset
```

按提示操作：

1. 选择要发布的包（空格选择，回车确认）
2. 选择版本类型：
   - `patch` - 修复 bug（0.0.x）
   - `minor` - 新功能（0.x.0）
   - `major` - 破坏性更新（x.0.0）
3. 输入变更说明（支持 Markdown）

这会在 `.changeset/` 目录创建一个变更文件。

### 步骤 4：更新版本

```bash
pnpm run version-packages
```

这会：

- 更新 `package.json` 中的版本号
- 更新 `CHANGELOG.md`
- 删除已应用的 changeset 文件

### 步骤 5：提交版本更新

```bash
git add .
git commit -m "chore(release): publish packages"
git push
```

### 步骤 6：发布到 npm

```bash
# 发布包
pnpm run release

# 或手动发布单个包
pnpm --filter @such/react-clipboard-lite publish --access public
```

**注意**：首次发布 scoped 包（如 `@such/xxx`）需要添加 `--access public`。

### 步骤 7：推送 Git 标签

```bash
git push --follow-tags
```

## 自动发布（推荐）

使用 GitHub Actions 自动发布，无需手动操作。

### 配置步骤

#### 1. 获取 npm Token

1. 登录 [npmjs.com](https://www.npmjs.com)
2. 点击头像 → Access Tokens
3. 点击 "Generate New Token" → "Classic Token"
4. 选择 "Automation" 类型
5. 复制生成的 token

#### 2. 配置 GitHub Secrets

1. 进入 GitHub 仓库
2. Settings → Secrets and variables → Actions
3. 点击 "New repository secret"
4. 名称：`NPM_TOKEN`
5. 值：粘贴刚才复制的 npm token
6. 点击 "Add secret"

#### 3. 创建发布 Workflow

创建 `.github/workflows/release.yml`：

```yaml
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build packages
        run: pnpm run build

      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm run release
          commit: "chore(release): publish packages"
          title: "chore(release): publish packages"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 自动发布流程

1. **开发阶段**：正常开发，提交代码

2. **准备发布**：创建 changeset

   ```bash
   pnpm run changeset
   git add .
   git commit -m "chore: add changeset for new feature"
   git push
   ```

3. **自动创建 PR**：
   - GitHub Actions 检测到 changeset
   - 自动创建一个 "Version Packages" PR
   - PR 包含版本更新和 CHANGELOG

4. **审查并合并**：
   - 审查 PR 中的版本变更
   - 合并 PR 到 main 分支

5. **自动发布**：
   - 合并后自动触发发布流程
   - 自动发布到 npm
   - 自动创建 GitHub Release

## 版本管理策略

### 语义化版本（Semver）

格式：`MAJOR.MINOR.PATCH`（如 `1.2.3`）

- **MAJOR**（主版本）：不兼容的 API 变更
  - 示例：移除组件、改变 Props 接口
  - 版本号：`1.0.0` → `2.0.0`

- **MINOR**（次版本）：向后兼容的新功能
  - 示例：添加新组件、新增可选 Props
  - 版本号：`1.0.0` → `1.1.0`

- **PATCH**（补丁版本）：向后兼容的 bug 修复
  - 示例：修复 bug、优化性能
  - 版本号：`1.0.0` → `1.0.1`

### 预发布版本

发布测试版本：

```bash
# 发布 beta 版本
pnpm --filter @such/react-clipboard-lite publish --tag beta

# 发布 alpha 版本
pnpm --filter @such/react-clipboard-lite publish --tag alpha
```

用户安装：

```bash
npm install @such/react-clipboard-lite@beta
```

## 发布检查清单

发布前确认：

- [ ] 所有测试通过（`pnpm test`）
- [ ] 代码检查通过（`pnpm run lint`）
- [ ] 代码已格式化（`pnpm run format`）
- [ ] 已构建包（`pnpm run build`）
- [ ] 已创建 changeset（`pnpm run changeset`）
- [ ] 已更新文档（如有 API 变更）
- [ ] 已更新 README（如有重大变更）
- [ ] 版本号符合语义化版本规范
- [ ] CHANGELOG 准确描述了变更

## 常见问题

### 1. 发布失败：403 Forbidden

**原因**：没有权限发布到该包名

**解决**：

- 确保已登录正确的 npm 账号
- 首次发布 scoped 包需要添加 `--access public`
- 检查包名是否已被占用

### 2. 发布失败：版本号已存在

**原因**：该版本号已经发布过

**解决**：

```bash
# 更新版本号
pnpm run version-packages
```

### 3. 构建文件缺失

**原因**：忘记构建或 `.gitignore` 忽略了 dist

**解决**：

```bash
# 重新构建
pnpm run build

# 检查 package.json 的 files 字段
# 确保包含 "dist"
```

### 4. TypeScript 类型定义缺失

**原因**：构建配置问题

**解决**：

- 检查 `tsup` 配置是否包含 `--dts` 标志
- 确保 `package.json` 中 `types` 字段指向正确的 `.d.ts` 文件

### 5. 自动发布不工作

**原因**：GitHub Secrets 配置错误

**解决**：

- 检查 `NPM_TOKEN` 是否正确配置
- 确保 token 类型为 "Automation"
- 检查 workflow 文件语法

## 验证发布

发布后验证：

### 1. 检查 npm 网站

访问：`https://www.npmjs.com/package/@such/react-clipboard-lite`

确认：

- 版本号正确
- README 显示正常
- 文件列表完整

### 2. 本地安装测试

```bash
# 创建测试项目
mkdir test-install
cd test-install
npm init -y
npm install @such/react-clipboard-lite

# 检查安装的文件
ls node_modules/@such/react-clipboard-lite/
```

### 3. 测试导入

```tsx
import { CopyButton, CopyOnClick, useClipboard } from "@such/react-clipboard-lite";

// 确保类型定义正常
const button: typeof CopyButton = CopyButton;
```

## 回滚发布

如果发布了有问题的版本：

### 方法 1：废弃版本（推荐）

```bash
npm deprecate @such/react-clipboard-lite@1.2.3 "This version has critical bugs, please upgrade to 1.2.4"
```

### 方法 2：取消发布（24小时内）

```bash
npm unpublish @such/react-clipboard-lite@1.2.3
```

**注意**：

- 只能取消发布 24 小时内的版本
- 不推荐使用，会影响已安装的用户
- 更好的做法是发布修复版本

## 最佳实践

1. **使用 Changesets**：统一管理版本和变更日志
2. **自动化发布**：减少人为错误
3. **语义化版本**：让用户了解变更影响
4. **详细的 CHANGELOG**：帮助用户了解每个版本的变化
5. **发布前测试**：确保包在真实环境中可用
6. **保持向后兼容**：尽量避免破坏性变更
7. **文档同步更新**：确保文档与代码版本一致

## 相关资源

- [npm 文档](https://docs.npmjs.com/)
- [Changesets 文档](https://github.com/changesets/changesets)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [npm 包发布最佳实践](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

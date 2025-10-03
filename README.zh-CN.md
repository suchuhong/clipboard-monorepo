# such-clipboard-monorepo

[![CI](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/ci.yml)
[![Pages](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/pages.yml/badge.svg)](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/pages.yml)
[![npm version](https://img.shields.io/npm/v/@such/react-clipboard-lite.svg)](https://www.npmjs.com/package/@such/react-clipboard-lite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@such/react-clipboard-lite` 的 Monorepo 项目 - 一个轻量级的 React 剪贴板库，提供组件和 Hooks。

[English](./README.md) | 简体中文

## 📦 项目内容

- **[@such/react-clipboard-lite](./packages/react-clipboard-lite)** - 核心库，包含 React 组件和 Hooks
- **[vite-demo](./apps/vite-demo)** - 演示应用，展示所有功能
- **[文档站点](https://suchuhong.github.io/clipboard-monorepo/)** - 使用 VitePress 构建的完整文档
- **[Storybook](https://suchuhong.github.io/clipboard-monorepo/storybook/)** - 交互式组件示例

## ✨ 特性

- 🚀 现代 Clipboard API，自动降级支持
- 📦 极小的包体积，零依赖
- 🎯 完整的 TypeScript 类型支持
- ♿ 无障碍访问友好
- 🧪 完整测试覆盖（Vitest + Testing Library + Playwright）
- 📖 详尽的文档和示例

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 9.0.0

如果还没有安装 pnpm，请先全局安装：

```bash
npm install -g pnpm
```

## 安装

```bash
pnpm install
```

## 开发

```bash
# 启动 Storybook（用于库开发）
pnpm run storybook

# 启动 Vite 演示应用（需要先构建库或通过别名使用源码）
cd apps/vite-demo
pnpm install
pnpm run dev

# 库开发的监听模式
pnpm --filter @such/react-clipboard-lite run dev
```

## 构建与测试

```bash
# 构建所有包
pnpm run build

# 运行测试（单次运行）
pnpm test

# 监听模式运行测试
pnpm --filter @such/react-clipboard-lite run test:watch
```

## 代码质量

- **ESLint/Prettier**
  - 代码检查：`pnpm run lint`
  - 代码格式化：`pnpm run format`
  - 检查格式：`pnpm run check:format`

## 发布流程

查看 [发布指南](./PUBLISHING.md) 了解如何发布到 npm。

**首次配置**：

1. 更新 `.changeset/config.json` 中的仓库名称（如需要 GitHub 链接）
2. 在 GitHub 仓库添加 `NPM_TOKEN` Secret

**快速发布**：

```bash
# 1. 创建变更集
pnpm run changeset

# 2. 提交并推送
git add . && git commit -m "chore: add changeset" && git push

# 3. 合并自动创建的 PR（GitHub Actions 会自动发布）
```

**手动发布**：

```bash
pnpm run build
pnpm run changeset
pnpm run version-packages
pnpm run release
```

详细文档：[docs/publishing.md](./docs/publishing.md)

## E2E 测试

- **Playwright E2E（端到端测试）**
  - 本地运行：
    ```bash
    cd apps/vite-demo
    pnpm install
    npx playwright install
    pnpm run test:e2e
    ```
  - UI 模式：`pnpm run test:e2e:ui`
  - CI 环境：`ci.yml` 中的 `e2e` 任务会自动安装浏览器并运行测试

## 文档

### 📚 在线文档

- **文档站点**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/
- **API 参考**: https://suchuhong.github.io/clipboard-monorepo/api

### 🛠️ 本地开发

```bash
# 启动文档开发服务器
pnpm run docs:dev

# 构建文档（包含 Storybook）
pnpm run docs:build:with-sb

# 预览构建结果
pnpm run docs:preview
```

### 🚀 GitHub Pages 部署

当代码推送到 `main` 分支时，文档会自动部署到 GitHub Pages。

**首次设置 GitHub Pages**：

1. 访问 [仓库设置 → Pages](https://github.com/suchuhong/clipboard-monorepo/settings/pages)
2. 将 **Source** 设置为 `GitHub Actions`
3. 在 [Actions 设置](https://github.com/suchuhong/clipboard-monorepo/settings/actions)中将 **Workflow permissions** 设置为 `Read and write permissions`

详细设置说明请查看 [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)。

## 提交规范

使用 **Conventional Commits** 格式，subject（主题）必须小写开头：

- ✅ `feat: add new feature`
- ✅ `fix: resolve clipboard issue`
- ✅ `chore(deps): update dependencies`
- ❌ `feat: Add new feature`（subject 不能大写开头）

已配置 **Commitlint + Husky**：

- `pre-commit`：运行 lint-staged（ESLint + Prettier）
- `commit-msg`：校验提交信息格式

### 提交类型说明

- `feat`：新功能
- `fix`：Bug 修复
- `docs`：文档更新
- `style`：代码格式调整（不影响功能）
- `refactor`：代码重构
- `test`：测试相关
- `chore`：构建/工具链相关
- `perf`：性能优化
- `ci`：CI/CD 配置

## DocSearch（Algolia 搜索）

在仓库 Secrets 或本地环境变量中设置：

- `DOCSEARCH_APP_ID`
- `DOCSEARCH_API_KEY`（Search-Only key）
- `DOCSEARCH_INDEX`

本地运行（带搜索功能）：

```bash
DOCSEARCH_APP_ID=xxx DOCSEARCH_API_KEY=xxx DOCSEARCH_INDEX=xxx pnpm run docs:dev
```

## PR 预览部署

- 每个 Pull Request 会自动构建并部署**预览站点**（文档 + Storybook），Workflow：`.github/workflows/pages-preview.yml`
- 合并到 `main` 分支后，正式站点由 `.github/workflows/pages.yml` 发布到 GitHub Pages

## 项目结构

```
such-clipboard-monorepo/
├── packages/
│   └── react-clipboard-lite/    # 核心库
│       ├── src/                  # 源代码
│       ├── tests/                # 单元测试
│       └── stories/              # Storybook 故事
├── apps/
│   └── vite-demo/                # 演示应用
├── docs/                         # VitePress 文档
├── .github/workflows/            # CI/CD 流水线
├── pnpm-workspace.yaml           # pnpm 工作区配置
└── eslint.config.js              # ESLint 扁平配置（v9）
```

## 技术栈

- **包管理器**：pnpm
- **构建工具**：tsup（库）、Vite（演示应用）
- **测试框架**：Vitest + Testing Library
- **E2E 测试**：Playwright
- **代码检查**：ESLint 9（扁平配置）
- **代码格式化**：Prettier
- **文档工具**：VitePress + Storybook
- **CI/CD**：GitHub Actions

## 快速开始

1. **克隆仓库并安装依赖**

   ```bash
   git clone <repository-url>
   cd such-clipboard-monorepo
   pnpm install
   ```

2. **启动开发环境**

   ```bash
   # 启动 Storybook 查看组件
   pnpm run storybook

   # 或启动演示应用
   cd apps/vite-demo
   pnpm run dev
   ```

3. **运行测试**

   ```bash
   pnpm test
   ```

4. **构建项目**

   ```bash
   pnpm run build
   ```

## 贡献指南

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详细的贡献指南。

主要步骤：

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feat/amazing-feature`）
3. 提交更改（`git commit -m 'feat: add amazing feature'`）
4. 推送到分支（`git push origin feat/amazing-feature`）
5. 创建 Pull Request

## 许可证

[MIT](./LICENSE)

## 📚 其他文档

- [发布指南](./PUBLISHING.md) - npm 发布快速指南
- [详细发布文档](./docs/publishing.md) - 完整的发布文档
- [发布前检查清单](./PRE_PUBLISH_CHECKLIST.md) - 发布前的检查项目
- [贡献指南](./CONTRIBUTING.md) - 如何为项目做贡献
- [GitHub Pages 设置](./GITHUB_PAGES_SETUP.md) - GitHub Pages 部署设置

## 🔗 相关链接

- **GitHub 仓库**: https://github.com/suchuhong/clipboard-monorepo
- **文档站点**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/
- **npm 包**: https://www.npmjs.com/package/@such/react-clipboard-lite
- **问题反馈**: https://github.com/suchuhong/clipboard-monorepo/issues

## 🤝 贡献

欢迎贡献！请阅读我们的[贡献指南](./CONTRIBUTING.md)了解：

- 开发工作流程
- 提交信息规范
- Pull Request 流程
- 代码风格指南

## 📄 许可证

MIT © [suchuhong](https://github.com/suchuhong)

## 🙏 致谢

本项目使用以下优秀工具构建：

- [React](https://react.dev/) - UI 库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Vite](https://vitejs.dev/) - 构建工具
- [VitePress](https://vitepress.dev/) - 文档工具
- [Storybook](https://storybook.js.org/) - 组件开发
- [Vitest](https://vitest.dev/) - 单元测试
- [Playwright](https://playwright.dev/) - E2E 测试
- [pnpm](https://pnpm.io/) - 包管理器

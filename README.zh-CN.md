# such-clipboard-monorepo

`@such/react-clipboard-lite` 的 Monorepo 项目，包含 Vite 演示应用和 Storybook。

[English](./README.md) | 简体中文

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

- 本地文档服务器：`pnpm run docs:dev`（VitePress）
- 构建文档并集成 Storybook：`pnpm run docs:build:with-sb`
- 预览构建结果：`pnpm run docs:preview`
- 部署：推送到 `main` 分支会触发 `pages.yml`，GitHub Pages 将发布文档；Storybook 可在 `/storybook/` 路径访问

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

## 相关链接

- [GitHub 仓库](https://github.com/suchuhong/clipboard-monorepo)
- [文档站点](https://suchuhong.github.io/clipboard-monorepo/)
- [Storybook](https://suchuhong.github.io/clipboard-monorepo/storybook/)
- [npm 包](https://www.npmjs.com/package/@such/react-clipboard-lite)
- [问题反馈](https://github.com/suchuhong/clipboard-monorepo/issues)

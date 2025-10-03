# such-clipboard-monorepo

Monorepo for `@such/react-clipboard-lite` with a Vite demo app and Storybook.

English | [简体中文](./README.zh-CN.md)

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

Install pnpm globally if you haven't:

```bash
npm install -g pnpm
```

## Setup

```bash
pnpm install
```

## Development

```bash
# Run Storybook for the library
pnpm run storybook

# Run the Vite demo app (requires library build or uses source via alias)
cd apps/vite-demo
pnpm install
pnpm run dev

# Watch mode for library development
pnpm --filter @such/react-clipboard-lite run dev
```

## Build & Test

```bash
# Build all packages
pnpm run build

# Run tests (single run)
pnpm test

# Run tests in watch mode
pnpm --filter @such/react-clipboard-lite run test:watch
```

## Code Quality

- **ESLint/Prettier**
  - Lint: `pnpm run lint`
  - Format: `pnpm run format`
  - Check format: `pnpm run check:format`

## Release & Publishing

- **Changesets (版本与发布)**
  - 新建变更集：`pnpm run changeset`（选择包、选择版本 bump、填写说明）
  - 合并到 `main` 后，Workflow 会自动创建 **版本 PR** 或直接 **发布**（需在仓库 Secrets 配置 `NPM_TOKEN`）
  - 手动发布：`pnpm run version-packages && pnpm run release`

- **发布单个包**

  ```bash
  pnpm --filter @such/react-clipboard-lite publish --access public
  ```

## E2E Testing

- **Playwright E2E（示例站）**
  - 本地：
    ```bash
    cd apps/vite-demo
    pnpm install
    npx playwright install
    pnpm run test:e2e
    ```
  - UI 模式：`pnpm run test:e2e:ui`
  - CI：`ci.yml` 的 `e2e` job 自动安装浏览器并运行测试

## Documentation

- 本地文档：`pnpm run docs:dev`（VitePress）
- 构建文档并集成 Storybook：`pnpm run docs:build:with-sb`
- 预览构建：`pnpm run docs:preview`
- 部署：推送到 `main` 触发 `pages.yml`，GitHub Pages 将发布文档；Storybook 可在 `/storybook/` 路径访问

## Commit 规范

使用 **Conventional Commits** 格式，subject 必须小写开头：

- ✅ `feat: add new feature`
- ✅ `fix: resolve clipboard issue`
- ✅ `chore(deps): update dependencies`
- ❌ `feat: Add new feature` (subject 不能大写开头)

已配置 **Commitlint + Husky**：

- `pre-commit` 运行 lint-staged（ESLint + Prettier）
- `commit-msg` 校验提交信息格式

## DocSearch (Algolia)

在仓库 Secrets 或本地环境变量中设置：

- `DOCSEARCH_APP_ID`
- `DOCSEARCH_API_KEY`（Search-Only key）
- `DOCSEARCH_INDEX`

本地运行（带搜索）：

```bash
DOCSEARCH_APP_ID=xxx DOCSEARCH_API_KEY=xxx DOCSEARCH_INDEX=xxx pnpm run docs:dev
```

## PR 预览部署

- 每个 Pull Request 会自动构建并部署 **预览站点**（Docs+Storybook 已集成），Workflow：`.github/workflows/pages-preview.yml`
- 合并到 `main` 后，正式站点由 `.github/workflows/pages.yml` 发布到 GitHub Pages

## Project Structure

```
such-clipboard-monorepo/
├── packages/
│   └── react-clipboard-lite/    # Core library
│       ├── src/                  # Source code
│       ├── tests/                # Unit tests
│       └── stories/              # Storybook stories
├── apps/
│   └── vite-demo/                # Demo application
├── docs/                         # VitePress documentation
├── .github/workflows/            # CI/CD pipelines
├── pnpm-workspace.yaml           # pnpm workspace config
└── eslint.config.js              # ESLint flat config (v9)
```

## Technology Stack

- **Package Manager**: pnpm
- **Build Tool**: tsup (library), Vite (demo)
- **Testing**: Vitest + Testing Library
- **E2E**: Playwright
- **Linting**: ESLint 9 (flat config)
- **Formatting**: Prettier
- **Documentation**: VitePress + Storybook
- **CI/CD**: GitHub Actions

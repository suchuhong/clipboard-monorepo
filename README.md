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

查看 [发布指南](./PUBLISHING.md) 了解如何发布到 npm。

**首次配置**：

1. 更新 `.changeset/config.json` 中的仓库名称（如果需要 GitHub 链接）
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

## Links

- [GitHub Repository](https://github.com/suchuhong/clipboard-monorepo)
- [Documentation](https://suchuhong.github.io/clipboard-monorepo/)
- [Storybook](https://suchuhong.github.io/clipboard-monorepo/storybook/)
- [npm Package](https://www.npmjs.com/package/@such/react-clipboard-lite)
- [Issues](https://github.com/suchuhong/clipboard-monorepo/issues)

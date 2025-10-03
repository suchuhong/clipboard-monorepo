# such-clipboard-monorepo

[![CI](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/ci.yml)
[![Pages](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/pages.yml/badge.svg)](https://github.com/suchuhong/clipboard-monorepo/actions/workflows/pages.yml)
[![npm version](https://img.shields.io/npm/v/@such12138/react-clipboard-lite.svg)](https://www.npmjs.com/package/@such12138/react-clipboard-lite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Monorepo for `@such12138/react-clipboard-lite` - a lightweight React clipboard library with components and hooks.

English | [简体中文](./README.zh-CN.md)

## 📦 What's Inside

- **[@such12138/react-clipboard-lite](./packages/react-clipboard-lite)** - Core library with React components and hooks
- **[vite-demo](./apps/vite-demo)** - Demo application showcasing all features
- **[Documentation](https://suchuhong.github.io/clipboard-monorepo/)** - Full documentation site built with VitePress
- **[Storybook](https://suchuhong.github.io/clipboard-monorepo/storybook/)** - Interactive component examples

## ✨ Features

- 🚀 Modern Clipboard API with automatic fallbacks
- 📦 Tiny bundle size, zero dependencies
- 🎯 TypeScript support with full type definitions
- ♿ Accessible and user-friendly
- 🧪 Fully tested with Vitest + Testing Library + Playwright
- 📖 Comprehensive documentation and examples

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
pnpm --filter @such12138/react-clipboard-lite run dev
```

## Build & Test

```bash
# Build all packages
pnpm run build

# Run tests (single run)
pnpm test

# Run tests in watch mode
pnpm --filter @such12138/react-clipboard-lite run test:watch
```

## Code Quality

- **ESLint/Prettier**
  - Lint: `pnpm run lint`
  - Format: `pnpm run format`
  - Check format: `pnpm run check:format`

## Release & Publishing

See [Quick Start Guide](./docs/guides/QUICK_START.md) for 3-step publishing or [Publishing Guide](./docs/guides/PUBLISHING.md) for detailed instructions.

**Quick Publish**:

```bash
# 1. Create changeset
pnpm run changeset

# 2. Commit and push
git add . && git commit -m "chore: add changeset" && git push

# 3. Merge auto-created PR (GitHub Actions will publish automatically)
```

**Manual Publish**:

```bash
pnpm run build
pnpm run changeset
pnpm run version-packages
pnpm run release
```

Detailed docs: [Publishing Guide](./docs/publishing.md)

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

### 📚 Online Documentation

- **Documentation Site**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/
- **API Reference**: https://suchuhong.github.io/clipboard-monorepo/api

### 🛠️ Local Development

```bash
# Start documentation dev server
pnpm run docs:dev

# Build documentation with Storybook
pnpm run docs:build:with-sb

# Preview built documentation
pnpm run docs:preview
```

### 🚀 GitHub Pages Deployment

Documentation is automatically deployed to GitHub Pages when code is pushed to `main` branch.

**Setup GitHub Pages** (first time only):

1. Go to [Repository Settings → Pages](https://github.com/suchuhong/clipboard-monorepo/settings/pages)
2. Set **Source** to `GitHub Actions`
3. Set **Workflow permissions** to `Read and write permissions` in [Actions Settings](https://github.com/suchuhong/clipboard-monorepo/settings/actions)

See [GitHub Pages Setup Guide](./docs/guides/GITHUB_PAGES_SETUP.md) for detailed setup instructions.

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

## 📚 Documentation

### Quick Links

- [Quick Start](./docs/guides/QUICK_START.md) - Get started in 3 steps
- [All Guides](./docs/guides/README.md) - Complete guides index
- [Documentation Structure](./docs/DOCUMENTATION.md) - How documentation is organized

### Main Guides

- [Publishing Guide](./docs/guides/PUBLISHING.md) - Quick guide to publish to npm
- [Contributing Guide](./docs/guides/CONTRIBUTING.md) - How to contribute to this project
- [Project Overview](./docs/guides/PROJECT_OVERVIEW.md) - Complete project overview

### Setup & Configuration

- [GitHub Pages Setup](./docs/guides/GITHUB_PAGES_SETUP.md) - Setup GitHub Pages deployment
- [npm Setup](./docs/guides/NPM_SETUP.md) - npm configuration guide

### Detailed Documentation

- [API Reference](./docs/api.md) - Complete API reference
- [Usage Guide](./docs/guide.md) - Detailed usage guide
- [Publishing Documentation](./docs/publishing.md) - Complete publishing documentation

## 🔗 Links

- **GitHub Repository**: https://github.com/suchuhong/clipboard-monorepo
- **Documentation**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/
- **npm Package**: https://www.npmjs.com/package/@such12138/react-clipboard-lite
- **Issues**: https://github.com/suchuhong/clipboard-monorepo/issues

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/guides/CONTRIBUTING.md) for details on:

- Development workflow
- Commit message conventions
- Pull request process
- Code style guidelines

## 📄 License

MIT © [suchuhong](https://github.com/suchuhong)

## 🙏 Acknowledgments

Built with:

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [VitePress](https://vitepress.dev/) - Documentation
- [Storybook](https://storybook.js.org/) - Component development
- [Vitest](https://vitest.dev/) - Unit testing
- [Playwright](https://playwright.dev/) - E2E testing
- [pnpm](https://pnpm.io/) - Package manager

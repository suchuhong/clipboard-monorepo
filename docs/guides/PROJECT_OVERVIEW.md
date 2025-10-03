# 📖 Project Overview

Complete overview of the `such-clipboard-monorepo` project structure, workflows, and features.

## 🎯 Project Goals

Create a lightweight, well-tested, and fully documented React clipboard library with:

- Modern API support with fallbacks
- Zero dependencies
- Full TypeScript support
- Comprehensive documentation
- Interactive examples

## 📦 Packages

### @such12138/react-clipboard-lite

**Location**: `packages/react-clipboard-lite/`

**Description**: Core library providing React components and hooks for clipboard operations.

**Exports**:

- `<CopyButton>` - Button component with copy functionality
- `<CopyOnClick>` - Wrapper component for click-to-copy
- `useClipboard()` - Hook for programmatic clipboard access

**Key Files**:

- `src/CopyButton.tsx` - CopyButton component
- `src/CopyOnClick.tsx` - CopyOnClick component
- `src/useClipboard.ts` - useClipboard hook
- `src/index.tsx` - Main export file
- `tests/` - Unit tests with Vitest
- `stories/` - Storybook stories

**Build Output**:

- `dist/index.cjs` - CommonJS format
- `dist/index.mjs` - ES Module format
- `dist/index.d.ts` - TypeScript definitions

## 🎨 Applications

### vite-demo

**Location**: `apps/vite-demo/`

**Description**: Demo application showcasing all library features.

**Features**:

- Live examples of all components
- Interactive playground
- E2E tests with Playwright

**Key Files**:

- `src/App.tsx` - Main demo application
- `tests/copy.spec.ts` - Playwright E2E tests

## 📚 Documentation

### VitePress Site

**Location**: `docs/`

**URL**: https://suchuhong.github.io/clipboard-monorepo/

**Pages**:

- `index.md` - Home page with quick start
- `guide.md` - Usage guide and examples
- `api.md` - Complete API reference
- `publishing.md` - Publishing guide
- `github-pages-setup.md` - GitHub Pages setup

**Configuration**: `docs/.vitepress/config.ts`

### Storybook

**URL**: https://suchuhong.github.io/clipboard-monorepo/storybook/

**Stories**:

- CopyButton examples
- CopyOnClick examples
- Interactive component playground

## 🔄 Workflows

### CI Workflow (`.github/workflows/ci.yml`)

**Triggers**: Push to main/master, Pull Requests

**Jobs**:

1. **build-test**: Build and test all packages
2. **storybook**: Build Storybook
3. **e2e**: Run Playwright E2E tests

### Pages Workflow (`.github/workflows/pages.yml`)

**Triggers**: Push to main

**Purpose**: Deploy documentation and Storybook to GitHub Pages

**Steps**:

1. Build Storybook
2. Build VitePress documentation
3. Merge Storybook into docs
4. Deploy to GitHub Pages

### Pages Preview Workflow (`.github/workflows/pages-preview.yml`)

**Triggers**: Pull Requests

**Purpose**: Deploy preview of documentation for PRs

### Release Workflow (`.github/workflows/release.yml`)

**Triggers**: Push to main

**Purpose**: Automated package versioning and publishing

**Steps**:

1. Detect changesets
2. Create version PR or publish
3. Update CHANGELOG
4. Publish to npm

## 🛠️ Development Tools

### Package Manager

**pnpm** - Fast, disk space efficient package manager

**Workspace Configuration**: `pnpm-workspace.yaml`

### Build Tools

- **tsup** - Library bundler (TypeScript → JS + types)
- **Vite** - Demo app bundler
- **VitePress** - Documentation site generator
- **Storybook** - Component development environment

### Testing

- **Vitest** - Unit testing framework
- **Testing Library** - React component testing utilities
- **Playwright** - E2E testing framework

### Code Quality

- **ESLint 9** - Linting (flat config)
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Commitlint** - Commit message validation
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

### Version Management

- **Changesets** - Version management and changelog generation
- **@changesets/changelog-github** - GitHub-flavored changelogs

## 📁 Project Structure

```
such-clipboard-monorepo/
├── .changeset/              # Changesets configuration
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── .husky/                  # Git hooks
├── apps/
│   └── vite-demo/          # Demo application
│       ├── src/
│       ├── tests/          # E2E tests
│       └── package.json
├── docs/                    # VitePress documentation
│   ├── .vitepress/
│   ├── index.md
│   ├── guide.md
│   └── api.md
├── packages/
│   └── react-clipboard-lite/  # Core library
│       ├── src/
│       ├── tests/
│       ├── stories/
│       └── package.json
├── scripts/
│   └── merge-storybook-into-docs.mjs
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── package.json             # Root package.json
├── pnpm-workspace.yaml      # pnpm workspace config
├── tsconfig.base.json       # Base TypeScript config
├── README.md                # English README
├── README.zh-CN.md          # Chinese README
├── CONTRIBUTING.md          # Contributing guide
├── PUBLISHING.md            # Quick publish guide
├── PRE_PUBLISH_CHECKLIST.md # Pre-publish checklist
└── GITHUB_PAGES_SETUP.md    # GitHub Pages setup
```

## 🚀 Key Features

### 1. Monorepo Architecture

- Single repository for library, demo, and docs
- Shared dependencies and tooling
- Consistent code quality across packages

### 2. Automated Workflows

- **CI/CD**: Automated testing and deployment
- **Version Management**: Changesets for semantic versioning
- **Documentation**: Auto-deploy to GitHub Pages
- **Publishing**: Automated npm publishing

### 3. Developer Experience

- **Fast**: pnpm for efficient package management
- **Type-Safe**: Full TypeScript support
- **Tested**: Comprehensive test coverage
- **Documented**: Extensive documentation and examples

### 4. Quality Assurance

- **Linting**: ESLint with strict rules
- **Formatting**: Prettier for consistent code style
- **Testing**: Unit tests + E2E tests
- **Commit Conventions**: Enforced commit message format

## 🔧 Configuration Files

### Root Level

- `package.json` - Root package with scripts and dev dependencies
- `pnpm-workspace.yaml` - Workspace configuration
- `tsconfig.base.json` - Shared TypeScript configuration
- `eslint.config.js` - ESLint flat configuration
- `.prettierrc.json` - Prettier configuration
- `commitlint.config.cjs` - Commitlint configuration

### Package Level

- `packages/react-clipboard-lite/package.json` - Library package config
- `packages/react-clipboard-lite/tsconfig.json` - Library TypeScript config
- `packages/react-clipboard-lite/vitest.config.ts` - Vitest configuration
- `apps/vite-demo/vite.config.ts` - Vite configuration
- `apps/vite-demo/playwright.config.ts` - Playwright configuration

## 📊 Metrics

### Bundle Size

- **Library**: ~2KB gzipped
- **Zero dependencies**
- **Tree-shakeable**

### Test Coverage

- **Unit Tests**: All components and hooks
- **E2E Tests**: Complete user workflows
- **Browser Testing**: Chromium, Firefox, WebKit

### Documentation

- **API Reference**: Complete
- **Usage Examples**: Comprehensive
- **Interactive Demos**: Storybook
- **Guides**: Step-by-step tutorials

## 🎓 Learning Resources

### For Contributors

1. [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
2. [docs/publishing.md](./docs/publishing.md) - Publishing guide
3. [PRE_PUBLISH_CHECKLIST.md](./PRE_PUBLISH_CHECKLIST.md) - Pre-publish checklist

### For Users

1. [Documentation Site](https://suchuhong.github.io/clipboard-monorepo/) - Full docs
2. [Storybook](https://suchuhong.github.io/clipboard-monorepo/storybook/) - Interactive examples
3. [Demo App](https://suchuhong.github.io/clipboard-monorepo/) - Live demo

## 🔮 Future Enhancements

Potential improvements and features:

- [ ] Image clipboard support
- [ ] Rich text clipboard support
- [ ] Clipboard history
- [ ] More customization options
- [ ] Additional components
- [ ] Performance optimizations
- [ ] Accessibility improvements

## 📞 Support

- **Issues**: https://github.com/suchuhong/clipboard-monorepo/issues
- **Discussions**: https://github.com/suchuhong/clipboard-monorepo/discussions
- **Documentation**: https://suchuhong.github.io/clipboard-monorepo/

## 📄 License

MIT © [suchuhong](https://github.com/suchuhong)

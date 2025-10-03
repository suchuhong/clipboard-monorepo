# such-clipboard-monorepo

Monorepo for `@such/react-clipboard-lite` with a Vite demo app and Storybook.

## Setup

```bash
pnpm i
```

## Develop

```bash
# Run Storybook for the library
pnpm run storybook

# Run the Vite demo app
cd apps/vite-demo
pnpm run dev
```

## Build & Test

```bash
pnpm run build
pnpm test
```

## Publish the package

```bash
pnpm -w @such/react-clipboard-lite publish --access public
```

## Quality & Release Tooling

- **ESLint/Prettier**
  - Lint: `npm run lint`
  - Format: `npm run format` / Check: `npm run check:format`

- **Changesets (版本与发布)**
  - 新建变更集：`npm run changeset`（选择包、选择版本 bump、填写说明）
  - 合并到 `main` 后，Workflow 会自动创建 **版本 PR** 或直接 **发布**（需在仓库 Secrets 配置 `NPM_TOKEN`）
  - 手动发布：`npm run version-packages && npm run release`

- **Playwright E2E（示例站）**
  - 本地：
    ```bash
    cd apps/vite-demo
    npm i
    npx playwright install
    npm run test:e2e
    ```
  - CI：`ci.yml` 的 `e2e` job 自动安装浏览器并运行测试

## Docs & Storybook

- 本地文档：`npm run docs:dev`（VitePress）
- 构建文档并集成 Storybook：`npm run docs:build:with-sb`
- 部署：推送到 `main` 触发 `pages.yml`，GitHub Pages 将发布文档；Storybook 可在 `/storybook/` 路径访问。

## Commit 规范

- 使用 **Conventional Commits**（如 `feat: ...`、`fix: ...`）
- 已配置 **Commitlint + Husky**：
  - `pre-commit` 运行 lint-staged（ESLint + Prettier）
  - `commit-msg` 校验提交信息

## DocSearch (Algolia)

在仓库 Secrets 或本地环境变量中设置：

- `DOCSEARCH_APP_ID`
- `DOCSEARCH_API_KEY`（Search-Only key）
- `DOCSEARCH_INDEX`

本地运行（带搜索）：

```bash
DOCSEARCH_APP_ID=xxx DOCSEARCH_API_KEY=xxx DOCSEARCH_INDEX=xxx npm run docs:dev
```

## PR 预览部署

- 每个 Pull Request 会自动构建并部署 **预览站点**（Docs+Storybook 已集成），Workflow：`.github/workflows/pages-preview.yml`
- 合并到 `main` 后，正式站点由 `.github/workflows/pages.yml` 发布到 GitHub Pages。

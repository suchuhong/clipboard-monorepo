# 📋 发布前检查清单

在发布到 npm 之前，请确认以下所有项目：

## ✅ 代码质量

- [ ] 所有测试通过：`pnpm test`
- [ ] 代码检查通过：`pnpm run lint`
- [ ] 代码已格式化：`pnpm run format`
- [ ] 构建成功：`pnpm run build`

## ✅ 包配置

- [ ] `package.json` 包含正确的元数据
  - [ ] name: `@such/react-clipboard-lite`
  - [ ] version: 遵循语义化版本
  - [ ] description: 清晰的描述
  - [ ] keywords: 相关关键词
  - [ ] author: 作者信息
  - [ ] license: MIT
  - [ ] repository: GitHub 仓库链接
  - [ ] homepage: 文档站点链接
  - [ ] bugs: Issues 链接

- [ ] 导出配置正确
  - [ ] main: `dist/index.cjs`
  - [ ] module: `dist/index.mjs`
  - [ ] types: `dist/index.d.ts`
  - [ ] exports: 正确配置

- [ ] files 字段包含必要文件
  - [ ] dist/
  - [ ] README.md

## ✅ 文档

- [ ] README.md 完整且准确
  - [ ] 安装说明
  - [ ] 使用示例
  - [ ] API 文档
  - [ ] 浏览器支持
  - [ ] 许可证信息

- [ ] CHANGELOG.md 已更新（通过 changesets）

- [ ] 文档站点可访问
  - [ ] https://suchuhong.github.io/clipboard-monorepo/

## ✅ 构建产物

- [ ] `dist/` 目录存在
- [ ] 包含以下文件：
  - [ ] `index.cjs` - CommonJS 格式
  - [ ] `index.mjs` - ES Module 格式
  - [ ] `index.d.ts` - TypeScript 类型定义

验证构建：

```bash
pnpm --filter @such/react-clipboard-lite run build
ls -la packages/react-clipboard-lite/dist/
```

## ✅ npm 配置

- [ ] 已登录 npm：`pnpm login`
- [ ] 验证登录：`npm whoami`
- [ ] 包名未被占用（首次发布）

检查包名：

```bash
npm view @such/react-clipboard-lite
# 如果返回 404，说明包名可用
```

## ✅ Git 状态

- [ ] 所有更改已提交
- [ ] 已推送到 GitHub
- [ ] 在正确的分支（main）

## ✅ Changesets

- [ ] 已创建 changeset：`pnpm run changeset`
- [ ] Changeset 描述清晰
- [ ] 版本类型正确（patch/minor/major）

## 🚀 发布步骤

### 方式 1：自动发布（推荐）

1. 创建 changeset：

   ```bash
   pnpm run changeset
   ```

2. 提交并推送：

   ```bash
   git add .
   git commit -m "chore: add changeset for initial release"
   git push
   ```

3. 等待 GitHub Actions 创建 "Version Packages" PR

4. 审查并合并 PR

5. 自动发布到 npm ✨

### 方式 2：手动发布

1. 构建包：

   ```bash
   pnpm --filter @such/react-clipboard-lite run build
   ```

2. 创建 changeset：

   ```bash
   pnpm run changeset
   ```

3. 更新版本：

   ```bash
   pnpm run version-packages
   ```

4. 提交版本更新：

   ```bash
   git add .
   git commit -m "chore(release): publish packages"
   git push
   ```

5. 发布到 npm：

   ```bash
   pnpm --filter @such/react-clipboard-lite publish --access public
   ```

6. 推送标签：
   ```bash
   git push --follow-tags
   ```

## ✅ 发布后验证

- [ ] 包在 npm 上可见：https://www.npmjs.com/package/@such/react-clipboard-lite
- [ ] 版本号正确
- [ ] README 显示正常
- [ ] 文件列表完整

测试安装：

```bash
mkdir test-install
cd test-install
npm init -y
npm install @such/react-clipboard-lite
```

测试导入：

```javascript
const { CopyButton, CopyOnClick, useClipboard } = require("@such/react-clipboard-lite");
console.log("Import successful!", { CopyButton, CopyOnClick, useClipboard });
```

## 📝 首次发布注意事项

首次发布 scoped 包（`@such/xxx`）需要：

1. 使用 `--access public` 标志：

   ```bash
   pnpm --filter @such/react-clipboard-lite publish --access public
   ```

2. 或在 package.json 中设置：
   ```json
   {
     "publishConfig": {
       "access": "public"
     }
   }
   ```

## 🆘 遇到问题？

查看 [发布指南](./docs/publishing.md) 了解详细说明和故障排除。

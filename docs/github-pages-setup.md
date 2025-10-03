# GitHub Pages 配置指南

本指南介绍如何为项目启用 GitHub Pages，以便自动部署文档和 Storybook。

## 启用 GitHub Pages

### 步骤 1：访问仓库设置

1. 打开 GitHub 仓库：https://github.com/suchuhong/clipboard-monorepo
2. 点击 **Settings**（设置）标签
3. 在左侧菜单中找到 **Pages**

### 步骤 2：配置 Pages 源

在 "Build and deployment" 部分：

1. **Source**（源）：选择 **GitHub Actions**
2. 不需要选择分支，因为我们使用 Actions 部署

![GitHub Pages Settings](https://docs.github.com/assets/cb-49851/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### 步骤 3：保存配置

配置会自动保存。现在 GitHub Actions 可以部署到 Pages 了。

## 验证配置

### 1. 检查 Workflow 权限

确保 GitHub Actions 有部署权限：

1. 进入 **Settings** → **Actions** → **General**
2. 滚动到 "Workflow permissions"
3. 选择 **Read and write permissions**
4. 勾选 **Allow GitHub Actions to create and approve pull requests**
5. 点击 **Save**

### 2. 重新运行 Workflow

1. 进入 **Actions** 标签
2. 选择失败的 workflow run
3. 点击 **Re-run all jobs**

## 访问部署的站点

配置完成后，站点将部署到：

- **文档**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/

## 自动部署流程

### 生产部署（main 分支）

当代码推送到 `main` 分支时：

1. `.github/workflows/pages.yml` 自动触发
2. 构建文档和 Storybook
3. 部署到 GitHub Pages

### PR 预览部署

当创建 Pull Request 时：

1. `.github/workflows/pages-preview.yml` 自动触发
2. 构建预览版本
3. 部署到临时 URL（如果配置了）

## 常见问题

### 1. 404 错误：Not Found

**原因**：GitHub Pages 未启用

**解决**：按照上述步骤启用 GitHub Pages

### 2. 403 错误：Forbidden

**原因**：Workflow 没有部署权限

**解决**：

1. Settings → Actions → General
2. 设置 "Workflow permissions" 为 "Read and write permissions"

### 3. 部署成功但页面空白

**原因**：base URL 配置错误

**解决**：检查 `docs/.vitepress/config.ts` 中的 `base` 配置：

```typescript
export default defineConfig({
  base: "/clipboard-monorepo/", // 必须匹配仓库名
  // ...
});
```

### 4. Storybook 404

**原因**：Storybook 文件未正确复制

**解决**：检查 `scripts/merge-storybook-into-docs.mjs` 脚本是否正确执行

## 自定义域名（可选）

如果想使用自定义域名：

1. 在仓库根目录创建 `docs/public/CNAME` 文件
2. 内容为你的域名，如：`docs.example.com`
3. 在域名提供商处配置 DNS：
   - 类型：CNAME
   - 名称：docs（或你的子域名）
   - 值：suchuhong.github.io

## 检查部署状态

### 通过 Actions 标签

1. 进入 **Actions** 标签
2. 查看最近的 workflow runs
3. 绿色勾号 ✓ 表示成功
4. 红色叉号 ✗ 表示失败，点击查看详情

### 通过 Deployments

1. 在仓库主页右侧查看 **Deployments**
2. 点击 **github-pages** 查看部署历史
3. 每次部署都会显示 URL 和状态

## 相关文档

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 部署到 Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [VitePress 部署指南](https://vitepress.dev/guide/deploy#github-pages)

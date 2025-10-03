# 🚀 GitHub Pages 快速设置

## 立即启用（3 步）

### 1️⃣ 启用 GitHub Pages

访问：https://github.com/suchuhong/clipboard-monorepo/settings/pages

在 "Build and deployment" 部分：

- **Source**: 选择 `GitHub Actions`

### 2️⃣ 设置 Workflow 权限

访问：https://github.com/suchuhong/clipboard-monorepo/settings/actions

在 "Workflow permissions" 部分：

- ✅ 选择 `Read and write permissions`
- ✅ 勾选 `Allow GitHub Actions to create and approve pull requests`
- 点击 **Save**

### 3️⃣ 重新运行 Workflow

访问：https://github.com/suchuhong/clipboard-monorepo/actions

- 找到失败的 workflow
- 点击 **Re-run all jobs**

## ✅ 完成！

配置完成后，站点将自动部署到：

- 📚 **文档**: https://suchuhong.github.io/clipboard-monorepo/
- 📖 **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/

## 📖 详细文档

查看 [docs/github-pages-setup.md](./docs/github-pages-setup.md) 了解更多配置选项和故障排除。

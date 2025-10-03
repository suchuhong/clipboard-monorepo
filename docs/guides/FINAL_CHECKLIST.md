# ✅ 最终检查清单

在提交和发布之前，请确认以下所有项目：

## 📦 包名更新

- [x] `packages/react-clipboard-lite/package.json` - 包名已更新
- [x] `apps/vite-demo/package.json` - 依赖已更新
- [x] 所有源代码导入已更新
- [x] 所有文档已更新
- [x] GitHub Actions workflows 已更新
- [x] Changesets 文件已更新

## 🔍 验证

运行验证脚本：

```bash
chmod +x scripts/verify-package-name.sh
./scripts/verify-package-name.sh
```

应该显示：

```
✅ 未发现旧包名引用
✅ 发现 XX 处新包名引用
🎉 包名验证通过！
```

## 📝 Lockfile

- [ ] 删除旧的 lockfile：`rm pnpm-lock.yaml`
- [ ] 重新生成：`pnpm install`
- [ ] 验证安装成功

## 🧪 测试

- [ ] 运行测试：`pnpm test`
- [ ] 运行 lint：`pnpm run lint`
- [ ] 构建包：`pnpm --filter @such12138/react-clipboard-lite run build`

## 📚 文档

- [ ] 检查 README.md 中的包名
- [ ] 检查文档站点中的示例
- [ ] 检查 Storybook 中的示例

## 🔐 npm 配置

- [ ] 确认使用官方 npm 注册表：`npm config get registry`
- [ ] 应该显示：`https://registry.npmjs.org/`
- [ ] 确认已登录：`npm whoami`
- [ ] 应该显示你的用户名

## 🚀 准备发布

- [ ] 所有更改已提交
- [ ] 已推送到 GitHub
- [ ] CI 通过（绿色勾号）
- [ ] 文档已部署到 GitHub Pages

## 📦 发布

```bash
# 1. 最后一次构建
pnpm --filter @such12138/react-clipboard-lite run build

# 2. 检查构建产物
ls -la packages/react-clipboard-lite/dist/

# 3. 试运行（不实际发布）
pnpm --filter @such12138/react-clipboard-lite publish --dry-run

# 4. 正式发布
pnpm --filter @such12138/react-clipboard-lite publish --access public
```

## ✅ 发布后验证

- [ ] 访问 npm 页面：https://www.npmjs.com/package/@such12138/react-clipboard-lite
- [ ] 检查版本号正确
- [ ] 检查 README 显示正常
- [ ] 测试安装：
  ```bash
  mkdir test-install
  cd test-install
  npm init -y
  npm install @such12138/react-clipboard-lite
  ```
- [ ] 测试导入：
  ```javascript
  const { CopyButton } = require("@such12138/react-clipboard-lite");
  console.log("Success!", CopyButton);
  ```

## 🎉 完成！

所有检查通过后，你的包就成功发布了！

## 📊 发布信息

- **包名**: @such12138/react-clipboard-lite
- **npm 链接**: https://www.npmjs.com/package/@such12138/react-clipboard-lite
- **文档**: https://suchuhong.github.io/clipboard-monorepo/
- **Storybook**: https://suchuhong.github.io/clipboard-monorepo/storybook/

## 📢 宣传

发布后可以：

- 在 GitHub 创建 Release
- 在社交媒体分享
- 更新项目 README 添加徽章
- 写一篇博客介绍

## 🔄 后续更新

以后更新版本时：

1. 创建 changeset：`pnpm run changeset`
2. 提交并推送
3. 合并 GitHub 自动创建的 PR
4. 自动发布 ✨

## 📚 相关文档

- [PACKAGE_NAME_UPDATE_SUMMARY.md](./PACKAGE_NAME_UPDATE_SUMMARY.md) - 包名更新总结
- [CHANGESET_FIX.md](./CHANGESET_FIX.md) - Changeset 修复指南
- [QUICK_PUBLISH.md](./QUICK_PUBLISH.md) - 快速发布指南
- [PRE_PUBLISH_CHECKLIST.md](./PRE_PUBLISH_CHECKLIST.md) - 发布前检查清单

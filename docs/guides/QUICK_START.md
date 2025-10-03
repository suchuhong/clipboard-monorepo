# 🚀 快速开始

## 立即发布到 npm（3 步）

### 1️⃣ 更新 lockfile

```bash
rm pnpm-lock.yaml
pnpm install
```

### 2️⃣ 提交所有更改

```bash
git add .
git commit -m "chore: update package name and lockfile"
git push
```

### 3️⃣ 发布

```bash
# 构建
pnpm --filter @such12138/react-clipboard-lite run build

# 发布
pnpm --filter @such12138/react-clipboard-lite publish --access public
```

## ✅ 完成！

发布后访问：https://www.npmjs.com/package/@such12138/react-clipboard-lite

## 📚 详细文档

- [FINAL_CHECKLIST.md](./FINAL_CHECKLIST.md) - 完整检查清单
- [QUICK_PUBLISH.md](./QUICK_PUBLISH.md) - 详细发布指南
- [CHANGESET_FIX.md](./CHANGESET_FIX.md) - Changeset 问题修复
- [All Guides](./README.md) - 所有指南索引

## 🔍 验证

运行验证脚本确保一切正常：

```bash
chmod +x scripts/verify-package-name.sh
./scripts/verify-package-name.sh
```

## 💡 提示

- 确保已登录 npm：`npm whoami`
- 确保使用官方源：`npm config get registry`
- 首次发布需要 `--access public`

## 🆘 遇到问题？

- [NPM_SETUP.md](./NPM_SETUP.md) - npm 配置
- [CNPM_FIX.md](./CNPM_FIX.md) - CNPM 问题
- [SCOPE_FIX.md](./SCOPE_FIX.md) - Scope 问题
- [LOCKFILE_UPDATE.md](./LOCKFILE_UPDATE.md) - Lockfile 问题

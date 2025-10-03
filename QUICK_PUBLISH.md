# 🚀 快速发布到 npm

## 立即发布（5 步）

### 1️⃣ 登录 npm

```bash
pnpm login
```

输入你的 npm 用户名、密码和邮箱。

### 2️⃣ 构建包

```bash
pnpm --filter @such/react-clipboard-lite run build
```

### 3️⃣ 创建 changeset

```bash
pnpm run changeset
```

选择：

- 包：`@such/react-clipboard-lite`
- 版本类型：`minor`（首次发布建议用 minor 或 patch）
- 描述：`initial release`

### 4️⃣ 更新版本

```bash
pnpm run version-packages
```

### 5️⃣ 发布

```bash
pnpm --filter @such/react-clipboard-lite publish
```

## ✅ 验证发布

访问：https://www.npmjs.com/package/@such/react-clipboard-lite

测试安装：

```bash
npm install @such/react-clipboard-lite
```

## 🔄 后续发布

使用自动发布流程：

1. 创建 changeset：`pnpm run changeset`
2. 提交并推送：`git add . && git commit -m "chore: add changeset" && git push`
3. 合并 GitHub 自动创建的 PR
4. 自动发布 ✨

## 📋 完整检查清单

查看 [PRE_PUBLISH_CHECKLIST.md](./PRE_PUBLISH_CHECKLIST.md) 了解详细的发布前检查项目。

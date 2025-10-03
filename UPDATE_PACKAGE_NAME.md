# 🔄 更新包名指南

## 当前问题

包名 `@such12138/react-clipboard-lite` 是当前使用的包名。

## 解决方案

使用你的 npm 用户名作为 scope。

## 步骤 1：检查你的 npm 用户名

```bash
npm whoami
```

假设显示：`suchuhong`

## 步骤 2：手动更新包名

### 2.1 更新库的 package.json

编辑 `packages/react-clipboard-lite/package.json`：

```json
{
  "name": "@suchuhong/react-clipboard-lite",  // 改这里
  "version": "0.1.0",
  ...
}
```

### 2.2 更新 demo 的 package.json

编辑 `apps/vite-demo/package.json`：

```json
{
  "dependencies": {
    "@suchuhong/react-clipboard-lite": "workspace:*" // 改这里
  }
}
```

### 2.3 更新 package.json 中的脚本

编辑根目录 `package.json`，将所有 `@such12138/react-clipboard-lite` 替换为新的包名

### 2.4 更新文档

需要更新以下文件中的包名：

- `README.md`
- `README.zh-CN.md`
- `packages/react-clipboard-lite/README.md`
- `docs/index.md`
- `docs/guide.md`
- `docs/api.md`
- `PUBLISHING.md`
- `QUICK_PUBLISH.md`
- `PRE_PUBLISH_CHECKLIST.md`
- `PROJECT_OVERVIEW.md`
- `docs/publishing.md`

使用查找替换：

- 查找：`@such12138/react-clipboard-lite`
- 替换：新的包名（如 `@your-username/react-clipboard-lite`）

## 步骤 3：重新安装依赖

```bash
pnpm install
```

## 步骤 4：构建

```bash
pnpm --filter @suchuhong/react-clipboard-lite run build
```

## 步骤 5：发布

```bash
pnpm --filter @suchuhong/react-clipboard-lite publish --access public
```

## 使用脚本自动更新（推荐）

我们提供了一个脚本来自动更新所有文件：

```bash
# 给脚本添加执行权限
chmod +x scripts/update-package-name.sh

# 运行脚本（替换 suchuhong 为你的用户名）
./scripts/update-package-name.sh suchuhong

# 重新安装依赖
pnpm install

# 检查更改
git diff

# 提交更改
git add .
git commit -m "chore: update package name to @suchuhong/react-clipboard-lite"

# 构建并发布
pnpm --filter @suchuhong/react-clipboard-lite run build
pnpm --filter @suchuhong/react-clipboard-lite publish --access public
```

## 验证

发布成功后：

1. 访问：`https://www.npmjs.com/package/@suchuhong/react-clipboard-lite`
2. 测试安装：
   ```bash
   npm install @suchuhong/react-clipboard-lite
   ```

## 替代方案

如果你确实想使用 `@such` scope：

1. 访问 https://www.npmjs.com/org/create
2. 创建你想要的组织名
3. 然后就可以发布到该组织下

**注意**：创建组织可能需要额外的验证或费用。

## 需要帮助？

查看 [SCOPE_FIX.md](./SCOPE_FIX.md) 了解更多详情。

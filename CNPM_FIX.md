# 🔧 修复 CNPM 注册问题

## 问题

```
Sign up to CNPM
Public registration is not allowed
```

## 原因

你的 npm 配置指向了 CNPM 镜像（`registry.npmmirror.com` 或 `registry.npm.taobao.org`），而 CNPM 不允许公开注册。

## 快速解决（3 步）

### 1️⃣ 切换到官方 npm

```bash
npm config set registry https://registry.npmjs.org/
```

### 2️⃣ 验证配置

```bash
npm config get registry
```

应该显示：`https://registry.npmjs.org/`

### 3️⃣ 登录 npm

```bash
npm login
# 或
pnpm login
```

## 完成！

现在可以发布包了：

```bash
pnpm --filter @such/react-clipboard-lite publish --access public
```

## 详细说明

查看 [NPM_SETUP.md](./NPM_SETUP.md) 了解：

- 完整的配置步骤
- 如何注册 npm 账号
- 如何同时使用镜像和官方源
- 常见问题解决

## 项目配置

项目已包含 `.npmrc` 文件，配置了官方 npm 注册表：

```
registry=https://registry.npmjs.org/
```

这确保项目始终使用官方源进行发布。

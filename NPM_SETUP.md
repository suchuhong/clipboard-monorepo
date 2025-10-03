# 📦 npm 配置指南

## 问题：CNPM 不允许公开注册

如果你看到 "Public registration is not allowed" 错误，说明你的 npm 配置指向了 CNPM 镜像。

## 解决方案

### 1️⃣ 检查当前注册表

```bash
npm config get registry
```

如果显示类似以下内容，说明使用了镜像：

- `https://registry.npmmirror.com/`
- `https://registry.npm.taobao.org/`
- `http://r.cnpmjs.org/`

### 2️⃣ 切换到官方 npm 注册表

```bash
npm config set registry https://registry.npmjs.org/
```

### 3️⃣ 验证配置

```bash
npm config get registry
```

应该显示：`https://registry.npmjs.org/`

### 4️⃣ 登录 npm

```bash
npm login
```

输入：

- **Username**: 你的 npm 用户名
- **Password**: 你的 npm 密码
- **Email**: 你的邮箱

### 5️⃣ 验证登录

```bash
npm whoami
```

应该显示你的 npm 用户名。

## 使用 pnpm

如果使用 pnpm，也需要配置：

### 检查 pnpm 注册表

```bash
pnpm config get registry
```

### 设置 pnpm 注册表

```bash
pnpm config set registry https://registry.npmjs.org/
```

### 登录

```bash
pnpm login
```

## 注册 npm 账号

如果还没有 npm 账号：

1. 访问：https://www.npmjs.com/signup
2. 填写信息注册
3. 验证邮箱
4. 使用 `npm login` 登录

## 发布包

配置完成后，就可以发布了：

```bash
# 使用 npm
npm publish --access public

# 或使用 pnpm
pnpm publish --access public
```

## 保持镜像用于安装

如果想在安装时使用镜像加速，但发布时使用官方源：

### 方法 1：使用 .npmrc 文件

在项目根目录创建 `.npmrc`：

```
registry=https://registry.npmjs.org/
```

这样项目会使用官方源，但全局配置仍可使用镜像。

### 方法 2：临时切换

安装时使用镜像：

```bash
npm install --registry=https://registry.npmmirror.com/
```

发布时使用官方源：

```bash
npm publish --registry=https://registry.npmjs.org/ --access public
```

### 方法 3：使用 nrm 管理注册表

安装 nrm：

```bash
npm install -g nrm
```

查看可用源：

```bash
nrm ls
```

切换到官方源：

```bash
nrm use npm
```

切换到淘宝源：

```bash
nrm use taobao
```

## 常见问题

### 1. 登录失败：401 Unauthorized

**原因**：用户名或密码错误

**解决**：

- 确认用户名和密码正确
- 如果忘记密码，访问 https://www.npmjs.com/forgot 重置

### 2. 发布失败：403 Forbidden

**原因**：没有权限或包名已被占用

**解决**：

- 确认已登录：`npm whoami`
- 检查包名是否可用：`npm view @such/react-clipboard-lite`
- 首次发布 scoped 包需要 `--access public`

### 3. 发布失败：需要 OTP

**原因**：账号启用了两步验证

**解决**：

```bash
npm publish --otp=123456  # 替换为你的 OTP 代码
```

### 4. 网络问题

**原因**：网络连接问题

**解决**：

- 检查网络连接
- 尝试使用代理
- 或临时使用 VPN

## 推荐配置

### 项目级 .npmrc

在项目根目录创建 `.npmrc`：

```
registry=https://registry.npmjs.org/
access=public
```

### 全局配置

```bash
# 设置官方源
npm config set registry https://registry.npmjs.org/

# 或使用淘宝镜像（仅用于安装）
npm config set registry https://registry.npmmirror.com/
```

## 验证配置

运行以下命令验证所有配置：

```bash
# 检查注册表
npm config get registry

# 检查登录状态
npm whoami

# 测试发布（dry-run）
npm publish --dry-run
```

## 快速发布流程

配置完成后，按照以下步骤发布：

```bash
# 1. 确保使用官方源
npm config set registry https://registry.npmjs.org/

# 2. 登录
npm login

# 3. 构建
pnpm --filter @such/react-clipboard-lite run build

# 4. 发布
pnpm --filter @such/react-clipboard-lite publish --access public
```

## 相关链接

- npm 官网：https://www.npmjs.com/
- npm 文档：https://docs.npmjs.com/
- 注册账号：https://www.npmjs.com/signup
- 重置密码：https://www.npmjs.com/forgot

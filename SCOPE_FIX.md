# 🔧 修复 Scope 问题

## 问题

```
404 Not Found - PUT https://registry.npmjs.org/@such%2freact-clipboard-lite
'@your-scope/react-clipboard-lite@0.1.0' is not in this registry.
```

## 原因

npm 的 scoped 包（`@scope/package`）中的 scope 必须是：

- 你的 npm 用户名
- 或你有权限的组织名

`@such` 这个 scope 可能：

1. 不存在
2. 你没有权限使用
3. 需要先创建组织

## 解决方案

### 方案 1：使用你的用户名作为 scope（推荐）

1. **检查你的 npm 用户名**：

   ```bash
   npm whoami
   ```

   假设显示：`suchuhong`

2. **更新包名**：

   编辑 `packages/react-clipboard-lite/package.json`：

   ```json
   {
     "name": "@suchuhong/react-clipboard-lite",
     ...
   }
   ```

3. **发布**：
   ```bash
   pnpm --filter @suchuhong/react-clipboard-lite publish --access public
   ```

### 方案 2：创建 npm 组织

1. **访问 npm 创建组织**：
   https://www.npmjs.com/org/create

2. **创建名为 `such` 的组织**

3. **然后就可以发布到该组织下**

### 方案 3：使用无 scope 的包名

编辑 `packages/react-clipboard-lite/package.json`：

```json
{
  "name": "react-clipboard-lite-such",
  ...
}
```

**注意**：无 scope 的包名更容易被占用。

## 推荐做法

使用你的用户名作为 scope：`@suchuhong/react-clipboard-lite`

**优点**：

- ✅ 不需要创建组织
- ✅ 自动拥有权限
- ✅ 清晰的包归属
- ✅ 避免命名冲突

## 快速修复步骤

1. **检查用户名**：

   ```bash
   npm whoami
   ```

2. **更新包名**（假设用户名是 `suchuhong`）：

   编辑 `packages/react-clipboard-lite/package.json`：

   ```json
   {
     "name": "@suchuhong/react-clipboard-lite",
     "version": "0.1.0",
     ...
   }
   ```

3. **更新所有引用**：
   - `apps/vite-demo/package.json`
   - `README.md`
   - `README.zh-CN.md`
   - 文档中的所有引用

4. **重新构建**：

   ```bash
   pnpm --filter @suchuhong/react-clipboard-lite run build
   ```

5. **发布**：
   ```bash
   pnpm --filter @suchuhong/react-clipboard-lite publish --access public
   ```

## 验证

发布成功后，包将在这里可见：

```
https://www.npmjs.com/package/@suchuhong/react-clipboard-lite
```

用户可以这样安装：

```bash
npm install @suchuhong/react-clipboard-lite
```

## 需要帮助？

如果你确实想使用 `@such` 这个 scope：

1. 访问 https://www.npmjs.com/org/create
2. 创建名为 `such` 的组织
3. 然后就可以发布 `@such/react-clipboard-lite`

**注意**：创建组织可能需要付费（私有包）或验证（公开包）。

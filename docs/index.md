# @such/react-clipboard-lite

Lightweight React components and hooks for clipboard operations with modern API support.

## Features

- 🚀 Modern Clipboard API with automatic fallbacks
- 📦 Tiny bundle size, zero dependencies
- 🎯 TypeScript support with full type definitions
- ♿ Accessible and user-friendly
- 🧪 Fully tested with Vitest + Testing Library
- 📖 Interactive examples in Storybook

## Quick Start

```bash
npm install @such/react-clipboard-lite
# or
pnpm add @such/react-clipboard-lite
# or
yarn add @such/react-clipboard-lite
```

## Components

### CopyButton

A button component that copies text to clipboard with visual feedback.

```tsx
import { CopyButton } from "@such/react-clipboard-lite";

<CopyButton text="npm install @such/react-clipboard-lite">Copy Install Command</CopyButton>;
```

### CopyOnClick

A wrapper component that copies text when clicked.

```tsx
import { CopyOnClick } from "@such/react-clipboard-lite";

<CopyOnClick text="Hello World">
  <code>Click to copy</code>
</CopyOnClick>;
```

### useClipboard Hook

A React hook for programmatic clipboard operations.

```tsx
import { useClipboard } from "@such/react-clipboard-lite";

function MyComponent() {
  const { copy, isCopying, error } = useClipboard();

  return <button onClick={() => copy("Hello!")}>{isCopying ? "Copying..." : "Copy"}</button>;
}
```

Get started → [Guide](/guide) | [API Reference](/api)

# @such12138/react-clipboard-lite

Lightweight React components and hooks for clipboard operations with modern API support.

[![npm version](https://img.shields.io/npm/v/@such12138/react-clipboard-lite.svg)](https://www.npmjs.com/package/@such12138/react-clipboard-lite)
[![npm downloads](https://img.shields.io/npm/dm/@such12138/react-clipboard-lite.svg)](https://www.npmjs.com/package/@such12138/react-clipboard-lite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 Modern Clipboard API with automatic fallbacks
- 📦 Tiny bundle size, zero dependencies
- 🎯 TypeScript support with full type definitions
- ♿ Accessible and user-friendly
- 🧪 Fully tested with Vitest + Testing Library

## Installation

```bash
npm install @such12138/react-clipboard-lite
# or
pnpm add @such12138/react-clipboard-lite
# or
yarn add @such12138/react-clipboard-lite
```

## Quick Start

### CopyButton Component

```tsx
import { CopyButton } from "@such12138/react-clipboard-lite";

function App() {
  return <CopyButton text="Hello, World!">Copy Text</CopyButton>;
}
```

### CopyOnClick Component

```tsx
import { CopyOnClick } from "@such12138/react-clipboard-lite";

function App() {
  return (
    <CopyOnClick text="Click to copy this">
      <code>Some code here</code>
    </CopyOnClick>
  );
}
```

### useClipboard Hook

```tsx
import { useClipboard } from "@such12138/react-clipboard-lite";

function App() {
  const { copy, isCopying, error } = useClipboard();

  return (
    <button onClick={() => copy("Hello!")} disabled={isCopying}>
      {isCopying ? "Copying..." : "Copy"}
    </button>
  );
}
```

## API

### CopyButton

| Prop       | Type         | Required | Default  | Description         |
| ---------- | ------------ | -------- | -------- | ------------------- |
| `text`     | `string`     | ✅       | -        | Text to copy        |
| `children` | `ReactNode`  | ❌       | `"Copy"` | Button content      |
| `onCopied` | `() => void` | ❌       | -        | Callback after copy |

### CopyOnClick

| Prop       | Type        | Required | Description     |
| ---------- | ----------- | -------- | --------------- |
| `text`     | `string`    | ✅       | Text to copy    |
| `children` | `ReactNode` | ✅       | Element to wrap |

### useClipboard

**Options:**

- `timeout` (number, default: 2000): Duration to show copying state

**Returns:**

- `copy(text: string)`: Function to copy text
- `isCopying` (boolean): Copy operation status
- `error` (Error | null): Any error occurred

## Browser Support

- Chrome/Edge 66+
- Firefox 63+
- Safari 13.1+
- Opera 53+

Requires secure context (HTTPS or localhost).

For older [browsers](https://silksong.fun/), ensure your [app](https://chiikawapuzzle.space/) has appropriate polyfills or fallbacks.

## Documentation

- [Full Documentation](https://suchuhong.github.io/clipboard-monorepo/)
- [API Reference](https://suchuhong.github.io/clipboard-monorepo/api)
- [Storybook Examples](https://suchuhong.github.io/clipboard-monorepo/storybook/)

## License

MIT © [suchuhong](https://github.com/suchuhong)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/suchuhong/clipboard-monorepo/blob/main/CONTRIBUTING.md).

## Issues

Found a bug or have a feature request? [Open an issue](https://github.com/suchuhong/clipboard-monorepo/issues).

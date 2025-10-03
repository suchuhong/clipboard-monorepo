# Guide

## Installation

```bash
npm install @such/react-clipboard-lite
# or
pnpm add @such/react-clipboard-lite
# or
yarn add @such/react-clipboard-lite
```

## Basic Usage

### Import Components

```tsx
import { CopyButton, CopyOnClick, useClipboard } from "@such/react-clipboard-lite";
```

### CopyButton Component

The `CopyButton` component renders a button that copies text to the clipboard.

```tsx
function App() {
  return (
    <CopyButton
      text="npm install @such/react-clipboard-lite"
      onCopied={() => console.log("Copied!")}
    >
      Copy Command
    </CopyButton>
  );
}
```

**Props:**

- `text` (string, required): The text to copy
- `children` (ReactNode, optional): Button content (default: "Copy")
- `onCopied` (function, optional): Callback fired after successful copy

### CopyOnClick Component

Wraps any element and copies text when clicked.

```tsx
function App() {
  return (
    <CopyOnClick text="Hello, World!">
      <code style={{ cursor: "pointer" }}>Click me to copy</code>
    </CopyOnClick>
  );
}
```

**Props:**

- `text` (string, required): The text to copy
- `children` (ReactNode, required): The element to wrap

### useClipboard Hook

For more control, use the `useClipboard` hook.

```tsx
function App() {
  const { copy, isCopying, error } = useClipboard({ timeout: 2000 });
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)} disabled={isCopying}>
        {isCopying ? "Copying..." : "Copy"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
```

**Returns:**

- `copy(text: string)`: Function to copy text
- `isCopying` (boolean): Whether a copy operation is in progress
- `error` (Error | null): Any error that occurred

**Options:**

- `timeout` (number, default: 2000): How long to show "copying" state (ms)

## TypeScript Support

All components and hooks are fully typed:

```tsx
import type {
  CopyButtonProps,
  CopyOnClickProps,
  UseClipboardOptions,
} from "@such/react-clipboard-lite";
```

## Browser Support

Works in all modern browsers that support the Clipboard API:

- Chrome/Edge 66+
- Firefox 63+
- Safari 13.1+

For older browsers, ensure your app has appropriate polyfills or fallbacks.

## Examples

Check out the [Storybook](/storybook/) for interactive examples and the [demo app](https://github.com/your-repo/apps/vite-demo) for a complete implementation.

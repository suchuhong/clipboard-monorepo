# API Reference

## Components

### CopyButton

A button component that copies text to clipboard with visual feedback.

```tsx
<CopyButton text="text to copy" onCopied={() => console.log("Copied!")}>
  Copy Text
</CopyButton>
```

**Props:**

| Prop       | Type         | Required | Default  | Description                          |
| ---------- | ------------ | -------- | -------- | ------------------------------------ |
| `text`     | `string`     | ✅       | -        | The text to copy to clipboard        |
| `children` | `ReactNode`  | ❌       | `"Copy"` | Button content                       |
| `onCopied` | `() => void` | ❌       | -        | Callback fired after successful copy |

**Behavior:**

- Shows "Copied!" for 2 seconds after successful copy
- Handles errors gracefully with console logging
- Uses native `navigator.clipboard.writeText()`

---

### CopyOnClick

A wrapper component that copies text when the wrapped element is clicked.

```tsx
<CopyOnClick text="text to copy">
  <code>Click to copy</code>
</CopyOnClick>
```

**Props:**

| Prop       | Type        | Required | Description                                      |
| ---------- | ----------- | -------- | ------------------------------------------------ |
| `text`     | `string`    | ✅       | The text to copy to clipboard                    |
| `children` | `ReactNode` | ✅       | The element to wrap (will receive click handler) |

**Behavior:**

- Adds click handler to wrapped element
- Shows "✓ Copied" indicator for 2 seconds
- Sets cursor to pointer
- Adds title attribute with copy hint

---

## Hooks

### useClipboard

A React hook for programmatic clipboard operations.

```tsx
const { copy, isCopying, error } = useClipboard({ timeout: 2000 });
```

**Options:**

| Option    | Type     | Default | Description                            |
| --------- | -------- | ------- | -------------------------------------- |
| `timeout` | `number` | `2000`  | Duration (ms) to keep `isCopying` true |

**Returns:**

| Property    | Type                              | Description                             |
| ----------- | --------------------------------- | --------------------------------------- |
| `copy`      | `(text: string) => Promise<void>` | Function to copy text to clipboard      |
| `isCopying` | `boolean`                         | Whether a copy operation is in progress |
| `error`     | `Error \| null`                   | Any error that occurred during copy     |

**Example:**

```tsx
function MyComponent() {
  const { copy, isCopying, error } = useClipboard();

  const handleCopy = async () => {
    await copy("Hello, World!");
  };

  return (
    <div>
      <button onClick={handleCopy} disabled={isCopying}>
        {isCopying ? "Copying..." : "Copy"}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
}
```

---

## TypeScript Types

### CopyButtonProps

```tsx
interface CopyButtonProps {
  text: string;
  children?: ReactNode;
  onCopied?: () => void;
}
```

### CopyOnClickProps

```tsx
interface CopyOnClickProps {
  text: string;
  children: ReactNode;
}
```

### UseClipboardOptions

```tsx
interface UseClipboardOptions {
  timeout?: number;
}
```

---

## Browser Compatibility

All components and hooks use the modern Clipboard API (`navigator.clipboard`):

- ✅ Chrome/Edge 66+
- ✅ Firefox 63+
- ✅ Safari 13.1+
- ✅ Opera 53+

**Note:** The [Clipboard](https://silksong.fun/) API requires a [secure](https://chiikawapuzzle.space/) context (HTTPS or localhost).

---

> 📚 View interactive examples in **[Storybook](/storybook/)**.

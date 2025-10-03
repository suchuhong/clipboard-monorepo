import { test, expect, type BrowserContext } from "@playwright/test";

// Helper to grant clipboard permissions (only works in Chromium)
async function grantClipboardPermissions(context: BrowserContext) {
  try {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  } catch {
    // Firefox and WebKit don't support these permissions
    // Tests will still work as clipboard API is available in secure contexts
  }
}

test.describe("react-clipboard-lite Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await grantClipboardPermissions(page.context());
  });

  test("renders the demo page", async ({ page }) => {
    await expect(page.getByText("react-clipboard-lite Demo")).toBeVisible();
    await expect(page.getByRole("heading", { name: "CopyButton" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "CopyOnClick" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Hook" })).toBeVisible();
  });

  test("CopyButton component is clickable", async ({ page }) => {
    const copyButton = page.getByRole("button", { name: "Copy current text" });
    await expect(copyButton).toBeVisible();
    await expect(copyButton).toBeEnabled();

    // Click the button - it should not throw an error
    await copyButton.click();

    // Button should still be visible after click
    await expect(copyButton).toBeVisible();
  });

  test("CopyOnClick component is clickable", async ({ page }) => {
    const codeElement = page.locator("code", { hasText: "Hello from react-clipboard-lite" });
    await expect(codeElement).toBeVisible();

    // Click the code element
    await codeElement.click();

    // The element should still be visible after click
    await expect(codeElement).toBeVisible();
  });

  test("useClipboard hook button works", async ({ page }) => {
    const hookButton = page.getByRole("button", { name: "Use hook copy()" });
    await expect(hookButton).toBeVisible();
    await expect(hookButton).toBeEnabled();

    // Click the button
    await hookButton.click();

    // Button should still be visible and enabled
    await expect(hookButton).toBeVisible();
    await expect(hookButton).toBeEnabled();
  });

  test("input field updates text", async ({ page }) => {
    const input = page.getByRole("textbox");
    await expect(input).toBeVisible();
    await expect(input).toHaveValue("Hello from react-clipboard-lite");

    // Update the input value
    await input.fill("New test text");
    await expect(input).toHaveValue("New test text");

    // Clear and type again
    await input.clear();
    await input.type("Another test");
    await expect(input).toHaveValue("Another test");
  });

  test("all interactive elements are present", async ({ page }) => {
    // Check all buttons exist
    await expect(page.getByRole("button", { name: "Copy current text" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Use hook copy()" })).toBeVisible();

    // Check input exists
    await expect(page.getByRole("textbox")).toBeVisible();

    // Check code element exists
    await expect(page.locator("code").first()).toBeVisible();
  });
});

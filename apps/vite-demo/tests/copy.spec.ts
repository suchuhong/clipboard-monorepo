import { test, expect } from "@playwright/test";

test.describe("react-clipboard-lite Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the demo page", async ({ page }) => {
    await expect(page.getByText("react-clipboard-lite Demo")).toBeVisible();
    await expect(page.getByRole("heading", { name: "CopyButton" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "CopyOnClick" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Hook" })).toBeVisible();
  });

  test("CopyButton component works", async ({ page }) => {
    // Grant clipboard permissions
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    const copyButton = page.getByRole("button", { name: "Copy current text" });
    await expect(copyButton).toBeVisible();
    await copyButton.click();

    // Button should show "Copied!" briefly
    await expect(copyButton).toContainText(/copied/i);
  });

  test("CopyOnClick component works", async ({ page }) => {
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    const codeElement = page.locator("code", { hasText: "Hello from react-clipboard-lite" });
    await expect(codeElement).toBeVisible();
    await codeElement.click();

    // Should show "Copied" indicator
    await expect(page.getByText("✓ Copied")).toBeVisible();
  });

  test("useClipboard hook works", async ({ page }) => {
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    const hookButton = page.getByRole("button", { name: "Use hook copy()" });
    await expect(hookButton).toBeVisible();
    await hookButton.click();

    // No error should occur (button should still be visible)
    await expect(hookButton).toBeVisible();
  });

  test("input field updates text", async ({ page }) => {
    const input = page.getByRole("textbox");
    await expect(input).toBeVisible();
    await expect(input).toHaveValue("Hello from react-clipboard-lite");

    await input.fill("New test text");
    await expect(input).toHaveValue("New test text");
  });
});

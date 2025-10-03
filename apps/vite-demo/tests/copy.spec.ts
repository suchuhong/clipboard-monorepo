import { test, expect } from "@playwright/test";

test("renders and triggers copy interactions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("react-clipboard-lite Demo")).toBeVisible();
  // Click CopyButton (will attempt clipboard; in CI may be blocked but should not throw)
  await page.getByRole("button", { name: /copy/i }).click();
});

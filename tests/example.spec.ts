import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Todos App | Ultimate Task Management Solution"
  );
  await expect(
    page.getByRole("heading", { name: "Welcome to QA Hackathon" })
  ).toBeVisible();
});

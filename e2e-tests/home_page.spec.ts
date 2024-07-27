import { expect, test } from "./pages";

test.describe("Home Page", () => {
  test("basic", async ({ homePage }) => {
    await homePage.navigate();
    await expect(await homePage.title).toBe(
      "Todos App | Ultimate Task Management Solution"
    );
    await expect(homePage.header).toBeVisible();
  });
});

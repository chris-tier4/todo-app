import { expect, test } from "./pages";

test.describe("Main Page", () => {
  test("4. As a user, I want to create a new to-do item so that I can keep track of my tasks.", async ({
    loginPage,
    mainPage,
  }) => {
    await loginPage.navigate();
    await loginPage.login("test@hackaton.com", "test123!");
    await expect(mainPage.header).toBeVisible();
    await mainPage.openNewTodoDialog();
    await expect(mainPage.todoDialog).toBeVisible();
  });
});

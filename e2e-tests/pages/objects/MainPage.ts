import { Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly header: Locator;
  readonly addNewTodoButton: Locator;
  readonly todoDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "To-Do" });
    this.addNewTodoButton = page.getByRole("button", { name: "Add New" });
    this.todoDialog = page.getByRole("dialog", { name: "Create Todo" });
  }

  async navigate() {
    await this.page.goto("/todo");
  }

  async openNewTodoDialog() {
    await this.addNewTodoButton.click();
  }
}

import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", {
      name: "Welcome to QA Hackathon",
    });
  }

  get title() {
    return this.page.title();
  }

  async navigate() {
    await this.page.goto("/");
  }
}

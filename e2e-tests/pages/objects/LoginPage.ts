import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly header: Locator;
  readonly loginFormEmail: Locator;
  readonly loginFormPassword: Locator;
  readonly loginFormSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("h1");
    this.loginFormEmail = page.locator("#email");
    this.loginFormPassword = page.locator("#password");
    this.loginFormSubmit = page.locator("button[type=submit]");
  }

  async login(username: string, password: string) {
    await this.loginFormEmail.fill(username);
    await this.loginFormPassword.fill(password);
    await this.loginFormSubmit.click();
  }

  async navigate() {
    await this.page.goto("/login");
  }
}

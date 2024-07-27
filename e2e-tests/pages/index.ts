import { test as testBase } from "@playwright/test";
import { HomePage } from "./objects/HomePage";
import { LoginPage } from "./objects/LoginPage";
import { MainPage } from "./objects/MainPage";

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  mainPage: MainPage;
};

export const test = testBase.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
});

export { expect } from "@playwright/test";

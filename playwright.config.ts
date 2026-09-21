import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

declare const process: { version: string };

const config: PlaywrightTestConfig = {
  testDir: "./test",

  fullyParallel: true,

  use: {
    baseURL: "https://surajkumar-ibm.github.io/Selenium-Miniproject-Application/",
    trace: "on",
    screenshot: "only-on-failure",
  },

  reporter: [
    ["list"],
    [
      "allure-playwright",
      {
        outputFolder: "./out/allure-results",
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "edge",
      testMatch: /TC07_Checkout\.test\.ts/,
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
      },
    },
  ],

  outputDir: "test-results/",
};

export default config;

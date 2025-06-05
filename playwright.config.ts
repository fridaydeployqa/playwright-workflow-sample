// Import the Playwright test configuration and device presets
// https://playwright.dev/docs/test-configuration
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where your test files are located
  // https://playwright.dev/docs/test-configuration#test-directory
  testDir: './tests',

  // Run all tests in parallel by default
  // This can significantly speed up test execution
  // https://playwright.dev/docs/test-parallel
  fullyParallel: true,

  // Fail the build on CI if a test is marked as "only"
  // This prevents accidental check-ins of exclusive tests
  // https://playwright.dev/docs/test-annotations#focus-a-test
  forbidOnly: !!process.env.CI,

  // Number of times to retry failed tests on CI
  // Local runs won't retry by default
  // https://playwright.dev/docs/test-retries
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers running tests
  // On CI, we use a single worker for more stable results
  // https://playwright.dev/docs/test-parallel#worker-processes
  workers: process.env.CI ? 1 : undefined,

  // Generate an HTML report in the playwright-report directory
  // https://playwright.dev/docs/test-reporters#html-reporter
  reporter: 'html',

  // Global settings applied to all tests
  // https://playwright.dev/docs/test-configuration#use-options
  use: {
    // Collect trace when retrying a failed test
    // Helps with debugging by capturing screenshots, clicks, and other actions
    // https://playwright.dev/docs/trace-viewer-intro
    trace: 'on-first-retry',
  },

  // Configure projects for running tests in different browsers
  // https://playwright.dev/docs/test-configuration#multiple-browsers
  projects: [
    {
      // Run tests in Chromium (Chrome/Edge) by default
      // Additional browsers can be added here if needed
      // https://playwright.dev/docs/browsers
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}); 
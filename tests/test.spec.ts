import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

test('should display correct heading and tagline', async ({ page }) => {
  await page.goto(process.env.URL || 'https://fridaydeployqa.com');

  // Check the top link
  await expect(page.getByRole('link', { name: 'Friday Deploy' })).toBeVisible();

  // Check the tagline
  await expect(page.getByRole('heading', { name: 'Cut your test bill in half & ship on Fridays.' })).toBeVisible();

  // Check the subtitle
  await expect(page.getByRole('heading', { name: 'Simple Playwright migration sprints for teams moving on from flaky Selenium tests, closed SaaS tools, or costly QA services.' })).toBeVisible();
}); 
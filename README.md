# Playwright Test Template

## Overview

This repository provides a minimal template for web testing automation using Playwright. It demonstrates how to set up and run basic web tests while maintaining simplicity and following best practices.

[Playwright](https://playwright.dev) is Microsoft's end-to-end testing framework that enables reliable, cross-browser automation. It supports Chromium, Firefox, and WebKit, providing a unified API for all major browser engines.

### Why Playwright?

- **Reliable**: Auto-wait capabilities and resilient selectors reduce flaky tests
- **Fast**: Parallel execution and browser context isolation for maximum speed
- **Cross-browser**: Same API works across all modern browsers
- **Debug-friendly**: Built-in debugging tools and trace viewer
- **Modern**: Support for modern web features and frameworks

## Technical Architecture

This template implements a minimal architecture:

```
.
├── tests/                  # Test files
│   └── test.spec.ts       # Website tests
├── playwright.config.ts    # Playwright configuration
└── package.json           # Project dependencies
```

### Key Technical Decisions

1. **TypeScript**: Full type safety for test code
2. **Single Browser**: Configured for Chromium by default (easily extensible)
3. **Parallel Execution**: Tests run concurrently for faster feedback
4. **CI/CD Ready**: Configuration adapts to CI environments

## Environment Variables

The project uses environment variables for configuration:

- `URL`: Base URL for tests (default: https://fridaydeployqa.com)

You can set environment variables in several ways:

1. Export in your shell:
   ```bash
   export URL=https://your-site.com
   ```

2. Set inline when running tests:
   ```bash
   URL=https://your-site.com npm test
   ```

3. Create a `.env` file in the project root:
   ```
   URL=https://your-site.com
   ```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

3. Run tests:
   ```bash
   npm test           # Headless mode
   npm run test:ui    # With Playwright UI
   npm run test:headed # In headed mode
   ```

4. View test report:
   ```bash
   npm run show-report
   ```

## Test Development Guide

### Writing Tests

Tests are located in the `tests` directory. Each test file follows these principles:
- One logical feature per file
- Clear test descriptions
- Minimal, focused test cases
- Proper use of test hooks and fixtures

Example:
```typescript
test('should display correct heading', async ({ page }) => {
  await page.goto('/');
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible();
});
```

### Best Practices

1. **Selectors**: Use role-based or test-id selectors for stability
2. **Page Objects**: Implement for complex pages/components
3. **State Management**: Use browser contexts for test isolation
4. **Assertions**: Make them specific and meaningful
5. **Configuration**: Leverage playwright.config.ts for global settings

## Support and Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
- [Community Discord](https://playwright.dev/community/discord)

## License

MIT 
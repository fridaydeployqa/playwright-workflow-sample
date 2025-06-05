# Package.json Documentation

## Basic Project Information
- `name`: Project name ([docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name))
- `version`: Project version ([docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#version))
- `description`: Project description ([docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#description-1))

## Scripts
All scripts documentation: [Playwright CLI](https://playwright.dev/docs/test-cli)

- `test`: Run tests in headless mode ([docs](https://playwright.dev/docs/running-tests))
  ```bash
  playwright test
  ```

- `test:ui`: Run tests with Playwright's UI mode ([docs](https://playwright.dev/docs/test-ui-mode))
  ```bash
  playwright test --ui
  ```

- `test:headed`: Run tests in headed mode with visible browser ([docs](https://playwright.dev/docs/debug#headed-mode))
  ```bash
  playwright test --headed
  ```

- `show-report`: Show HTML test report after test run ([docs](https://playwright.dev/docs/test-reporters#html-reporter))
  ```bash
  playwright show-report
  ```

## Dependencies
Development dependencies ([docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devdependencies)):

- `@playwright/test`: Playwright test framework ([docs](https://playwright.dev/docs/intro))
  - Current version: ^1.42.1
  - Main testing framework and browser automation

- `@types/node`: TypeScript type definitions for Node.js ([docs](https://www.npmjs.com/package/@types/node))
  - Current version: ^20.11.24
  - Provides TypeScript type support for Node.js APIs

- `typescript`: TypeScript programming language ([docs](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html))
  - Current version: ^5.3.3
  - Adds static typing to JavaScript

## Version Numbers
The `^` symbol before version numbers means "compatible with version". For example:
- `^1.42.1` means any version from 1.42.1 up to, but not including, 2.0.0
- This follows [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) principles 
# Playwright Workflow Sample

## Overview

This repository demonstrates how to set up and run automated Playwright tests using GitHub Actions. It is based on the [Playwright Template](https://github.com/fridaydeployqa/playwright-template) repository, which provides the foundational test infrastructure.

### What's Added in This Repository

This repository extends the base template by adding:
- Automated test execution with GitHub Actions
- Continuous Integration workflow configuration
- Artifact storage for test results
- Best practices for CI/CD with Playwright

## GitHub Actions Workflow

### Key Features

- **Automated Test Execution**: Tests run automatically on:
  - Every push to main/master branch
  - Every pull request to main/master branch
- **Cross-Platform Testing**: Tests run on Ubuntu latest
- **Performance Optimizations**:
  - npm dependency caching
  - Playwright browser caching
  - Parallel test execution
- **Artifact Management**: Test reports are automatically saved
- **Safety Features**: 60-minute timeout protection

### Workflow Configuration

The workflow is defined in `.github/workflows/playwright.yml` and includes:

```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
```

### How It Works

1. **Environment Setup**:
   - Ubuntu runner provisioning
   - Node.js installation with caching
   - npm dependency installation

2. **Test Preparation**:
   - Playwright browser installation
   - System dependencies setup

3. **Test Execution**:
   - Runs all Playwright tests
   - Parallel execution for speed

4. **Results Processing**:
   - Test report generation
   - Artifact upload for later analysis

### Viewing Test Results

1. Navigate to the "Actions" tab in GitHub
2. Select the most recent workflow run
3. Download the "playwright-report" artifact
4. Open the HTML report for detailed test results

### Workflow Customization

You can customize the workflow by editing `.github/workflows/playwright.yml`:
- Change trigger events
- Modify test commands
- Adjust timeout settings
- Add environment variables
- Configure test matrix

## Running Tests Locally

Before pushing changes, you can run tests locally:

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npm test           # Headless mode
npm run test:ui    # With Playwright UI
```

## Documentation Links

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [JavaScript and Node.js Guide](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

### Playwright
- [Playwright CI Guide](https://playwright.dev/docs/ci)
- [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
- [GitHub Actions Setup](https://playwright.dev/docs/ci-intro)

## Original Template

This repository builds upon the [Playwright Template](https://github.com/fridaydeployqa/playwright-template) which provides:
- Basic Playwright test setup
- TypeScript configuration
- Essential test examples
- Environment variable handling

For basic Playwright setup and test writing guidelines, please refer to the original template's documentation.

## License

MIT 
Automated Result Screen
<img width="1590" height="991" alt="Screenshot 2025-12-08 191427" src="https://github.com/user-attachments/assets/1e22af15-d5ac-46ec-9d23-e5fb3a46c72f" />

# Buggy Cars Rating - Test Automation Suite

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Comprehensive end-to-end test automation suite for the Buggy Cars Rating web application using Playwright and JavaScript.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Configuration](#configuration)
- [Test Reports](#test-reports)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

## 🎯 About

This project provides automated testing for the **Buggy Cars Rating** application (https://buggy.justtestit.org/), focusing on:
- User authentication (Login)
- User registration
- UI element validation
- Error handling and validation

The framework follows the **Page Object Model (POM)** design pattern for maintainability and scalability.

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v7 or higher) - Comes with Node.js
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)

Check your installations:
```bash
node --version
npm --version
```

## 🚀 Installation

### Step 1: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

This will download Chrome, Firefox, and Safari browsers for testing.

### Step 4: Verify Installation

```bash
npx playwright --version
```

You should see the Playwright version number.

## 📁 Project Structure

```
BuggyCarsAutomation/
│
├── Pages/                          # Page Object Models
│   └── buggy-cars-page.js         # Login & Registration page objects
│
├── Tests/                          # Test Specifications
│   └── buggy-cars.spec.js         # All test cases
│
├── TestData/                       # Test Data (optional)
│   └── test-data.json             # Centralized test data
│
├── test-results/                   # Generated test results
│   ├── screenshots/               # Failure screenshots
│   └── videos/                    # Test execution videos
│
├── playwright-report/              # HTML test reports
│
├── node_modules/                   # Dependencies (auto-generated)
│
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies
├── playwright.config.js            # Playwright configuration
└── README.md                       # This file
```

## 🏃 Running Tests

### Run All Tests

```bash
# Headless mode (default)
npx playwright test

# Headed mode (visible browser)
npx playwright test --headed

# UI mode (interactive)
npx playwright test --ui
```

### Run Specific Tests

```bash
# Run specific test file
npx playwright test Tests/buggy-cars.spec.js

# Run tests matching a pattern
npx playwright test -g "login functionality"

# Run specific test by name
npx playwright test -g "Test login functionality with valid credentials"
```

### Run on Specific Browser

```bash
# Chrome only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# Safari only
npx playwright test --project=webkit

# All browsers
npx playwright test --project=chromium --project=firefox --project=webkit
```

# Run in debug mode with inspector
npx playwright test --debug

# Debug specific test
npx playwright test -g "login" --debug
```

### Parallel Execution

```bash
# Run tests in parallel (default: 50% of CPU cores)
npx playwright test --workers=4

# Run tests sequentially
npx playwright test --workers=1
```

## 📊 Test Coverage

### Test Suites

| Suite | Tests | Description |
|-------|-------|-------------|
| Login Page Elements | 4 | Validates visibility of login page elements |
| Registration Page Elements | 7 | Validates visibility of registration form fields |
| Login Functionality | 4 | Tests login with valid/invalid credentials |
| Registration Functionality | 5 | Tests user registration scenarios |

### Total Test Cases: **20**

### Test Categories

- ✅ **Positive Tests**: Valid user flows
- ❌ **Negative Tests**: Error handling and validation
- 👁️ **UI Tests**: Element visibility and rendering

## ⚙️ Configuration

### Playwright Configuration

Edit `playwright.config.js` to customize settings:

```javascript
module.exports = {
  testDir: './Tests',
  timeout: 30000,              // Test timeout
  retries: 1,                  // Retry failed tests once
  workers: 4,                  // Parallel execution workers
  
  use: {
    baseURL: 'https://buggy.justtestit.org/',
    headless: false,           // Set to true for CI/CD
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium' },
    { name: 'firefox' },
    { name: 'webkit' },
  ],
};
```

## 📈 Test Reports

### Generate HTML Report

```bash
npx playwright show-report
```

This opens an interactive HTML report in your browser with:
- Test execution summary
- Pass/fail status for each test
- Screenshots of failures
- Video recordings
- Execution timeline
- Error stack traces

### Report Location

Reports are automatically generated at:
- **HTML Report**: `playwright-report/index.html`
- **JSON Report**: `test-results/results.json`
- **Screenshots**: `test-results/screenshots/`
- **Videos**: `test-results/videos/`

### View Results in Terminal

```bash
# Detailed output
npx playwright test --reporter=list

# Minimal output
npx playwright test --reporter=dot

# JSON output
npx playwright test --reporter=json
```


## 🤝 Contributing

### How to Contribute

1. Run tests: `npx playwright test`

### Code Style Guidelines

- Follow existing Page Object Model structure
- Use meaningful test and method names
- Add comments for complex logic
- Keep test data separate from test logic
- Write atomic tests (one assertion per test when possible)

### Adding New Tests

1. **Create/Update Page Object** in `Pages/`
2. **Add Test Cases** in `Tests/`
3. **Update Test Data** in `TestData/` (if needed)
4. **Run and Verify** tests pass
5. **Document** in this README

## 🐛 Troubleshooting

### Common Issues

#### Issue: Tests Failing with "Element not found"

**Solution**: 
```bash
# Verify locators are correct
npx playwright codegen https://buggy.justtestit.org/
```

#### Issue: Browser Not Launching

**Solution**:
```bash
# Reinstall browsers
npx playwright install --force
```

#### Issue: "Module not found" Error

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Tests Timing Out

**Solution**: Increase timeout in `playwright.config.js`:
```javascript
timeout: 60000, // 60 seconds
```

#### Issue: Flaky Tests

**Solutions**:
- Add explicit waits: `await page.waitForLoadState('networkidle')`
- Increase retries in config: `retries: 2`
- Use more stable locators
- Check for race conditions

#### Issue: Port Already in Use

**Solution**:
```bash
# Kill processes using port
npx kill-port 3000
```



## 📝 Best Practices

### Test Writing

- ✅ Use descriptive test names
- ✅ Keep tests independent and isolated
- ✅ Clean up test data after execution
- ✅ Use Page Object Model consistently
- ✅ Add meaningful assertions
- ✅ Handle async operations properly





## 📞 Contact

**Project Maintainer**: [shaik samenasurup]
- Email: shaiksameenasurup4256@gmail.com
- GitHub: [@yourusername](https://github.com/shaikSamena)
- LinkedIn: [Your Profile](https://www.linkedin.com/in/shaik-samenasurup-68134434a
)



---

## 🚀 Quick Start Commands

```bash
# Setup
npm install
npx playwright install

# Run tests
npx playwright test --headed

# View report
npx playwright show-report

# Debug
npx playwright test --debug

# Update
npm update
npx playwright install
```

---

**Last Updated**: December 8, 2025  
**Version**: 1.0.0  
**Status**: Active Development

---


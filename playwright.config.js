module.exports = {
  testDir: './Tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: false, // Set to false to see browser
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};
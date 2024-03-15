const path = require("path");
const { i18n } = require("./next-i18next.config");
const { withHighlightConfig } = require("@highlight-run/next/config");

module.exports = withHighlightConfig({
  // distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    instrumentationHook: true,
  },
  trailingSlash: true,
  optimizeFonts: false,
  reactStrictMode: true,
  env: {
    IS_WITHDRAWALS_PAUSED: process.env.IS_WITHDRAWALS_PAUSED,
    IS_TEST_ENV: process.env.IS_TEST_ENV,
    TRANSAK_API_KEY_PROD: process.env.TRANSAK_API_KEY_PROD,
    TRANSAK_API_KEY_PROD: process.env.TRANSAK_API_KEY_TEST_LEVII,
  },
  i18n,
});

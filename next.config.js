const path = require("path");
const { i18n } = require('./next-i18next.config')
// import { withHighlightConfig } from '@highlight-run/next/config'

module.exports = {
  // distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  optimizeFonts: false,
  reactStrictMode: true,
  env: {
    IS_WITHDRAWALS_PAUSED: process.env.IS_WITHDRAWALS_PAUSED,
    IS_TEST_ENV: process.env.IS_TEST_ENV,
  },
  i18n
};
const path = require("path");
const { i18n } = require('./next-i18next.config')

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
  },
  i18n
};
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
    TRANSAK_API_KEY_PROD: process.env.TRANSAK_API_KEY_PROD,
    TRANSAK_API_KEY_PROD: process.env.TRANSAK_API_KEY_TEST_LEVII,
    BSC_DISTRIBUTOR_ADDRESS_PUBLIC_KEY:
      process.env.BSC_DISTRIBUTOR_ADDRESS_PUBLIC_KEY,
    SANTEPAY_FEE: process.env.SANTEPAY_FEE,
    IS_SANTEPAY_TEST: process.env.IS_SANTEPAY_TEST,
    OFFRAMPER_URL: process.env.OFFRAMPER_URL,
  },
  i18n,
});

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  // Existing configuration
  static_site_generator: "next",
  token: "***",
  enablement: false,

  // Injected property
  output: "export",
};

export default withNextIntl(nextConfig);

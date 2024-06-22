import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "standalone", // existing configuration
  export: "true", // new property to be added
};

export default withNextIntl(nextConfig);

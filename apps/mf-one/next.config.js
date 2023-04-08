const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfOne",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./root": "./pages/index",
          "./sampleButton": "./components/SampleButton",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;

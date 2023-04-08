const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          mfOne: `mfOne@http://localhost:4001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const federationConfig = {
  name: "mfOne",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./root": "./pages/index",
    "./sampleButton": "./components/SampleButton",
  },
  shared: {},
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new NextFederationPlugin(federationConfig));
    config.plugins.push(new FederatedTypesPlugin({ federationConfig }));
    return config;
  },
};

module.exports = nextConfig;

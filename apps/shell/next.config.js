const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const createFederationConfig = (isServer) => ({
  name: "shell",
  filename: "static/chunks/remoteEntry.js",
  remotes: {
    "@mfe/mfOne": `mfOne@http://localhost:4001/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin(createFederationConfig(isServer))
    );
    config.plugins.push(
      new FederatedTypesPlugin({
        /**
         * The types seem to only be generated in the "chunks" folder in the micro-frontend
         * Passing false here ensures that the remote path points to the chunks folder and not the ssr folder
         */
        federationConfig: createFederationConfig(false),
      })
    );
    return config;
  },
};

module.exports = nextConfig;

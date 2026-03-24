// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     turbo: {
//       resolveAlias: {
//         canvas: "./empty-module.js",
//       },
//     },
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
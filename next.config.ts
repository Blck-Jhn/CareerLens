import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // This stops the 'require("canvas")' error during the build
        canvas: './empty-module.js' , 
      },
    },
  },
  experimental:{},
};

export default nextConfig;
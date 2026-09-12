import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: "/**",

      },
    ],
    
  },
};

// export default nextConfig;
// // next.config.js
// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// }
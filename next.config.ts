import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //configure hostname for images for https://placehold.co
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

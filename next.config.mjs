/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents: true,
  reactStrictMode: false,
  devIndicators: false,
  output: "standalone", // Required for Docker optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig

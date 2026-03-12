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
  env: {
    MEDIA_URL: process.env.API_MEDIA_URL,
  },
}

export default nextConfig

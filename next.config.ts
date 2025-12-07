/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "www.arvato-systems.com", // <-- ADD THIS
      },
    ],
    domains: [
      "nextbigtechnology.com",
      "images.unsplash.com",
      "www.arvato-systems.com", // <-- ADD THIS ALSO
    ],
  },
};

export default nextConfig;

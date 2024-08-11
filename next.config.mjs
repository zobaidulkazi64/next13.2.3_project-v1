/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "export", // Add this line for static exports
};

export default nextConfig;

import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    domains: ["avatars.githubusercontent.com", "github.com", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
  
};

export default nextConfig;

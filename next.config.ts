import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
  reactCompiler: true,
  sassOptions: {
    loadPaths: [path.join(__dirname, "src/shared/ui/theme")],
  },
};

export default nextConfig;

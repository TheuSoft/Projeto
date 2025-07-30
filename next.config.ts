import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações otimizadas para Docker
  output: 'standalone',
  
  // Configurações para desenvolvimento com hot reload
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  
  // Configurações adicionais se necessário
  experimental: {
    // Habilitar features experimentais se necessário
  },
};

export default nextConfig;

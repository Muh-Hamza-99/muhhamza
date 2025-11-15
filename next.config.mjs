/** @type {import("next").NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.logo.dev',
          },
        ],
      },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
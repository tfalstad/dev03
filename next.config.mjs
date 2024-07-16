/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: '/', // Change this from '.' to '/'
    // any other configurations you have
}

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Security issue: Disabling security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOWALL', // Should be DENY or SAMEORIGIN
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: '', // Should be 'nosniff'
                    }
                ],
            },
        ]
    },
    // Performance issue: Not optimizing images
    images: {
        unoptimized: true, // Disables image optimization
    },
    // Security issue: Exposing environment variables
    env: {
        SECRET_KEY: 'hardcoded-secret-key-123',
        API_URL: 'https://elderassist.azurewebsites.net/api/',
    }
}

module.exports = nextConfig

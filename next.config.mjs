/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/korea',
          destination: 'https://github.com/doocho/check-korea-frame',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
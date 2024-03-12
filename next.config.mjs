/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    //RazorPay keys
    RAZORPAY_KEY: "rzp_test_VHGEfHdwzXYNLI",
    RAZORPAY_SECRET: "uLH5X94ClOwLEyVtyZKWp7Np",
  },

  reactStrictMode: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com","img.icons8.com","fakestoreapi.com"],
  },
};

export default nextConfig;

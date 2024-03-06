import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Women Listed Bazar",
  description:
    "This is women listed bazar where user can book stalls for them to sell things and on stall ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
    </html>
  );
}

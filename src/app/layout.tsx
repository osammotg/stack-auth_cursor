import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoleStyle - Premium Shoes for Every Step",
  description: "Discover the latest collection of premium shoes for men, women, and kids. From sneakers to dress shoes, find your perfect pair at SoleStyle.",
  keywords: "shoes, sneakers, dress shoes, boots, sandals, footwear, fashion",
  authors: [{ name: "SoleStyle" }],
  openGraph: {
    title: "SoleStyle - Premium Shoes for Every Step",
    description: "Discover the latest collection of premium shoes for men, women, and kids.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

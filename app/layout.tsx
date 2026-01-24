import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FAB from "@/components/FAB";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumin Hub",
  description: "Your gateway to innovation",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Gothic+Condensed+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=hind@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=bespoke-sans@400&f[]=expose@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=plein@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.lineicons.com/4.0/lineicons.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <FAB />
      </body>
    </html>
  );
}

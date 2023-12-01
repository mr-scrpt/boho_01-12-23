import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const glory = Glory({ subsets: ["latin"], weight: ["800"] });

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../public/fonts/Gilroy-Bold.woff" });

export const metadata: Metadata = {
  title: "Boho Casino",
  description: "The best online casino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

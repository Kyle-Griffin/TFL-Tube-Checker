import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./kylestyles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TFL Tube Checker",
  description: "Check tube service and get train times",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

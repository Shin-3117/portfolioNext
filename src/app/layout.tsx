import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "신현중 portfolio",
  description: "frontend developer HyeonJung Shin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

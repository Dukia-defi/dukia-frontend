import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dukia deFi",
  description: "Dukia deFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-figTree antialiased bg-black-bg text-white`}>
        {children}
      </body>
    </html>
  );
}

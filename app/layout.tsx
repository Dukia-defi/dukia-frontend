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
      <body className={`bg-black-bg font-figTree text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

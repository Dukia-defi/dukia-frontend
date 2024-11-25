import type { Metadata } from "next";
import "./globals.css";
// import { Toaster } from 'sonner';
import { Toaster } from "@/components/ui/toaster"

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
        <Toaster />
      </body>
    </html>
  );
}

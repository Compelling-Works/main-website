import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compelling Works Limited",
  description: "This is the official compelling works limited website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mt-[7svh] md:mt-[10svh]">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

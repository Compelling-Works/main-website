import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Toaster } from "@/components/ui/toaster";
import AdminNavbar from "./admin-navbar";
import AdminSidebar from "./sidebar";
import Providers from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compelling Works Limited - Admin",
  description: "This is the official compelling works limited website admin",
  icons: {
    icon: ["header-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/logo.jpeg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <Providers>
          <AdminNavbar />
          <div className="flex gap-2 h-[200dvh]">
            <AdminSidebar />
            <main className="mt-[11svh]">{children}</main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Toaster } from "@/components/ui/toaster";
import AdminNavbar from "./admin-navbar";
import AdminSidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compelling Works Limited - Admin",
  description: "This is the official compelling works limited website admin",
  icons: {
    icon: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminNavbar />
        <div className="flex gap-2 h-[200dvh]">
          <AdminSidebar />
          <main className="mt-[11svh]">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

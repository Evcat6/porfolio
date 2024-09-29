import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import { ThemeManager } from "@/components/theme-manager";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yevhen Kotliarchuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="Yevhen Kotliarchuk's personal page - Fullstack Node.js developer with experience in building web applications and backend solutions. Check out his projects and professional background."
      />
      <body className={inter.className}>
        <ThemeManager />
        <main className="content-wrap">
          <Header />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

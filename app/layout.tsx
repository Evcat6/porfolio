import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeManager } from "@/components/ThemeManager";

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
      <body data-theme className={inter.className}>
        <ThemeManager />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

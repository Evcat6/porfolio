import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import { ThemeManager } from "@/components/theme-manager";

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
      <body className={inter.className}>
        <ThemeManager />
        <Header></Header>
        {children}
      <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phuket IDI",
  description: "Island Data Informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div> {children}</div>
        <Footer />
      </body>
    </html>
  );
}

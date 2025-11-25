import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { grift } from "@/fonts";
import Footer from "@/components/Navigation/Footer";
import LenisProvider from "@/wrapper/ScrollWrapper";

export const metadata: Metadata = {
  title: "Vesenex",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grift.variable} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

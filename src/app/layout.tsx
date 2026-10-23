import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/homepage/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/homepage/Marquee";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor - A Quick Look at the Costs of Essential Goods",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindSiliguri.className}  h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <Marquee />
        <main className="flex-1 bg-[#F1F6F1]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

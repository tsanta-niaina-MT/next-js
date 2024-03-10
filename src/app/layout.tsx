import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/common/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Blogs",
  description: "Tsantaniaina",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div 
          id="main-content" 
          className="w-full overflow-y-auto" 
          style={{height: "calc(100vh - 100px)"}}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

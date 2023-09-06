import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

import TopNavBar from "@/components/top-nav-bar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "globuy.lk",
  description: "shop & show your glow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNavBar/>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

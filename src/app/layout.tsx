import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from 'next';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "UNCOVER CARPATHIAN’S SECRETS",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;

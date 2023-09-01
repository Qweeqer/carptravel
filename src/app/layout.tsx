import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "UNCOVER CARPATHIAN’S SECRETS",
  openGraph: {
    title: "CarpTravel - Uncover Carpathian’s Secrets",
    description:
      "Explore the beauty of the Carpathian Mountains and uncover their hidden secrets.",
    url: "https://carptravel-one.vercel.app/",
    images: [{ url: "/images/ogLogo.png", width: 1200, height: 630 }],
    type: "website",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;

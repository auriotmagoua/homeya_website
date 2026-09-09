import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../app/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Homeya — Ton chez-toi, simplement.",
  description:"Trouvez rapidement des maisons, appartements, terrains, bureaux et magasins à louer ou à vendre directement depuis votre smartphone.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}
      <ScrollToTop/> 
      </body>
    </html>
  );
}
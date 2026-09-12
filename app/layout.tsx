import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../app/components/ui/ScrollToTop";
import localFont from 'next/font/local';
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
// 1. Police Baloo 2 avec tous ses poids
const baloo2 = localFont({
  src: [
    {
      path: "../public/fonts/baloo/Baloo2-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/baloo/Baloo2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/baloo/Baloo2-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/baloo/Baloo2-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/baloo/Baloo2-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-baloo",
});

// 2. Police Amazonas (un seul poids)
const amazonas = localFont({
  src: [
    {
      path: "../public/fonts/amazonas/Amazonas.ttf", // Ajustez le dossier si nécessaire
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-amazonas",
});

// 3. Police Nexa Light (un seul poids)
const nexaLight = localFont({
  src: [
    {
      path: "../public/fonts/nexa/Nexa-Light.otf", // Ajustez le dossier si nécessaire
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${baloo2.variable} ${amazonas.variable} ${nexaLight.variable}`}
    >
      <body className="font-baloo font-normal">{children}
      <ScrollToTop/> 
      </body>
    </html>
  );
}
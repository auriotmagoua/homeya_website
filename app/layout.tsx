import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../app/components/ui/ScrollToTop";
import localFont from 'next/font/local';
import JsonLd from "../app/components/seo/JsonLd";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.homeya.site"),

  title: {
    default: "HomeYa | Immobilier au Cameroun",
    template: "%s | HomeYa",
  },

  description:
    "HomeYa est la plateforme immobilière au Cameroun pour trouver des maisons, appartements, terrains, bureaux et magasins à louer ou à vendre.",

  keywords: [
    "HomeYa",
    "HomeYa Cameroun",
    "immobilier Cameroun",
    "immobilier Douala",
    "immobilier Yaoundé",
    "maison à louer au Cameroun",
    "appartement à louer au Cameroun",
    "maison à vendre au Cameroun",
    "appartement à vendre au Cameroun",
    "terrain à vendre au Cameroun",
    "location immobilière Cameroun",
  ],

  authors: [
    {
      name: "HomeYa",
      url: "https://www.homeya.site",
    },
  ],

  creator: "HomeYa",
  publisher: "HomeYa",

  applicationName: "HomeYa",

  category: "real estate",

  alternates: {
    canonical: "https://www.homeya.site",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://www.homeya.site",
    siteName: "HomeYa",
    title: "HomeYa | Immobilier au Cameroun",
    description:
      "Trouvez des maisons, appartements, terrains, bureaux et magasins à louer ou à vendre au Cameroun avec HomeYa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomeYa — Plateforme immobilière au Cameroun",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HomeYa | Immobilier au Cameroun",
    description:
      "Trouvez des maisons, appartements, terrains, bureaux et magasins à louer ou à vendre au Cameroun.",
    images: ["/og-image.jpg"],
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
      <body className="font-baloo font-normal">
      <JsonLd/>

        {children}
        <ScrollToTop/> 
      </body>
    </html>
  );
}
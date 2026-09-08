// components/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Sparkles, Star } from "lucide-react";

const CATEGORIES = [
  "Location de logements",
  "Achat de biens immobiliers",
  "Vente de biens immobiliers",
  "Terrains à bâtir",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 md:pt-16 pb-0"
    >
      {/* Effets de lueur ambiante légers */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[350px] bg-[#F77500]/5 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-20 w-[300px] h-[300px] bg-[#123B70]/5 rounded-full blur-[100px]" />

      {/* Contenu principal */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Micro-badge Néo-Futuriste */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-[#F77500] animate-pulse" />
          <span className="text-xs font-bold text-[#123B70]">
            N°1 de l&apos;immobilier vérifié au Cameroun
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#F77500]" />
        </div>

        {/* Titre Impactant */}
        <h1 className="mb-6 text-3xl font-black tracking-tight text-[#123B70] sm:text-5xl md:text-6xl leading-[1.15]">
          Ton chez-toi,{" "}
          <span className="bg-gradient-to-r from-[#123B70] via-[#F77500] to-[#e06a00] bg-clip-text text-transparent">
            simplement.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-normal">
          Trouvez rapidement des maisons, appartements, terrains ou locaux
          commerciaux à louer ou à vendre, directement depuis votre smartphone.
        </p>

        {/* Boutons de téléchargement Premium */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {/* App Store */}
          <a
            href="#telecharger"
            aria-label="Télécharger HomeYa sur l'App Store"
            className="group flex items-center space-x-3 rounded-2xl bg-[#0A111E] px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-[#123B70] hover:-translate-y-0.5 border border-white/10"
          >
            <svg
              className="h-6 w-6 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.76 1.05-1.82.93-2.88-.9.04-2.01.6-2.65 1.35-.57.66-1.07 1.74-.93 2.78 1.01.08 2.03-.49 2.65-1.25z" />
            </svg>

            <div className="text-left">
              <div className="text-[9px] font-medium uppercase tracking-wider text-gray-400">
                Télécharger dans l&apos;
              </div>
              <div className="text-xs font-bold leading-tight">
                App Store
              </div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#telecharger"
            aria-label="Télécharger HomeYa sur Google Play"
            className="group flex items-center space-x-3 rounded-2xl bg-[#0A111E] px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-[#123B70] hover:-translate-y-0.5 border border-white/10"
          >
            <svg
              className="h-6 w-6 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l12.5 8.5c.57.39.71 1.17.32 1.74-.09.13-.2.24-.32.32l-12.5 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5z" />
            </svg>

            <div className="text-left">
              <div className="text-[9px] font-medium uppercase tracking-wider text-gray-400">
                Disponible sur
              </div>
              <div className="text-xs font-bold leading-tight">
                Google Play
              </div>
            </div>
          </a>
        </div>

        {/* Section Visuelle : Mockup App & Badges de Confiance */}
        <div className="relative mx-auto max-w-2xl mt-4">
          
          {/* Badge Flottant Gauche : Sécurité */}
          <div className="hidden sm:flex absolute -left-6 top-1/3 z-30 items-center space-x-2 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="rounded-xl bg-[#F77500]/10 p-2 text-[#F77500]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-400">Certifié</div>
              <div className="text-xs font-black text-[#123B70]">100% Vérifié</div>
            </div>
          </div>

          {/* Badge Flottant Droit : Note */}
          <div className="hidden sm:flex absolute -right-6 top-1/4 z-30 items-center space-x-2 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="rounded-xl bg-amber-50 p-2 text-amber-500">
              <Star className="h-5 w-5 fill-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-400">Note App</div>
              <div className="text-xs font-black text-[#123B70]">4.9 / 5.0</div>
            </div>
          </div>

          {/* Arche de fond avec dégradé d'accentuation */}
          <div className="relative mx-auto flex justify-center">
            <div className="h-44 w-80 rounded-t-full bg-gradient-to-b from-[#123B70] to-[#0A111E] sm:h-56 sm:w-[450px] shadow-2xl overflow-hidden relative border-t-4 border-[#F77500]">
              
              {/* Effet d'illustration interne */}
              <div className="absolute inset-0 bg-[radial-gradient(#F77500_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="pt-6 text-center text-white/80 text-xs font-medium tracking-widest uppercase">
                Application Mobile HOMEYA
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bandeau orange - Catégories Néo-Brutalistes */}
      <div className="relative z-30 w-full overflow-hidden bg-[#F77500] py-4 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center sm:justify-around gap-4 px-4 text-xs font-bold sm:text-sm">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className="flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20 cursor-pointer"
            >
              <ChevronRight
                className="h-3.5 w-3.5 text-white"
                aria-hidden="true"
              />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
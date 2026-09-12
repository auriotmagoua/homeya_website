// components/MobileAppSection.tsx
"use client";

import Link from "next/link";
import Image from 'next/image';


export default function MobileAppSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#123B70] px-6 py-10 shadow-xl sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16">
        
        {/* Décorations en arrière-plan */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#F77500]/10" />

        {/* Petit élément décoratif */}
        <div className="pointer-events-none absolute right-8 top-8 hidden h-3 w-3 rounded-full bg-[#F77500] opacity-80 sm:block" />
        <div className="pointer-events-none absolute right-14 top-14 hidden h-2 w-2 rounded-full bg-white/40 sm:block" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

          {/* =========================
              TEXTE
          ========================== */}
          <div className="max-w-lg text-center text-white md:text-left">

            {/* Petit label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F77500]" />
              Disponible sur mobile
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[42px]">
              Tout l&apos;immobilier
              <br className="hidden sm:block" />
              <span className="text-[#F77500]"> dans votre poche</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              Avec Homeya, consultez des centaines d&apos;annonces,
              découvrez les biens disponibles et trouvez votre prochain
              chez-vous où que vous soyez.
            </p>

            {/* Points forts */}
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/90">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F77500] text-xs font-bold">
                  ✓
                </span>
                <span>Des annonces immobilières à portée de main</span>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F77500] text-xs font-bold">
                  ✓
                </span>
                <span>Recherchez facilement votre prochain logement</span>
              </div>
            </div>

            {/* Bouton */}
            <div className="mt-8">
              <Link
                href="#telecharger"
                className="inline-flex items-center justify-center rounded-xl bg-[#F77500] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e06a00] hover:shadow-xl"
              >
                Activer maintenant
              </Link>
            </div>
          </div>

          {/* =========================
              SMARTPHONE AVEC VRAIE IMAGE
          ========================== */}
          <div className="relative flex min-h-[360px] items-center justify-center md:min-h-[420px]">

            {/* Forme orange arrière-plan (Inchangé) */}
            <div className="absolute h-52 w-52 rotate-12 rounded-[2.5rem] bg-[#F77500] opacity-90 shadow-lg sm:h-60 sm:w-60 md:h-64 md:w-64" />

            {/* Cercle décoratif (Inchangé) */}
            <div className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-80 sm:w-80" />

            {/* Smartphone - Design Premium */}
            <div className="relative z-10 h-[400px] w-[180px] rounded-[38px] border-[5px] border-gray-200 bg-slate-950 p-1.5 shadow-2xl sm:h-[390px] sm:w-[200px]">
              
              {/* Encoche (Dynamic Island style) */}
              <div className="absolute left-1/2 top-2 z-30 h-4 w-16 -translate-x-1/2 rounded-full bg-black flex items-center justify-end px-1.5 gap-0.5">
                <div className="w-1 h-1 rounded-full bg-slate-800"/>
              </div>

              {/* Écran (overflow-hidden pour contenir l'image) */}
              <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-white">
                
                {/* 1. AJOUT DE L'IMAGE RÉELLE */}
                <Image
                  src="/screen-2.jpeg" // <--- Remplacez par le chemin de votre vraie capture d'écran dans /public
                  alt="Accueil de l'application Homeya"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, 200px"
                  className="object-cover object-top" // object-top pour bien voir le haut de l'app sous l'encoche
                />
              </div>

              {/* Barre d'accueil inférieure (Bouton home iOS) */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-500/60 rounded-full z-30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

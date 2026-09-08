// components/MobileAppSection.tsx
"use client";

import Link from "next/link";

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
              SMARTPHONE
          ========================== */}
          <div className="relative flex min-h-[360px] items-center justify-center md:min-h-[420px]">

            {/* Forme orange arrière-plan */}
            <div className="absolute h-52 w-52 rotate-12 rounded-[2.5rem] bg-[#F77500] opacity-90 shadow-lg sm:h-60 sm:w-60 md:h-64 md:w-64" />

            {/* Cercle décoratif */}
            <div className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-80 sm:w-80" />

            {/* Smartphone */}
            <div className="relative z-10 h-[350px] w-[180px] rounded-[38px] border-[5px] border-gray-200 bg-black p-1.5 shadow-2xl sm:h-[390px] sm:w-[200px]">
              
              {/* Encoche */}
              <div className="absolute left-1/2 top-2 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

              {/* Écran */}
              <div className="h-full w-full overflow-hidden rounded-[30px] bg-gray-50">

                {/* Header application */}
                <div className="flex items-center justify-between bg-white px-4 pb-3 pt-8 shadow-sm">
                  <div>
                    <p className="text-[8px] text-gray-400">
                      Bienvenue sur
                    </p>
                    <p className="text-sm font-extrabold text-[#123B70]">
                      H<span className="text-[#F77500]">O</span>MEYA
                    </p>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#123B70]">
                    <span className="text-[9px] font-bold text-white">
                      H
                    </span>
                  </div>
                </div>

                {/* Contenu écran */}
                <div className="space-y-3 p-3">

                  {/* Barre de recherche */}
                  <div className="flex h-8 items-center rounded-lg bg-gray-100 px-3">
                    <div className="mr-2 h-2.5 w-2.5 rounded-full border border-gray-400" />
                    <div className="h-1.5 w-20 rounded-full bg-gray-300" />
                  </div>

                  {/* Titre */}
                  <div>
                    <div className="mb-1 h-2 w-20 rounded-full bg-[#123B70]" />
                    <div className="h-1.5 w-28 rounded-full bg-gray-200" />
                  </div>

                  {/* Carte logement */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="relative h-24 bg-gray-200">
                      <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90">
                        <span className="text-[10px] text-[#F77500]">♥</span>
                      </div>

                      {/* Image placeholder */}
                      <div className="flex h-full items-center justify-center">
                        <div className="h-10 w-12 rounded bg-gray-300" />
                      </div>
                    </div>

                    <div className="space-y-1 p-2.5">
                      <div className="h-2 w-24 rounded-full bg-[#123B70]" />
                      <div className="h-1.5 w-16 rounded-full bg-gray-200" />

                      <div className="flex items-center justify-between pt-1">
                        <div className="h-2 w-12 rounded-full bg-[#F77500]" />
                        <div className="h-1.5 w-8 rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>

                  {/* Deux petites cartes */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-white p-2 shadow-sm">
                      <div className="mb-2 h-12 rounded-md bg-gray-200" />
                      <div className="h-1.5 w-12 rounded-full bg-[#123B70]" />
                      <div className="mt-1 h-1.5 w-8 rounded-full bg-gray-200" />
                    </div>

                    <div className="rounded-lg bg-white p-2 shadow-sm">
                      <div className="mb-2 h-12 rounded-md bg-gray-200" />
                      <div className="h-1.5 w-12 rounded-full bg-[#123B70]" />
                      <div className="mt-1 h-1.5 w-8 rounded-full bg-gray-200" />
                    </div>
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="absolute bottom-2 left-2 right-2 flex h-10 items-center justify-around rounded-xl bg-white px-2 shadow-md">
                  <div className="h-3 w-3 rounded-full bg-[#F77500]" />
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

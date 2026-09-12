// components/DownloadBanner.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DownloadBanner () {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-black rounded-3xl overflow-hidden relative shadow-2xl">
        {/* Image de fond (ajout du '/' au début du chemin) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/download.png')`
          }}
        />

        {/* Dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0" />

          <div className="relative z-10 p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Côté gauche : Logo + Titres */}
            <div className="flex items-start gap-6 max-w-xl">
              
              {/* Badge Logo HO (agrandi et descendu avec mt-2) */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mt-2 bg-[#F77500] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg p-2 overflow-hidden">
                <Image
                  src="/logo-3.svg"
                  alt="Logo HOMEYA"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              {/* Textes */}
              <div className="text-left text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  Prêt à vivre <br />
                  dans le logement <br />
                  qui <span className="text-[#F77500]">vous ressemble ?</span>
                </h2>

                <p className="mt-3 text-gray-300 text-xs sm:text-sm font-light">
                  Rejoignez des milliers d&apos;utilisateurs et téléchargez HOMEYA.
                </p>
              </div>
            </div>

            {/* Côté droit : Boutons Téléchargement */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
              {/* Google Play */}
              <Link
                href="#"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l12.5 8.5c.57.39.71 1.17.32 1.74-.09.13-.2.24-.32.32l-12.5 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-medium leading-none text-gray-300">DISPONIBLE SUR</div>
                  <div className="text-xs font-semibold leading-tight">Google Play</div>
                </div>
              </Link>

              {/* App Store */}
              <Link
                href="#"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.76 1.05-1.82.93-2.88-.9.04-2.01.6-2.65 1.35-.57.66-1.07 1.74-.93 2.78 1.01.08 2.03-.49 2.65-1.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-medium leading-none text-gray-300">Télécharger dans l&apos;</div>
                  <div className="text-xs font-semibold leading-tight">App Store</div>
                </div>
              </Link>
            </div>

          </div>
      </div>
    </section>
  );
}
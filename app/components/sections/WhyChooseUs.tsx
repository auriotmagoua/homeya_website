// components/WhyChooseUs.tsx
'use client';

import React from 'react';
import { ShieldCheck, Search, Award, Handshake } from 'lucide-react';

export default function WhyChooseUs (){
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Des annonces vérifiées',
    },
    {
      icon: Search,
      title: 'Une recherche simple et rapide',
    },
    {
      icon: Award,
      title: 'Un accompagnement professionnel',
    },
    {
      icon: Handshake,
      title: 'Une mise en relation directe avec les propriétaires',
    },
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge supérieur */}
        <div className="inline-block mb-3 px-4 py-1.5 bg-[#FDEEE0] text-[#F77500] text-xs font-semibold rounded-full tracking-wide">
          Pourquoi nous ?
        </div>

        {/* Titre Principal */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F77500] mb-3">
          Pourquoi choisir Homeya ?
        </h2>

        {/* Sous-titre */}
        <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto mb-16 leading-relaxed">
          Parce que trouver un bien immobilier ne devrait pas être compliqué. Homeya réunit tout ce dont vous avez besoin dans une seule application.
        </p>

        {/* Grille de 4 cartes avec les badges bleus superposés au sommet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 pt-6">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 pt-10 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Petit carré/badge bleu foncé positionné À CHEVAL sur le bord supérieur (-top-7) */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#123B70] rounded-2xl flex items-center justify-center shadow-md">
                  <IconComponent className="w-6 h-6 text-[#F77500]" />
                </div>

                {/* Titre du point fort */}
                <h3 className="text-sm font-bold text-[#123B70] leading-snug mt-2">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
// components/Features.tsx
'use client';

import React from 'react';
import { Home, Key, Tag, Users } from 'lucide-react';

export default function Features() {
  const leftFeatures = [
    {
      icon: Home,
      title: 'Location de logements',
      description: 'Trouvez facilement un appartement, une maison ou une chambre adapté à votre budget et à vos besoins.',
    },
    {
      icon: Tag,
      title: 'Vente de biens immobiliers',
      description: 'Mettez votre bien en valeur et touchez des milliers d\'acheteurs potentiels rapidement.',
    },
  ];

  const rightFeatures = [
    {
      icon: Key,
      title: 'Achat de biens immobiliers',
      description: 'Accédez à des offres de vente vérifiées et trouvez le bien idéal en toute sécurité.',
    },
    {
      icon: Users,
      title: 'Accompagnement immobilier',
      description: 'Bénéficiez de conseils d\'experts pour vous guider à chaque étape de votre projet.',
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge supérieur */}
        <div className="inline-block mb-3 px-4 py-1.5 bg-[#FDEEE0] text-[#F77500] text-xs font-semibold rounded-full tracking-wide">
          Fonctionnalités
        </div>

        {/* Titre & Sous-titre */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] mb-2">
          Fonctionnalités
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-16 max-w-xl mx-auto">
          Une solution complète pour vos projets immobiliers.
        </p>

        {/* Disposition avec Téléphone au centre */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Colonne Gauche : 2 cartes */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 text-left border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#123B70] flex items-center justify-center text-[#F77500] mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#123B70] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Colonne Centrale : Mockup Smartphone */}
          <div className="flex justify-center my-6 lg:my-0">
            <div className="relative w-[260px] h-[520px] bg-black rounded-[45px] p-3 shadow-2xl border-4 border-gray-800">
              {/* Encoche / Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20"></div>

              {/* Écran du téléphone */}
              <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative flex flex-col pt-8 px-4 border border-gray-100">
                {/* Header de l'app mobile */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-[#123B70]">
                    HOME<span className="text-[#F77500]">YA</span>
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px]">
                    🔔
                  </div>
                </div>

                {/* Champ de recherche fictif */}
                <div className="bg-gray-100 rounded-lg p-2 text-[10px] text-gray-400 mb-4 text-left">
                  Rechercher une maison, appartement...
                </div>

                {/* Bannière de l'app */}
                <div className="bg-[#123B70] text-white rounded-xl p-3 text-left mb-4">
                  <div className="text-[10px] font-bold text-[#F77500]">Offre spéciale</div>
                  <div className="text-xs font-semibold">Trouvez votre logement à Douala & Yaoundé</div>
                </div>

                {/* Liste de cartes immobilières fictives */}
                <div className="flex-1 space-y-3 overflow-hidden">
                  <div className="bg-gray-50 rounded-xl p-2 flex gap-2 border border-gray-100">
                    <div className="w-14 h-14 bg-gray-300 rounded-lg flex-shrink-0"></div>
                    <div className="text-left flex-1">
                      <div className="w-20 h-2.5 bg-gray-300 rounded mb-1.5"></div>
                      <div className="w-12 h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-16 h-2 bg-[#F77500]/60 rounded"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-2 flex gap-2 border border-gray-100">
                    <div className="w-14 h-14 bg-gray-300 rounded-lg flex-shrink-0"></div>
                    <div className="text-left flex-1">
                      <div className="w-24 h-2.5 bg-gray-300 rounded mb-1.5"></div>
                      <div className="w-14 h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-16 h-2 bg-[#F77500]/60 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : 2 cartes */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 text-left border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#123B70] flex items-center justify-center text-[#F77500] mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#123B70] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
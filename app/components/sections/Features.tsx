// components/Features.tsx
'use client';

import Image from 'next/image';
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
            <div className="relative w-[260px] h-[560px] bg-slate-950 rounded-[45px] p-2.5 shadow-2xl border-4 border-slate-800">
                
                {/* Encoche / Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-slate-900" />
                </div>

                {/* Écran : bg-white au lieu de bg-slate-900 */}
                <div className="relative w-full h-full rounded-[35px] overflow-hidden bg-white">
                <Image
                    src="/screen-1.jpeg"
                    alt="Écran Application HOMEYA"
                    fill
                    priority // <-- Force le chargement instantané (pas de lazy loading)
                    sizes="260px"
                    className="object-cover object-bottom"
                />
                </div>

                {/* Barre d'accueil iOS */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-500/80 rounded-full z-20 pointer-events-none" />
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
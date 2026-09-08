// components/About.tsx
'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  ArrowUpRight, 
  Zap, 
  Eye, 
  Users 
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'securite' | 'vision'>('mission');

  const tabContents = {
    mission: {
      badge: "Inclusion & Transparence",
      title: "Digitaliser l'accès au logement sans intermédiaire",
      description: "HOMEYA élimine les frictions et les frais cachés. Nous offrons une expérience fluide qui connecte directement les demandeurs aux propriétaires vérifiés partout au Cameroun.",
      highlight: "100% Direct Propriétaire",
    },
    securite: {
      badge: "Protection Maximale",
      title: "Visites certifiées et transactions sécurisées",
      description: "Chaque annonce publiée passe par un processus strict de vérification d'identité et de cadastre. Dites adieu aux arnaques et aux faux agents.",
      highlight: "Certification Anti-Fraude",
    },
    vision: {
      badge: "L'Avenir de l'Immobilier",
      title: "Des visites en Réalité Virtuelle depuis votre salon",
      description: "Explorez votre futur appartement à Douala ou Yaoundé avant même d'effectuer un déplacement. Économisez votre temps et vos ressources.",
      highlight: "Immersion Haute Définition",
    },
  };

  return (
    <section id="apropos" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 relative overflow-hidden">
      
      {/* Effets de lueur ambiante légers en arrière-plan (Version Claire) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F77500]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#123B70]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Badge & En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F77500]/10 border border-[#F77500]/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F77500]">
              Réinventer l&apos;Expérience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#123B70]">
            L&apos;immobilier de demain, <br />
            <span className="bg-gradient-to-r from-[#123B70] via-[#1a4a8d] to-[#F77500] bg-clip-text text-transparent">
              repensé pour le Cameroun.
            </span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            HOMEYA fusionne technologie de pointe et sécurité absolue pour transformer la façon dont vous louez, achetez et investissez.
          </p>
        </div>

        {/* Grille Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Côté Gauche : Carte Interactive (Span 7) */}
          <div className="lg:col-span-7 bg-white/80 border border-gray-200/80 rounded-[32px] p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-xl shadow-gray-200/50">
            
            {/* Onglets */}
            <div className="flex space-x-2 p-1.5 bg-gray-100 rounded-2xl border border-gray-200/60 mb-8">
              {(['mission', 'securite', 'vision'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-[#123B70] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#123B70] hover:bg-white/60'
                  }`}
                >
                  {tab === 'securite' ? 'Sécurité' : tab}
                </button>
              ))}
            </div>

            {/* Contenu Dynamique */}
            <div className="space-y-6 min-h-[200px]">
              <div className="inline-block px-3 py-1 bg-[#F77500]/10 border border-[#F77500]/20 text-[#F77500] text-[11px] font-bold rounded-full">
                {tabContents[activeTab].badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] leading-snug">
                {tabContents[activeTab].title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                {tabContents[activeTab].description}
              </p>

              <div className="pt-2 flex items-center space-x-2 text-[#F77500] text-xs font-bold tracking-wide">
                <Zap className="w-4 h-4" />
                <span>{tabContents[activeTab].highlight}</span>
              </div>
            </div>

            {/* Pied de la carte */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">Prêt à sauter le pas ?</span>
              <a
                href="#telecharger"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#123B70] hover:text-[#F77500] transition-colors group"
              >
                <span>Explorer l&apos;application</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Côté Droit : Métriques Visuelles (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Carte 1 */}
            <div className="bg-white border border-gray-200/70 p-5 rounded-3xl shadow-sm hover:shadow-md hover:border-[#F77500]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="w-10 h-10 rounded-2xl bg-[#123B70]/10 flex items-center justify-center text-[#123B70] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-[#F77500]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#123B70]">100%</div>
                <div className="text-[11px] text-gray-500 font-medium">Annonces Authentifiées</div>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="bg-white border border-gray-200/70 p-5 rounded-3xl shadow-sm hover:shadow-md hover:border-[#F77500]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="w-10 h-10 rounded-2xl bg-[#123B70]/10 flex items-center justify-center text-[#123B70] mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5 text-[#F77500]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#123B70]">360°</div>
                <div className="text-[11px] text-gray-500 font-medium">Immersions Virtuelles</div>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="bg-white border border-gray-200/70 p-5 rounded-3xl shadow-sm hover:shadow-md hover:border-[#F77500]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="w-10 h-10 rounded-2xl bg-[#123B70]/10 flex items-center justify-center text-[#123B70] mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-[#F77500]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#123B70]">0 FCFA</div>
                <div className="text-[11px] text-gray-500 font-medium">Frais masqués</div>
              </div>
            </div>

            {/* Carte 4 (Mise en avant Orange) */}
            <div className="bg-gradient-to-br from-[#F77500] to-[#e06a00] p-5 rounded-3xl text-white flex flex-col justify-between shadow-lg shadow-[#F77500]/25 transform hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black">24/7</div>
                <div className="text-[11px] text-white/90 font-medium">Accès sur Mobile</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
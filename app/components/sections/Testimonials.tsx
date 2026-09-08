// components/Testimonials.tsx
'use client';

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials (){
  const testimonials = [
    {
      id: 0,
      name: 'Sarah M.',
      location: 'Douala',
      rating: 5,
      comment:
        'Grâce à Homeya, j\'ai trouvé mon appartement à Douala en seulement 3 jours. L\'application est fluide, claire et très agréable à utiliser au quotidien.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 1,
      name: 'Daniel K.',
      location: 'Yaoundé',
      rating: 5,
      comment:
        'Mettre mon bien en location sur Homeya m\'a permis d\'entrer directement en contact avec des locataires sérieux sans perdre de temps ni passer par des intermédiaires douteux.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    
    {
      id: 2,
      name: 'Jessica T.',
      location: 'Kribi',
      rating: 5,
      comment:
        'Un service client réactif et un accompagnement au top. Je recommande vivement Homeya à toute personne cherchant un bien ou un terrain au Cameroun.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'Paul E.',
      location: 'Bafoussam',
      rating: 5,
      comment:
        'Une expérience utilisateur irréprochable. La recherche de logements est simple et les photos des biens sont réelles.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // La carte du milieu (index 1) est active par défaut
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex >= 0 && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white relative">
      {/* En-tête de section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12 relative z-10">
        <div className="inline-block mb-3 px-4 py-1.5 bg-[#FDEEE0] text-[#F77500] text-xs font-semibold rounded-full tracking-wide">
          Avis clients
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] mb-2">
          Témoignages
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm">
          Les utilisateurs parlent de nous.
        </p>
      </div>

      {/* Conteneur Carrousel avec Fond Bleu */}
      <div className="relative pt-8 pb-16">
        {/* Bandeau bleu foncé en arrière-plan (partie basse des cartes) */}
        <div className="absolute inset-x-0 top-28 bottom-0 bg-[#123B70] z-0"></div>

        {/* Flèches de navigation (Desktop) */}
        <div className="max-w-7xl mx-auto px-4 relative z-20 flex justify-between pointer-events-none mb-4 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:inset-x-0">
          <button
            onClick={() => scroll('left')}
            className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-2 rounded-full shadow-lg transition-all ml-2"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-2 rounded-full shadow-lg transition-all mr-2"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Zone de Scroll Horizontal */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 px-8 sm:px-12 md:px-24 py-6 scrollbar-none snap-x snap-mandatory relative z-10 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] snap-center cursor-pointer transition-all duration-300 transform flex flex-col items-center ${
                  isActive ? 'scale-105 z-20' : 'scale-95 opacity-80 z-10'
                }`}
              >
                {/* Carte Blanche avec bordure orange */}
                <div
                  className={`bg-white rounded-3xl p-6 border-4 border-[#F77500] w-full flex flex-col justify-between transition-all duration-300 text-center ${
                    isActive ? 'shadow-2xl min-h-[240px]' : 'shadow-md min-h-[210px]'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>

                  <div className="flex justify-center space-x-1 mt-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F77500] text-[#F77500]" />
                    ))}
                  </div>
                </div>

                {/* Avatar & Nom sous la carte */}
                <div className="flex flex-col items-center mt-4 text-white">
                  <div
                    className={`rounded-full border-2 border-white overflow-hidden shadow-md bg-gray-200 transition-all ${
                      isActive ? 'w-14 h-14' : 'w-11 h-11'
                    }`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`font-bold mt-1 ${isActive ? 'text-sm' : 'text-xs'}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] text-gray-300">{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
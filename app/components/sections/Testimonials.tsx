'use client';

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    name: 'Sarah M.',
    role: 'Locataire',
    location: 'Douala',
    rating: 5,
    comment:
      'Grâce à Homeya, j\'ai trouvé mon appartement à Douala en seulement 3 jours. L\'application est fluide, claire et très agréable à utiliser au quotidien.',
  },
  {
    id: 1,
    name: 'Daniel K.',
    role: 'Propriétaire',
    location: 'Yaoundé',
    rating: 5,
    comment:
      'Mettre mon bien en location sur Homeya m\'a permis d\'entrer directement en contact avec des locataires sérieux sans perdre de temps ni passer par des intermédiaires douteux.',
  },
  {
    id: 2,
    name: 'Jessica T.',
    role: 'Acheteuse',
    location: 'Kribi',
    rating: 5,
    comment:
      'Un service client réactif et un accompagnement au top. Je recommande vivement Homeya à toute personne cherchant un bien ou un terrain au Cameroun.',
  },
  {
    id: 3,
    name: 'Paul E.',
    role: 'Locataire',
    location: 'Bafoussam',
    rating: 5,
    comment:
      'Une expérience utilisateur irréprochable. La recherche de logements est simple et les photos des biens sont réelles.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mettre à jour l'index actif lors du scroll manuel
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // Largeur de la carte + gap
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);

    if (newIndex >= 0 && newIndex < TESTIMONIALS.length) {
      setActiveIndex(newIndex);
    }
  };

  // Scroll via les flèches
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;
    const targetScroll =
      direction === 'left'
        ? container.scrollLeft - cardWidth
        : container.scrollLeft + cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  // Scroll direct vers une carte
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="temoignages">
      {/* En-tête de section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-1.5 mb-3 px-4 py-1.5 bg-[#FDEEE0] text-[#F77500] text-xs font-semibold rounded-full tracking-wide">
          <Quote size={12} /> Avis clients
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] mb-2">
          Ce que disent nos utilisateurs
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm">
          Des témoignages réels de personnes qui font confiance à Homeya.
        </p>
      </div>

      {/* Conteneur Carrousel avec Fond Bleu */}
      <div className="relative pt-6 pb-12">
        {/* Bandeau bleu foncé en arrière-plan */}
        <div className="absolute inset-x-0 top-24 bottom-0 bg-[#123B70] z-0" />

        <div className="max-w-7xl mx-auto relative z-20">
          {/* Flèches de navigation (Desktop) */}
          <div className="hidden sm:flex justify-between items-center absolute top-1/2 -translate-y-1/2 inset-x-2 md:inset-x-8 z-30 pointer-events-none">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-3 rounded-full shadow-lg hover:scale-110 transition-all border border-gray-100"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-3 rounded-full shadow-lg hover:scale-110 transition-all border border-gray-100"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Zone de Scroll Horizontal */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 px-6 sm:px-16 md:px-32 py-6 snap-x snap-mandatory relative z-10 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToCard(index)}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] snap-center cursor-pointer transition-all duration-300 transform flex flex-col items-center ${
                    isActive ? 'scale-105 z-20' : 'scale-95 opacity-75 z-10'
                  }`}
                >
                  {/* Carte Blanche avec bordure orange */}
                  <div
                    className={`bg-white rounded-3xl p-6 border-4 border-[#F77500] w-full flex flex-col justify-between transition-all duration-300 text-center flex-1 ${
                      isActive ? 'shadow-2xl' : 'shadow-md'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic flex-1 flex items-center justify-center">
                      &ldquo;{item.comment}&rdquo;
                    </p>

                    <div className="flex justify-center space-x-1 mt-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#F77500] text-[#F77500]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Initiale & Infos (Nom, Rôle, Ville) sous la carte */}
                  <div className="flex flex-col items-center mt-4 text-white">
                    <div
                      className={`relative rounded-full border-2 border-white flex items-center justify-center shadow-md bg-[#F77500] text-white font-bold transition-all ${
                        isActive ? 'w-14 h-14 text-2xl' : 'w-11 h-11 text-xl'
                      }`}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <span
                      className={`font-bold mt-1 transition-all ${
                        isActive ? 'text-sm text-white' : 'text-xs text-gray-200'
                      }`}
                    >
                      {item.name}
                    </span>
                    <span className="text-[11px] text-gray-300 font-medium">
                      {item.role} • {item.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicateurs (Puces d'avancement) */}
          <div className="flex justify-center gap-2 mt-4 relative z-20">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-[#F77500]' : 'w-2 bg-white/40'
                }`}
                aria-label={`Aller au témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// 'use client';

// import React, { useState, useRef } from 'react';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function Testimonials (){
//   const testimonials = [
//     {
//       id: 0,
//       name: 'Sarah M.',
//       location: 'Douala',
//       rating: 5,
//       comment:
//         'Grâce à Homeya, j\'ai trouvé mon appartement à Douala en seulement 3 jours. L\'application est fluide, claire et très agréable à utiliser au quotidien.',
//       avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
//     },
//     {
//       id: 1,
//       name: 'Daniel K.',
//       location: 'Yaoundé',
//       rating: 5,
//       comment:
//         'Mettre mon bien en location sur Homeya m\'a permis d\'entrer directement en contact avec des locataires sérieux sans perdre de temps ni passer par des intermédiaires douteux.',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
//     },
    
//     {
//       id: 2,
//       name: 'Jessica T.',
//       location: 'Kribi',
//       rating: 5,
//       comment:
//         'Un service client réactif et un accompagnement au top. Je recommande vivement Homeya à toute personne cherchant un bien ou un terrain au Cameroun.',
//       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
//     },
//     {
//       id: 3,
//       name: 'Paul E.',
//       location: 'Bafoussam',
//       rating: 5,
//       comment:
//         'Une expérience utilisateur irréprochable. La recherche de logements est simple et les photos des biens sont réelles.',
//       avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(1); // La carte du milieu (index 1) est active par défaut
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = () => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const scrollPosition = container.scrollLeft;
//       const itemWidth = container.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
//       const newIndex = Math.round(scrollPosition / itemWidth);
//       if (newIndex >= 0 && newIndex < testimonials.length) {
//         setActiveIndex(newIndex);
//       }
//     }
//   };

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 320;
//       scrollContainerRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <section className="py-16 bg-white relative">
//       {/* En-tête de section */}
      // <div className="max-w-6xl mx-auto px-4 text-center mb-12 relative z-10">
      //   <div className="inline-block mb-3 px-4 py-1.5 bg-[#FDEEE0] text-[#F77500] text-xs font-semibold rounded-full tracking-wide">
      //     Avis clients
      //   </div>
      //   <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] mb-2">
      //     Témoignages
      //   </h2>
      //   <p className="text-gray-500 text-xs sm:text-sm">
      //     Les utilisateurs parlent de nous.
      //   </p>
      // </div>

//       {/* Conteneur Carrousel avec Fond Bleu */}
//       <div className="relative pt-8 pb-16">
//         {/* Bandeau bleu foncé en arrière-plan (partie basse des cartes) */}
//         <div className="absolute inset-x-0 top-28 bottom-0 bg-[#123B70] z-0"></div>

//         {/* Flèches de navigation (Desktop) */}
//         <div className="max-w-7xl mx-auto px-4 relative z-20 flex justify-between pointer-events-none mb-4 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:inset-x-0">
//           <button
//             onClick={() => scroll('left')}
//             className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-2 rounded-full shadow-lg transition-all ml-2"
//             aria-label="Précédent"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             className="pointer-events-auto bg-white/90 hover:bg-white text-[#123B70] p-2 rounded-full shadow-lg transition-all mr-2"
//             aria-label="Suivant"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Zone de Scroll Horizontal */}
//         <div
//           ref={scrollContainerRef}
//           onScroll={handleScroll}
//           className="flex overflow-x-auto gap-6 px-8 sm:px-12 md:px-24 py-6 scrollbar-none snap-x snap-mandatory relative z-10 scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {testimonials.map((item, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={item.id}
//                 onClick={() => setActiveIndex(index)}
//                 className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] snap-center cursor-pointer transition-all duration-300 transform flex flex-col items-center ${
//                   isActive ? 'scale-105 z-20' : 'scale-95 opacity-80 z-10'
//                 }`}
//               >
//                 {/* Carte Blanche avec bordure orange */}
//                 <div
//                   className={`bg-white rounded-3xl p-6 border-4 border-[#F77500] w-full flex flex-col justify-between transition-all duration-300 text-center ${
//                     isActive ? 'shadow-2xl min-h-[240px]' : 'shadow-md min-h-[210px]'
//                   }`}
//                 >
//                   <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic">
//                     &ldquo;{item.comment}&rdquo;
//                   </p>

//                   <div className="flex justify-center space-x-1 mt-4">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-[#F77500] text-[#F77500]" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Avatar & Nom sous la carte */}
//                 <div className="flex flex-col items-center mt-4 text-white">
//                   <div
//                     className={`rounded-full border-2 border-white overflow-hidden shadow-md bg-gray-200 transition-all ${
//                       isActive ? 'w-14 h-14' : 'w-11 h-11'
//                     }`}
//                   >
//                     <img
//                       src={item.avatar}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <span className={`font-bold mt-1 ${isActive ? 'text-sm' : 'text-xs'}`}>
//                     {item.name}
//                   </span>
//                   <span className="text-[10px] text-gray-300">{item.location}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };






// components/Testimonials.tsx

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";

// const CATEGORIES = ["Tous", "Locataires", "Propriétaires", "Agences"];

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Awa Diop",
//     role: "Locataire",
//     avatar: "/avatars/awa.jpg", // Remplacez par vos vraies images ou Unsplash
//     rating: 5,
//     tag: "Locataires",
//     highlight: "Recherche simplifiée",
//     comment:
//       "Homeya m'a permis de trouver mon appartement en moins de 48 heures sans devoir payer des frais d'agence exorbitants. L'interface est d'une simplicité incroyable !",
//     metric: "Appartement trouvé en 2 jours",
//   },
//   {
//     id: 2,
//     name: "Marc Kassi",
//     role: "Propriétaire",
//     avatar: "/avatars/marc.jpg",
//     rating: 5,
//     tag: "Propriétaires",
//     highlight: "Gestion sans stress",
//     comment:
//       "La vérification des profils locataires me rassure énormément. Je n'ai plus aucun retard de paiement depuis que j'utilise la plateforme.",
//     metric: "100% de loyers perçus à temps",
//   },
//   {
//     id: 3,
//     name: "Agence Horizon",
//     role: "Gestionnaire Immobilier",
//     avatar: "/avatars/agence.jpg",
//     rating: 5,
//     tag: "Agences",
//     highlight: "Gain de temps massif",
//     comment:
//       "Nous avons digitalisé toute la prise de rendez-vous pour nos visites. Nos agents gagnent près de 10 heures par semaine !",
//     metric: "+10h gagnées / semaine",
//   },
// ];

// export default function Testimonials() {
//   const [filter, setFilter] = useState("Tous");
//   const [likes, setLikes] = useState<{ [key: number]: number }>({ 1: 12, 2: 8, 3: 15 });

//   const filteredTestimonials =
//     filter === "Tous"
//       ? TESTIMONIALS
//       : TESTIMONIALS.filter((t) => t.tag === filter);

//   const handleLike = (id: number) => {
//     setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
//   };

//   return (
//     <section className="bg-slate-50 py-20 px-6" id="temoignages">
//       <div className="mx-auto max-w-7xl">
        
//         {/* En-tête */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#F77500]/10 px-4 py-1.5 text-xs font-semibold text-[#F77500]">
//             <Quote size={14} /> Témoignages & Avis
//           </span>
//           <h2 className="mt-4 text-3xl font-extrabold text-[#123B70] sm:text-4xl">
//             Ce que nos utilisateurs disent de <span className="text-[#F77500]">Homeya</span>
//           </h2>
//           <p className="mt-3 text-base text-gray-600">
//             Découvrez comment nous simplifions l'expérience immobilière au quotidien.
//           </p>

//           {/* Filtres par catégorie */}
//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
//                   filter === cat
//                     ? "bg-[#123B70] text-white shadow-md scale-105"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grille des témoignages */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredTestimonials.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
//             >
//               <div>
//                 {/* Note & Métrique */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-1 text-amber-400">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <Star key={i} size={16} fill="currentColor" />
//                     ))}
//                   </div>
//                   <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
//                     <CheckCircle2 size={12} /> Avis vérifié
//                   </span>
//                 </div>

//                 {/* Titre & Commentaire */}
//                 <h3 className="text-lg font-bold text-[#123B70] mb-2">
//                   "{item.highlight}"
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
//                   "{item.comment}"
//                 </p>
//               </div>

//               {/* Pied de carte : Profil utilisateur */}
//               <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="relative h-10 w-10 rounded-full bg-[#123B70] text-white flex items-center justify-center font-bold text-sm">
//                     {item.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-[#123B70]">
//                       {item.name}
//                     </h4>
//                     <p className="text-xs text-gray-400">{item.role}</p>
//                   </div>
//                 </div>

//                 {/* Bouton Utile / Like */}
//                 {/* <button
//                   onClick={() => handleLike(item.id)}
//                   className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#F77500] transition"
//                   title="Avis utile"
//                 >
//                   <ThumbsUp size={14} />
//                   <span>{likes[item.id] || 0}</span>
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
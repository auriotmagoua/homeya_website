// app/faq/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import {
  HelpCircle,
  Search,
  KeyRound,
  ShieldCheck,
  Building,
  ChevronRight,
  ArrowLeft,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

// Composant autonome pour chaque question/réponse
function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-slate-50/70 hover:bg-slate-100/80 transition-colors cursor-pointer select-none"
      >
        <span className="text-xs sm:text-sm font-bold text-[#123B70] pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#F77500] transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-4 bg-white text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqData = [
    {
      id: "section-1",
      icon: <Search className="w-4 h-4 text-[#F77500]" />,
      title: "1. Recherche & Visites de Biens",
      items: [
        {
          id: "q1-1",
          question: "Comment planifier une visite sur HOMEYA ?",
          answer:
            "Recherchez le bien qui vous intéresse, cliquez sur le bouton 'Programmer une visite', puis choisissez une date et un créneau horaire disponibles. Vous recevrez une confirmation immédiate par notification et WhatsApp.",
        },
        {
          id: "q1-2",
          question: "Y a-t-il des frais pour visiter un logement ?",
          answer:
            "Toutes les modalités de visite sont affichées en transparence totale sur la fiche de chaque bien. Les éventuels frais d'agent ou de déplacement sont indiqués avant toute validation.",
        },
        {
          id: "q1-3",
          question: "Que faire si le propriétaire ne se présente pas au rendez-vous ?",
          answer:
            "Vous pouvez signaler l'absence directement depuis l'historique de vos visites sur l'application. Notre équipe support contactera immédiatement le bailleur et replanifiera la visite à nos frais.",
        },
      ],
    },
    {
      id: "section-2",
      icon: <Building className="w-4 h-4 text-[#F77500]" />,
      title: "2. Propriétaires & Bailleur Certifié",
      items: [
        {
          id: "q2-1",
          question: "Comment publier une annonce d'appartement ou de terrain ?",
          answer:
            "Créez votre compte Bailleurs/Agents, cliquez sur 'Publier un bien', remplissez les informations de localisation, ajoutez vos photos claires et fixez le loyer/prix. Votre annonce est validée sous 24h par notre équipe.",
        },
        {
          id: "q2-2",
          question: "Comment obtenir le badge 'Bailleur Certifié' ?",
          answer:
            "Fournissez une pièce d'identité officielle (CNI ou Passeport) ainsi qu'un justificatif de propriété ou un mandat certifié. La certification augmente la visibilité de vos biens de 300%.",
        },
        {
          id: "q2-3",
          question: "Combien coûte la publication d'une annonce ?",
          answer:
            "La publication de vos premières annonces est totalement gratuite. Des formules premium sont disponibles pour mettre vos biens en tête de recherche et ajouter des visites virtuelles 3D.",
        },
      ],
    },
    {
      id: "section-3",
      icon: <ShieldCheck className="w-4 h-4 text-[#F77500]" />,
      title: "3. Sécurité & Lutte Anti-Fraude",
      items: [
        {
          id: "q3-1",
          question: "Comment HOMEYA me protège-t-il contre les arnaques ?",
          answer:
            "Nous effectuons un contrôle systématique des titres de propriété et des profils bailleurs. De plus, aucun versement de loyer à l'avance ne doit être fait en dehors des canaux sécurisés recommandés.",
        },
        {
          id: "q3-2",
          question: "Que faire si je repère une annonce suspecte ?",
          answer:
            "Cliquez sur le bouton 'Signaler l'annonce' présent en bas de chaque fiche. Nos modérateurs suspendent immédiatement l'annonce et mènent une enquête sur le terrain.",
        },
      ],
    },
    {
      id: "section-4",
      icon: <KeyRound className="w-4 h-4 text-[#F77500]" />,
      title: "4. Compte & Profil Utilisateur",
      items: [
        {
          id: "q4-1",
          question: "Comment modifier mes informations personnelles ?",
          answer:
            "Rendez-vous dans la section 'Mon Profil' sur l'application ou le site web. Vous pourrez y modifier votre numéro WhatsApp, votre e-mail et votre photo de profil.",
        },
        {
          id: "q4-2",
          question: "J'ai oublié mon mot de passe, comment le réinitialiser ?",
          answer:
            "Cliquez sur 'Mot de passe oublié' sur la page de connexion. Un code de réinitialisation sécurisé vous sera instantanément envoyé par SMS ou par e-mail.",
        },
      ],
    },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Navbar />

      {/* En-tête */}
      <section className="bg-[#0A111E] text-white py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-[#F77500] font-semibold">Centre d&apos;Aide & FAQ</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Assistance & Support
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Comment pouvons-nous  <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#F77500] bg-clip-text text-transparent">
              vous aider aujourd&apos;hui ?
            </span>
          </h1>

          <div className="mt-8 max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question (ex: visite, caution, annonce)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F77500]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire Mobile */}
      <div className="lg:hidden sticky top-[65px] z-30 bg-white border-b border-gray-200 py-3 px-4 overflow-x-auto no-scrollbar shadow-sm">
        <div className="flex space-x-2 w-max">
          {faqData.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => scrollToSection(e, sec.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeSection === sec.id
                  ? "bg-[#123B70] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {sec.title.split(".")[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Corps Principal */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sommaire Desktop */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#123B70] mb-4">
              Thématiques FAQ
            </h3>

            <nav className="space-y-1.5">
              {faqData.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                      isActive
                        ? "bg-[#123B70] text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100 hover:text-[#123B70]"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        isActive ? "bg-white/10" : "bg-gray-100"
                      }`}
                    >
                      {sec.icon}
                    </div>
                    <span className="truncate">{sec.title}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#123B70]">
                <MessageSquare className="w-4 h-4 text-[#F77500]" />
                <span>Une question spécifique ?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Notre service client est disponible sur WhatsApp et par e-mail 7j/7.
              </p>
              <a
                href="mailto:contact@homeya.site"
                className="inline-block text-xs font-bold text-[#F77500] hover:underline"
              >
                contact@homeya.site &rarr;
              </a>
            </div>
          </aside>

          {/* FAQ avec composant enfant réactif */}
          <section className="col-span-1 lg:col-span-8 space-y-8 lg:space-y-10">
            {faqData.map((sec) => {
              const filteredItems = sec.items.filter(
                (item) =>
                  item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.answer.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (searchQuery && filteredItems.length === 0) return null;

              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="p-3 rounded-2xl bg-[#F77500]/10 border border-[#F77500]/20 shrink-0">
                      {sec.icon}
                    </div>
                    <h2 className="text-base sm:text-xl font-extrabold text-[#123B70]">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {filteredItems.map((item, index) => (
                      <AccordionItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        defaultOpen={sec.id === "section-1" && index === 0}
                      />
                    ))}
                  </div>
                </article>
              );
            })}

            <div className="pt-6 flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#123B70] text-xs font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retourner à l&apos;accueil</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
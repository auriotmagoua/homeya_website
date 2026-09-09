// app/cookies/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import {
  Cookie,
  ShieldCheck,
  Settings2,
  BarChart3,
  Sliders,
  HelpCircle,
  Mail,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  // États pour la gestion interactive des préférences
  const [preferences, setPreferences] = useState({
    analytics: true,
    functional: true,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key: "analytics" | "functional") => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const sections = [
    {
      id: "section-1",
      icon: <Cookie className="w-4 h-4 text-[#F77500]" />,
      title: "1. Qu'est-ce qu'un Cookie ?",
      content: (
        <>
          <p className="mb-4">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone ou tablette) lors de la visite de notre site web <strong>homeya.site</strong> ou de l&apos;utilisation de l&apos;application mobile <strong>HOMEYA</strong>.
          </p>
          <p>
            Les cookies nous permettent de reconnaître votre appareil, d&apos;assurer le bon fonctionnement de la plateforme et de vous proposer une expérience fluide et personnalisée lors de la recherche de logements au Cameroun.
          </p>
        </>
      ),
    },
    {
      id: "section-2",
      icon: <Settings2 className="w-4 h-4 text-[#F77500]" />,
      title: "2. Types de Cookies Utilisés",
      content: (
        <>
          <p className="mb-4">
            Sur HOMEYA, nous classons les cookies selon trois catégories principales :
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <strong className="text-xs text-[#123B70] block mb-1">
                • Cookies Stricts Nécessaires (Obligatoires)
              </strong>
              <p className="text-xs text-gray-600">
                Indispensables pour vous connecter, naviguer en toute sécurité et enregistrer vos demandes de visite. Ils ne peuvent pas être désactivés.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <strong className="text-xs text-[#123B70] block mb-1">
                • Cookies Fonctionnels (Optionnels)
              </strong>
              <p className="text-xs text-gray-600">
                Permettent de mémoriser vos préférences de recherche (villes préférées, filtres de prix, langue) pour vous éviter de les ressaisir.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <strong className="text-xs text-[#123B70] block mb-1">
                • Cookies de Mesure d&apos;Audience / Analytiques (Optionnels)
              </strong>
              <p className="text-xs text-gray-600">
                Nous aident à comprendre comment notre plateforme est utilisée afin d&apos;améliorer la fluidité des recherches et la rapidité du service.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-3",
      icon: <Sliders className="w-4 h-4 text-[#F77500]" />,
      title: "3. Centre de Gestion des Préférences",
      content: (
        <>
          <p className="mb-4">
            Modifiez directement vos choix concernant l&apos;utilisation des cookies non essentiels ci-dessous :
          </p>

          <div className="space-y-4 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl mb-4">
            {/* Cookie Nécessaire */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="font-bold text-xs text-[#123B70] block">
                  Cookies Techniquement Nécessaires
                </span>
                <span className="text-[11px] text-gray-500">
                  Connexion, sécurité et fonctionnement de base.
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                Toujours Actif
              </span>
            </div>

            {/* Cookie Fonctionnel */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="font-bold text-xs text-[#123B70] block">
                  Cookies de Personnalisation
                </span>
                <span className="text-[11px] text-gray-500">
                  Mémorisation des filtres et favoris.
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("functional")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.functional ? "bg-[#F77500]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.functional ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Cookie Analytique */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-[#123B70] block">
                  Cookies d&apos;Analyse et de Performance
                </span>
                <span className="text-[11px] text-gray-500">
                  Statistiques anonymes d&apos;utilisation de la plateforme.
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("analytics")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.analytics ? "bg-[#F77500]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.analytics ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center space-x-2 bg-[#123B70] hover:bg-[#0A2548] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <span>Enregistrer mes préférences</span>
            </button>

            {saved && (
              <div className="flex items-center space-x-1 text-xs text-green-600 font-semibold animate-fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Préférences enregistrées !</span>
              </div>
            )}
          </div>
        </>
      ),
    },
    {
      id: "section-4",
      icon: <BarChart3 className="w-4 h-4 text-[#F77500]" />,
      title: "4. Configuration dans Votre Navigateur",
      content: (
        <>
          <p className="mb-4">
            Vous pouvez également configurer directement votre navigateur web pour bloquer ou supprimer l&apos;ensemble des cookies déposés par les sites internet :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm">
            <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies.</li>
            <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies.</li>
            <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Bloquer tous les cookies.</li>
          </ul>
        </>
      ),
    },
    {
      id: "section-5",
      icon: <HelpCircle className="w-4 h-4 text-[#F77500]" />,
      title: "5. Contact & Questions",
      content: (
        <>
          <p className="mb-4">
            Pour toute question relative à notre politique d&apos;utilisation des cookies sur HOMEYA, contactez notre équipe :
          </p>
          <p>
            Par e-mail à :{" "}
            <a
              href="mailto:privacy@homeya.site"
              className="text-[#F77500] underline font-semibold"
            >
              privacy@homeya.site
            </a>
          </p>
        </>
      ),
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900">
      <Navbar />

      {/* En-tête de page & Fil d'Ariane */}
      <section className="bg-[#0A111E] text-white py-16 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#F77500]/15 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-[#F77500] font-semibold">Gestion des Cookies</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Cookie className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Vie Privée & Traçabilité
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Gestion des <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#F77500] bg-clip-text text-transparent">
              Cookies & Témoins
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl font-light">
            Découvrez comment nous utilisons les témoins de navigation et personnalisez vos préférences de vie privée sur HOMEYA.
          </p>
        </div>
      </section>

      {/* Navigation Mobile Uniquement */}
      <div className="lg:hidden sticky top-[65px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 px-4 overflow-x-auto no-scrollbar shadow-sm">
        <div className="flex space-x-2 w-max">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => scrollToSection(e, sec.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeSection === sec.id
                  ? "bg-[#123B70] text-white shadow-sm"
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
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#123B70] mb-4">
              Sommaire
            </h3>

            <nav className="space-y-1.5">
              {sections.map((sec) => {
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
                <Mail className="w-4 h-4 text-[#F77500]" />
                <span>Des questions sur la confidentialité ?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Notre équipe est à votre disposition pour vous répondre.
              </p>
              <a
                href="mailto:privacy@homeya.site"
                className="inline-block text-xs font-bold text-[#F77500] hover:underline"
              >
                privacy@homeya.site &rarr;
              </a>
            </div>
          </aside>

          {/* Détaillé des articles */}
          <section className="col-span-1 lg:col-span-8 space-y-8 lg:space-y-10">
            {sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-3 rounded-2xl bg-[#F77500]/10 border border-[#F77500]/20 flex-shrink-0">
                    {sec.icon}
                  </div>
                  <h2 className="text-base sm:text-xl font-extrabold text-[#123B70]">
                    {sec.title}
                  </h2>
                </div>

                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {sec.content}
                </div>
              </article>
            ))}

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
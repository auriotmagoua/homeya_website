// app/cgu/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import {
  ShieldCheck,
  UserCheck,
  Building2,
  Scale,
  HelpCircle,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";

export default function CGUPage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const sections = [
    {
      id: "section-1",
      icon: <UserCheck className="w-4 h-4 text-[#F77500]" />,
      title: "1. Objet et Accès aux Services",
      content: (
        <>
          <p className="mb-4">
            Les présentes Conditions Générales d&apos;Utilisation (CGU) ont
            pour objet de définir les modalités d&apos;accès et d&apos;utilisation
            de la plateforme web (<strong>homeya.site</strong>) et de
            l&apos;application mobile <strong>HOMEYA</strong>.
          </p>
          <p className="mb-4">
            HOMEYA est un service technologique facilitant la mise en relation
            directe entre propriétaires, bailleurs, acheteurs, vendeurs et
            locataires pour des opérations immobilières au Cameroun (Douala,
            Yaoundé, Kribi, Bafoussam, etc.).
          </p>
          <p>
            L&apos;accès ou l&apos;utilisation de la plateforme implique
            l&apos;acceptation sans réserve de l&apos;intégralité des présentes
            conditions par l&apos;utilisateur.
          </p>
        </>
      ),
    },
    {
      id: "section-2",
      icon: <ShieldCheck className="w-4 h-4 text-[#F77500]" />,
      title: "2. Création de Compte et Sécurité",
      content: (
        <>
          <p className="mb-4">
            Pour accéder à certaines fonctionnalités (publication d&apos;annonces,
            réservation de visites, messagerie sécurisée), l&apos;utilisateur doit
            créer un compte en fournissant des informations exactes et vérifiables.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>L&apos;utilisateur doit être âgé d&apos;au moins 18 ans.</li>
            <li>
              Chaque utilisateur est responsable du maintien de la confidentialité
              de ses identifiants.
            </li>
            <li>
              Toute tentative d&apos;usurpation d&apos;identité ou de double compte
              frauduleux entraînera le bannissement immédiat.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "section-3",
      icon: <Building2 className="w-4 h-4 text-[#F77500]" />,
      title: "3. Publication des Annonces & Mandats",
      content: (
        <>
          <p className="mb-4">
            Les propriétaires ou mandataires légaux s&apos;engagent à publier des
            annonces sincères, correspondant à des biens réellement disponibles et
            conformes aux descriptions fournies (photos, superficie, loyer, charges).
          </p>
          <p className="mb-4">
            HOMEYA applique une politique stricte de modération :
          </p>
          <div className="bg-[#F77500]/5 border-l-4 border-[#F77500] p-4 rounded-r-xl mb-4 text-xs sm:text-sm text-gray-700">
            <strong>Transparence des prix :</strong> Aucun frais masqué ou
            commission d&apos;agent informel non déclarée ne sera toléré sur la
            plateforme.
          </div>
        </>
      ),
    },
    {
      id: "section-4",
      icon: <Scale className="w-4 h-4 text-[#F77500]" />,
      title: "4. Propriété Intellectuelle",
      content: (
        <>
          <p className="mb-4">
            Tous les contenus présents sur le site <strong>homeya.site</strong> et l&apos;application (logos, marques,
            textes, éléments graphiques, codes sources) sont la
            propriété exclusive de HOMEYA.
          </p>
          <p>
            Toute reproduction, extraction ou exploitation non autorisée des
            données de la plateforme à des fins commerciales est strictly
            interdite et passible de poursuites conformément au droit camerounais.
          </p>
        </>
      ),
    },
    {
      id: "section-5",
      icon: <AlertCircle className="w-4 h-4 text-[#F77500]" />,
      title: "5. Limitation de Responsabilité",
      content: (
        <>
          <p className="mb-4">
            HOMEYA intervient en qualité d&apos;éditeur de service et de tiers
            technologique d&apos;intermédiation. HOMEYA n&apos;est pas partie
            prenante aux contrats de bail ou de vente signés directement entre les
            particuliers.
          </p>
          <p>
            Par conséquent, HOMEYA ne saurait être tenu responsable des vices
            cachés d&apos;un bien, des retards de paiement de loyer ou des litiges
            contractuels survenant entre bailleurs et locataires.
          </p>
        </>
      ),
    },
    {
      id: "section-6",
      icon: <Lock className="w-4 h-4 text-[#F77500]" />,
      title: "6. Données Personnelles & Confidentialité",
      content: (
        <>
          <p className="mb-4">
            HOMEYA s&apos;engage à protéger la vie privée de ses utilisateurs. Les
            données récoltées (nom, numéro de téléphone, adresse e-mail) sont
            strictement utilisées pour la mise en relation et la vérification des
            comptes.
          </p>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données personnelles sur simple demande adressée à{" "}
            <a
              href="mailto:contact@homeya.site"
              className="text-[#F77500] underline font-semibold"
            >
              contact@homeya.site
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "section-7",
      icon: <HelpCircle className="w-4 h-4 text-[#F77500]" />,
      title: "7. Droit Applicable et Juridiction",
      content: (
        <>
          <p className="mb-4">
            Les présentes Conditions Générales d&apos;Utilisation sont soumises à
            la législation en vigueur en République du Cameroun.
          </p>
          <p>
            En cas de contestation ou de litige, les parties s&apos;engagent à
            privilégier un règlement amiable avant toute action devant les
            tribunaux compétents de Douala ou de Yaoundé.
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
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-[#F77500] font-semibold">
              Conditions Générales d&apos;Utilisation
            </span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Document Légal Officiel
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Conditions Générales <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#F77500] bg-clip-text text-transparent">
              d&apos;Utilisation (CGU)
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl font-light">
            Mise à jour : Septembre 2026. Ce document encadre les règles d&apos;accès,
            de sécurité et de transparence sur l&apos;écosystème <strong>homeya.site</strong>.
          </p>
        </div>
      </section>

      {/* Navigation Mobile Uniquement (Barre horizontale défilante) */}
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

      {/* Corps Principal : Sommaire Desktop + Contenu */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sommaire Desktop Uniquement */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#123B70] mb-4">
              Sommaire des articles
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

            {/* Encadré d'assistance rapide */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#123B70]">
                <Mail className="w-4 h-4 text-[#F77500]" />
                <span>Une question juridique ?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Notre équipe support répond à vos demandes relatives à la conformité et aux comptes sous 24h.
              </p>
              <a
                href="mailto:contact@homeya.site"
                className="inline-block text-xs font-bold text-[#F77500] hover:underline"
              >
                contact@homeya.site &rarr;
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

            {/* Bouton Retour Accueil */}
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
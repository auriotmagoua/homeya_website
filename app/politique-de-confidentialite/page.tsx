// app/politique-de-confidentialite/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import {
  Database,
  Eye,
  ShieldCheck,
  Share2,
  Lock,
  UserCheck,
  Cookie,
  Mail,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const sections = [
    {
      id: "section-1",
      icon: <Database className="w-4 h-4 text-[#F77500]" />,
      title: "1. Collecte des Données Personnelles",
      content: (
        <>
          <p className="mb-4">
            Dans le cadre de l&apos;utilisation de la plateforme web (<strong>homeya.site</strong>) et de l&apos;application mobile <strong>HOMEYA</strong>, nous collectons des données à caractère personnel indispensables au bon fonctionnement de nos services immobiliers au Cameroun.
          </p>
          <p className="mb-2 font-semibold text-gray-800">Données collectées directement :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Identité :</strong> Nom, prénom, photo de profil (facultative).</li>
            <li><strong>Coordonnées :</strong> Adresse e-mail, numéro de téléphone (WhatsApp ou standard).</li>
            <li><strong>Informations sur les biens :</strong> Titres de propriété, mandats, localisation précise et visuels pour les bailleurs/vendeurs.</li>
          </ul>
        </>
      ),
    },
    {
      id: "section-2",
      icon: <Eye className="w-4 h-4 text-[#F77500]" />,
      title: "2. Utilisation et Finalités des Données",
      content: (
        <>
          <p className="mb-4">
            Vos informations personnelles sont uniquement recueillies pour des objectifs précis et légitimes :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Faciliter la mise en relation entre propriétaires, chercheurs de biens et acquéreurs.</li>
            <li>Vérifier l&apos;authenticité des annonces et des profils d&apos;utilisateurs afin de prévenir la fraude.</li>
            <li>Gérer les réservations de visites et l&apos;envoi de notifications de suivi.</li>
            <li>Améliorer l&apos;expérience utilisateur et la sécurité globale de la plateforme.</li>
          </ul>
        </>
      ),
    },
    {
      id: "section-3",
      icon: <Share2 className="w-4 h-4 text-[#F77500]" />,
      title: "3. Partage et Divulgation des Données",
      content: (
        <>
          <p className="mb-4">
            HOMEYA s&apos;interdit formellement de vendre, louer ou commercialiser vos données personnelles à des tiers à des fins publicitaires.
          </p>
          <p className="mb-4">
            Vos données peuvent être partagées uniquement dans les cas suivants :
          </p>
          <div className="bg-[#F77500]/5 border-l-4 border-[#F77500] p-4 rounded-r-xl mb-4 text-xs sm:text-sm text-gray-700">
            <strong>Mise en relation :</strong> Vos coordonnées téléphoniques/WhatsApp sont transmises au propriétaire ou à l&apos;agent certifié uniquement lorsque vous validez une demande de visite ou de contact.
          </div>
          <p>
            Nous pouvons également transmettre certaines données aux autorités compétentes en cas de réquisition judiciaire conforme au droit camerounais.
          </p>
        </>
      ),
    },
    {
      id: "section-4",
      icon: <Lock className="w-4 h-4 text-[#F77500]" />,
      title: "4. Sécurité et Stockage des Données",
      content: (
        <>
          <p className="mb-4">
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos informations contre l&apos;accès non autorisé, la perte ou la falsification :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Chiffrement SSL/TLS pour l&apos;ensemble des échanges de données sur le réseau.</li>
            <li>Hébergement sécurisé sur des serveurs hautement protégés.</li>
            <li>Accès restreint aux données au seul personnel habilité.</li>
          </ul>
        </>
      ),
    },
    {
      id: "section-5",
      icon: <UserCheck className="w-4 h-4 text-[#F77500]" />,
      title: "5. Vos Droits et Gestion du Compte",
      content: (
        <>
          <p className="mb-4">
            Conformément aux réglementations relatives à la protection des données, vous bénéficiez à tout moment de droits étendus sur vos données personnelles :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Droit d&apos;accès et de rectification :</strong> Vous pouvez modifier vos informations depuis les paramètres de votre compte HOMEYA.</li>
            <li><strong>Droit à la suppression :</strong> Vous pouvez demander la clôture de votre compte et la suppression définitive de vos données.</li>
          </ul>
          <p>
            Pour exercer ces droits, envoyez simplement une demande par e-mail à{" "}
            <a
              href="mailto:privacy@homeya.site"
              className="text-[#F77500] underline font-semibold"
            >
              privacy@homeya.site
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "section-6",
      icon: <Cookie className="w-4 h-4 text-[#F77500]" />,
      title: "6. Cookies et Témoins de Navigation",
      content: (
        <>
          <p className="mb-4">
            Le site <strong>homeya.site</strong> utilise des cookies essentiels pour assurer le maintien de votre session de connexion, mémoriser vos préférences et mesurer l&apos;audience du site.
          </p>
          <p>
            Vous pouvez à tout moment configurer votre navigateur web pour refuser les cookies non essentiels, sans altérer l&apos;accès aux fonctionnalités principales de la plateforme.
          </p>
        </>
      ),
    },
    {
      id: "section-7",
      icon: <HelpCircle className="w-4 h-4 text-[#F77500]" />,
      title: "7. Modifications de la Politique",
      content: (
        <>
          <p className="mb-4">
            HOMEYA se réserve le droit de mettre à jour la présente Politique de Confidentialité afin de refléter l&apos;évolution de nos services ou du cadre légal au Cameroun.
          </p>
          <p>
            Toute modification majeure vous sera notifiée par e-mail ou via une alerte sur la plateforme avant sa date de prise d&apos;effet.
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
              Politique de Confidentialité
            </span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Protection des Données
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Politique de <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#F77500] bg-clip-text text-transparent">
              Confidentialité
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl font-light">
            Mise à jour : Septembre 2026. Découvrez comment HOMEYA collecte, protège et respecte vos données personnelles au quotidien.
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

            {/* Encadré d'assistance rapide */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#123B70]">
                <Mail className="w-4 h-4 text-[#F77500]" />
                <span>Une question sur vos données ?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Notre délégué à la protection des données vous répond sous 24h.
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
// app/mentions-legales/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import {
  Building2,
  Globe,
  Server,
  Copyright,
  ShieldCheck,
  Scale,
  Mail,
  ChevronRight,
  ArrowLeft,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

export default function LegalNoticePage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const sections = [
    {
      id: "section-1",
      icon: <Building2 className="w-4 h-4 text-[#F77500]" />,
      title: "1. Éditeur de la Plateforme",
      content: (
        <>
          <p className="mb-4">
            Le site internet <strong>homeya.site</strong> et l&apos;application mobile <strong>HOMEYA</strong> sont co-fondés et édités par l&apos;équipe <strong>HOMEYA</strong> Entreprise  opérant au Cameroun.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
              <Building2 className="w-4 h-4 text-[#F77500] shrink-0" />
              <div>
                <span className="block text-[13px] text-gray-400">Structure / Entité</span>
                <strong className="text-xs text-[#123B70]">HOMEYA SARL</strong>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#F77500] shrink-0" />
              <div>
                <span className="block text-[13px] text-gray-400">Siège Social</span>
                <strong className="text-xs text-[#123B70]">Bafoussam / Douala / Yaoundé, Cameroun</strong>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#F77500] shrink-0" />
              <div>
                <span className="block text-[13px] text-gray-400">E-mail Officiel</span>
                <strong className="text-xs text-[#123B70]">contact@homeya.site</strong>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#F77500] shrink-0" />
              <div>
                <span className="block text-[13px] text-gray-400">Téléphone / WhatsApp</span>
                <strong className="text-xs text-[#123B70]">+237 699 128 531</strong>
              </div>
            </div>
          </div>
          <div className="bg-[#123B70]/5 p-4 rounded-2xl border border-[#123B70]/10 text-sm text-gray-600 flex items-center justify-between">
            <div>
              <strong className="text-[#123B70]">Conformité & Régulation : </strong> HOMEYA opère dans le strict respect de la réglementation sur l&apos;immobilier et le commerce électronique en République du Cameroun.
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-2",
      icon: <Users className="w-4 h-4 text-[#F77500]" />,
      title: "2. Direction et Co-fondateurs",
      content: (
        <>
          <p className="mb-4">
            La direction de la publication, la conception technique et le développement de la plateforme HOMEYA sont assurés par l&apos;équipe des co-fondateurs.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm">
            <li><strong>Direction de la Publication :</strong> Équipe Dirigeante HOMEYA</li>
            <li><strong>Contact Équipe :</strong> <a href="mailto:contact@homeya.site" className="text-[#F77500] underline font-semibold">contact@homeya.site</a></li>
          </ul>
        </>
      ),
    },
    {
      id: "section-3",
      icon: <Server className="w-4 h-4 text-[#F77500]" />,
      title: "3. Hébergement des Services",
      content: (
        <>
          <p className="mb-4">
            L&apos;infrastructure web et les bases de données de HOMEYA sont hébergées de manière hautement sécurisée sur des serveurs cloud internationaux :
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm text-gray-700">
            <strong>Hébergeur web :</strong> Hostinger International Limited, 61 Lordou Vironos Street, 6023 Larnaca, Chypre.<br />
            <strong>Base de données & API :</strong> Supabase / Firebase Inc.
          </div>
        </>
      ),
    },
    {
      id: "section-4",
      icon: <Copyright className="w-4 h-4 text-[#F77500]" />,
      title: "4. Propriété Intellectuelle & Marque",
      content: (
        <>
          <p className="mb-4">
            La marque <strong>HOMEYA</strong>, le logo, le design, le code source ainsi que l&apos;ensemble des contenus originaux (textes, graphismes, bases de données) sont la propriété exclusive des fondateurs de HOMEYA.
          </p>
          <p>
            Toute reproduction, distribution ou extraction non autorisée de la plateforme est strictement interdite et fera l&apos;objet de poursuites conformément au droit de la propriété intellectuelle (OAPI / Droit camerounais).
          </p>
        </>
      ),
    },
    {
      id: "section-5",
      icon: <ShieldCheck className="w-4 h-4 text-[#F77500]" />,
      title: "5. Responsabilité & Intermédiation",
      content: (
        <>
          <p className="mb-4">
            HOMEYA agit en tant que plateforme technologique de mise en relation entre propriétaires, bailleurs et chercheurs de logements au Cameroun.
          </p>
          <p>
            Bien que nous vérifions rigoureusement les annonces, les transactions financières directes et la signature des baux restent sous la responsabilité des parties contractantes.
          </p>
        </>
      ),
    },
    {
      id: "section-6",
      icon: <Scale className="w-4 h-4 text-[#F77500]" />,
      title: "6. Droit Applicable & Juridiction",
      content: (
        <p>
          Les présentes mentions légales sont régies par la législation en vigueur en République du Cameroun. Tout litige relatif à l&apos;utilisation de la plateforme sera soumis à la juridiction des tribunaux.
        </p>
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

      <section className="bg-[#0A111E] text-white py-16 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#F77500]/15 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-[#F77500] font-semibold">Mentions Légales</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-[#F77500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Informations Juridiques
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Mentions {' '}
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#F77500] bg-clip-text text-transparent">
              Légales
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl font-light">
            Informations officielles sur l&apos;éditeur, les fondateurs et l&apos;hébergeur de la plateforme HOMEYA.
          </p>
        </div>
      </section>

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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
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
                <span>Une question juridique ?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Notre équipe vous répond sous 24h.
              </p>
              <a
                href="mailto:contact@homeya.site"
                className="inline-block text-xs font-bold text-[#F77500] hover:underline"
              >
                contact@homeya.site &rarr;
              </a>
            </div>
          </aside>

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
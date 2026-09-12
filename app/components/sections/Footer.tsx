'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2244] text-white pt-16 pb-8 relative overflow-hidden text-footer-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Colonne 1 : Logo & Description */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-2.png"
                alt="Homeya Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-sm">
              Homeya est la plateforme immobilière de référence au Cameroun. Trouvez, louez ou achetez vos biens en toute simplicité.
            </p>

            <div className="space-y-3 pt-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#F77500] flex-shrink-0" />
                <span>Bafoussam, Douala & Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F77500] flex-shrink-0" />
                <span>+237 699 128 531 / 698 204 806</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F77500] flex-shrink-0" />
                <span>contact@homeya.site</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Légal */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white tracking-wider text-footer-title">
              Légal
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/cgu" className="hover:text-[#F77500] transition-colors">
                  Conditions Générales d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-[#F77500] transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[#F77500] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#F77500] transition-colors">
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Support */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white tracking-wider text-footer-title">
              Support
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/#a-propos" className="hover:text-[#F77500] transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/#fonctionnalites" className="hover:text-[#F77500] transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F77500] transition-colors">
                  Centre d&apos;aide & FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contacts" className="hover:text-[#F77500] transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Suivez-nous */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white tracking-wider text-footer-title">
              Suivez-Nous
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Restez connecté avec nous sur les réseaux sociaux pour ne rien manquer des nouvelles offres.
            </p>

            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all shadow-md font-bold"
                aria-label="Facebook"
              >
                fb
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all shadow-md font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all shadow-md font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

        </div>

        {/* Bas de page */}
        <div className="pt-8 text-center sm:text-left text-gray-400 text-footer-sub">
          <p>© {new Date().getFullYear()} Homeya. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}
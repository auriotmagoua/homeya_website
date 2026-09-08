// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-[#0A2244] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Colonne 1 : Logo public & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-2.png"
                alt="Homeya Logo"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Homeya est la plateforme immobilière de référence au Cameroun. Trouvez, louez ou achetez vos biens en toute simplicité.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#F77500] flex-shrink-0" />
                <span>Bafoussam,Douala & Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#F77500] flex-shrink-0" />
                <span>+237 699 128 531 / 698 204 806</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F77500] flex-shrink-0" />
                <span>contact@homeya.site</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Liens Légal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Légal
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="#" className="hover:text-[#F77500] transition-colors">
                  Conditions Générales d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F77500] transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F77500] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F77500] transition-colors">
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="#a-propos" className="hover:text-[#F77500] transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="#fonctionnalites" className="hover:text-[#F77500] transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#F77500] transition-colors">
                  Centre d&apos;aide & FAQ
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#F77500] transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Suivez-nous */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Suivez-Nous
            </h4>
            <p className="text-xs text-gray-300">
              Restez connecté avec nous sur les réseaux sociaux pour ne rien manquer des nouvelles offres.
            </p>

            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">fb</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F77500] flex items-center justify-center text-white transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bas de page : Copyright + Bouton Scroll Top */}
        <div className="pt-8 flex flex-col text-center sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Homeya. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}
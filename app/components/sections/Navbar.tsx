// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "À propos", href: "/#apropos" },
  { label: "Contacts", href: "/#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo à gauche */}
        <Link href="/" className="inline-block flex-shrink-0">
          <Image
            src="/logo-1.png"
            alt="Homeya Logo"
            width={140}
            height={45}
            className="h-6 w-auto object-contain"
            priority
          />
        </Link>

        {/* Groupe Aligné à Droite (Navigation + Bouton Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#123B70]">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    i === 0
                      ? "text-[#F77500] font-bold"
                      : "transition-colors  hover:text-[#F77500]"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#telecharger"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F77500] hover:bg-[#e06a00] text-white px-6 py-2.5 text-xs font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Télécharger</span>
            <Download size={15} className="stroke-[2.5]" />
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#123B70] md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-gray-100 px-6 pb-6 md:hidden bg-white">
          <ul className="flex flex-col gap-4 pt-4 text-sm font-medium text-[#123B70]">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={i === 0 ? "text-[#F77500] font-bold" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#telecharger"
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#F77500] px-5 py-3 text-center text-xs font-bold text-white shadow-md"
            onClick={() => setOpen(false)}
          >
            <span>Télécharger</span>
            <Download size={15} className="stroke-[2.5]" />
          </a>
        </div>
      )}
    </header>
  );
}
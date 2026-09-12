"use client"; // Required for App Router

import {FaWhatsapp } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher bouton scroll top
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 👉 WhatsApp action corrigée
const openWhatsapp = () => {
  const message = "Bonjour, je viens de  la plateforme Homeya et je souhaite discuter avec vous.";
  const phone = "237699128531";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-6 z-50 flex flex-col gap-3">
        {/* WHATSAPP */}
        <button
            onClick={openWhatsapp}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
            title="Contact WhatsApp"
        >
            <FaWhatsapp className="text-white text-2xl" />
        </button>
      {/* SCROLL TOP */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#F77500] hover:bg-[#d45c3a] text-white p-3 rounded-full shadow-lg transition"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    // TODO: remplacer par ton appel API
    setTimeout(() => {
      console.log('Données soumises :', formData);

      setIsSending(false);
      setIsSent(true);

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Décorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#123B70]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#F77500]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F77500]/20 bg-[#F77500]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F77500]">
            <MessageCircle size={14} />
            Contactez-nous
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#123B70] sm:text-2xl lg:text-3xl">
            Un projet immobilier ?
            <span className="block text-[#F77500]">
              Parlons-en ensemble.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Une question, un projet d&apos;achat, de location ou de vente ?
            L&apos;équipe HomeYa est là pour vous accompagner.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_20px_70px_-25px_rgba(18,59,112,0.25)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* =========================
              COLONNE INFORMATIONS
          ========================== */}
          <div className="relative overflow-hidden bg-[#123B70] p-7 text-white sm:p-10 lg:p-12">
            {/* Cercles décoratifs */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#F77500]/10 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Petit label */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Notre équipe est disponible
                </span>
              </div>

              {/* Texte */}
              <div>
                <h3 className="max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
                  Votre prochain chez-vous commence par une conversation.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                  Que vous soyez à la recherche d&apos;un logement, propriétaire
                  d&apos;un bien ou professionnel de l&apos;immobilier, nous
                  sommes disponibles pour répondre à vos besoins.
                </p>
              </div>

              {/* Informations */}
              <div className="mt-10 space-y-5">
                {/* Téléphone */}
                <a
                  href="tel:+237600000000"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F77500] text-white shadow-lg shadow-[#F77500]/20">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Téléphone
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      +237 6XX XX XX XX
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@homeya.cm"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      contact@homeya.cm
                    </p>
                  </div>
                </a>

                {/* Localisation */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Localisation
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Cameroun · Douala · Yaoundé
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer confiance */}
              <div className="mt-auto pt-10">
                <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#F77500]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Vos données sont protégées
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/50">
                      Nous respectons votre vie privée et utilisons vos
                      informations uniquement pour répondre à votre demande.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              COLONNE FORMULAIRE
          ========================== */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F77500]">
                    Écrivez-nous
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#123B70]">
                    Envoyez-nous un message
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#123B70]/5 text-[#123B70] sm:flex">
                  <MessageCircle size={22} />
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Remplissez le formulaire et notre équipe vous répondra dans
                les meilleurs délais.
              </p>
            </div>

            {/* Message succès */}
            {isSent && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-sm font-bold text-green-800">
                    Message envoyé !
                  </p>

                  <p className="mt-1 text-xs leading-5 text-green-700">
                    Merci pour votre message. Nous reviendrons vers vous
                    rapidement.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nom / Prénom */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Nom */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Nom
                    <span className="ml-1 text-[#F77500]">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
                  />
                </div>

                {/* Prénom */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Prénom
                    <span className="ml-1 text-[#F77500]">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
                  />
                </div>
              </div>

              {/* Téléphone / Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Téléphone
                    <span className="ml-1 text-[#F77500]">*</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+237 6XX XX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Email
                    <span className="ml-1 text-[#F77500]">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="exemple@domaine.cm"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-gray-700"
                >
                  Votre message
                  <span className="ml-1 text-[#F77500]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre besoin, votre projet immobilier ou posez-nous votre question..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm leading-6 text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
                />
              </div>

              {/* Info disponibilité */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock3 size={15} className="text-[#F77500]" />

                <span>
                  Nous répondons généralement dans les 24 heures.
                </span>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#F77500] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F77500]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e56b00] hover:shadow-xl hover:shadow-[#F77500]/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer mon message

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* Mention légale */}
              <p className="text-center text-[11px] leading-5 text-gray-400">
                En envoyant ce formulaire, vous acceptez que HomeYa utilise
                vos informations pour traiter votre demande.
              </p>
            </form>
          </div>
        </div>

        {/* Mini garanties */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="text-xs font-semibold text-gray-600">
              Réponse rapide
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
            <ShieldCheck size={18} className="text-[#123B70]" />
            <span className="text-xs font-semibold text-gray-600">
              Données sécurisées
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
            <MessageCircle size={18} className="text-[#F77500]" />
            <span className="text-xs font-semibold text-gray-600">
              Accompagnement personnalisé
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}






// components/ContactForm.tsx
// 'use client';

// import React, { useState } from 'react';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Clock3,
//   Mail,
//   MapPin,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
// } from 'lucide-react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsSending(true);

//     // TODO: remplacer par ton appel API
//     setTimeout(() => {
//       console.log('Données soumises :', formData);

//       setIsSending(false);
//       setIsSent(true);

//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         message: '',
//       });

//       setTimeout(() => {
//         setIsSent(false);
//       }, 5000);
//     }, 1000);
//   };

//   return (
//     <section
//       id="contacts"
//       className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
//     >
//       {/* Décorations */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#123B70]/5 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#F77500]/5 blur-3xl" />

//       <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
//           <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F77500]/20 bg-[#F77500]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F77500]">
//             <MessageCircle size={14} />
//             Contactez-nous
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#123B70] sm:text-4xl lg:text-5xl">
//             Un projet immobilier ?
//             <span className="block text-[#F77500]">
//               Parlons-en ensemble.
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
//             Une question, un projet d&apos;achat, de location ou de vente ?
//             L&apos;équipe HomeYa est là pour vous accompagner.
//           </p>
//         </div>

//         {/* Contenu principal */}
//         <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_20px_70px_-25px_rgba(18,59,112,0.25)] lg:grid-cols-[0.85fr_1.15fr]">
//           {/* =========================
//               COLONNE INFORMATIONS
//           ========================== */}
//           <div className="relative overflow-hidden bg-[#123B70] p-7 text-white sm:p-10 lg:p-12">
//             {/* Cercles décoratifs */}
//             <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
//             <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />
//             <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#F77500]/10 blur-2xl" />

//             <div className="relative z-10 flex h-full flex-col">
//               {/* Petit label */}
//               <div className="mb-8">
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
//                   <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
//                   Notre équipe est disponible
//                 </span>
//               </div>

//               {/* Texte */}
//               <div>
//                 <h3 className="max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
//                   Votre prochain chez-vous commence par une conversation.
//                 </h3>

//                 <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
//                   Que vous soyez à la recherche d&apos;un logement, propriétaire
//                   d&apos;un bien ou professionnel de l&apos;immobilier, nous
//                   sommes disponibles pour répondre à vos besoins.
//                 </p>
//               </div>

//               {/* Informations */}
//               <div className="mt-10 space-y-5">
//                 {/* Téléphone */}
//                 <a
//                   href="tel:+237600000000"
//                   className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F77500] text-white shadow-lg shadow-[#F77500]/20">
//                     <Phone size={19} />
//                   </div>

//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
//                       Téléphone
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       +237 6XX XX XX XX
//                     </p>
//                   </div>
//                 </a>

//                 {/* Email */}
//                 <a
//                   href="mailto:contact@homeya.cm"
//                   className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
//                     <Mail size={19} />
//                   </div>

//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
//                       Email
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       contact@homeya.cm
//                     </p>
//                   </div>
//                 </a>

//                 {/* Localisation */}
//                 <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
//                     <MapPin size={19} />
//                   </div>

//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
//                       Localisation
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       Cameroun · Douala · Yaoundé
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer confiance */}
//               <div className="mt-auto pt-10">
//                 <div className="flex items-start gap-3 border-t border-white/10 pt-6">
//                   <ShieldCheck
//                     size={20}
//                     className="mt-0.5 shrink-0 text-[#F77500]"
//                   />

//                   <div>
//                     <p className="text-sm font-semibold">
//                       Vos données sont protégées
//                     </p>

//                     <p className="mt-1 text-xs leading-5 text-white/50">
//                       Nous respectons votre vie privée et utilisons vos
//                       informations uniquement pour répondre à votre demande.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =========================
//               COLONNE FORMULAIRE
//           ========================== */}
//           <div className="p-7 sm:p-10 lg:p-12">
//             <div className="mb-8">
//               <div className="flex items-center justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-[#F77500]">
//                     Écrivez-nous
//                   </p>

//                   <h3 className="mt-2 text-2xl font-extrabold text-[#123B70]">
//                     Envoyez-nous un message
//                   </h3>
//                 </div>

//                 <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#123B70]/5 text-[#123B70] sm:flex">
//                   <MessageCircle size={22} />
//                 </div>
//               </div>

//               <p className="mt-3 text-sm leading-6 text-gray-500">
//                 Remplissez le formulaire et notre équipe vous répondra dans
//                 les meilleurs délais.
//               </p>
//             </div>

//             {/* Message succès */}
//             {isSent && (
//               <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
//                 <CheckCircle2
//                   size={20}
//                   className="mt-0.5 shrink-0 text-green-600"
//                 />

//                 <div>
//                   <p className="text-sm font-bold text-green-800">
//                     Message envoyé !
//                   </p>

//                   <p className="mt-1 text-xs leading-5 text-green-700">
//                     Merci pour votre message. Nous reviendrons vers vous
//                     rapidement.
//                   </p>
//                 </div>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Nom / Prénom */}
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 {/* Nom */}
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="mb-2 block text-xs font-bold text-gray-700"
//                   >
//                     Nom
//                     <span className="ml-1 text-[#F77500]">*</span>
//                   </label>

//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     required
//                     autoComplete="family-name"
//                     placeholder="Votre nom"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
//                   />
//                 </div>

//                 {/* Prénom */}
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="mb-2 block text-xs font-bold text-gray-700"
//                   >
//                     Prénom
//                     <span className="ml-1 text-[#F77500]">*</span>
//                   </label>

//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     required
//                     autoComplete="given-name"
//                     placeholder="Votre prénom"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
//                   />
//                 </div>
//               </div>

//               {/* Téléphone / Email */}
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 {/* Téléphone */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="mb-2 block text-xs font-bold text-gray-700"
//                   >
//                     Téléphone
//                     <span className="ml-1 text-[#F77500]">*</span>
//                   </label>

//                   <div className="relative">
//                     <Phone
//                       size={17}
//                       className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       required
//                       autoComplete="tel"
//                       placeholder="+237 6XX XX XX XX"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-bold text-gray-700"
//                   >
//                     Email
//                     <span className="ml-1 text-[#F77500]">*</span>
//                   </label>

//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       autoComplete="email"
//                       placeholder="exemple@domaine.cm"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-2 block text-xs font-bold text-gray-700"
//                 >
//                   Votre message
//                   <span className="ml-1 text-[#F77500]">*</span>
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   placeholder="Décrivez votre besoin, votre projet immobilier ou posez-nous votre question..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm leading-6 text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#F77500] focus:bg-white focus:ring-4 focus:ring-[#F77500]/10"
//                 />
//               </div>

//               {/* Info disponibilité */}
//               <div className="flex items-center gap-2 text-xs text-gray-400">
//                 <Clock3 size={15} className="text-[#F77500]" />

//                 <span>
//                   Nous répondons généralement dans les 24 heures.
//                 </span>
//               </div>

//               {/* Bouton */}
//               <button
//                 type="submit"
//                 disabled={isSending}
//                 className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#F77500] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F77500]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e56b00] hover:shadow-xl hover:shadow-[#F77500]/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
//               >
//                 {isSending ? (
//                   <>
//                     <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                     Envoi en cours...
//                   </>
//                 ) : (
//                   <>
//                     Envoyer mon message

//                     <ArrowRight
//                       size={18}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </>
//                 )}
//               </button>

//               {/* Mention légale */}
//               <p className="text-center text-[11px] leading-5 text-gray-400">
//                 En envoyant ce formulaire, vous acceptez que HomeYa utilise
//                 vos informations pour traiter votre demande.
//               </p>
//             </form>
//           </div>
//         </div>

//         {/* Mini garanties */}
//         <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
//             <CheckCircle2 size={18} className="text-green-500" />
//             <span className="text-xs font-semibold text-gray-600">
//               Réponse rapide
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
//             <ShieldCheck size={18} className="text-[#123B70]" />
//             <span className="text-xs font-semibold text-gray-600">
//               Données sécurisées
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
//             <MessageCircle size={18} className="text-[#F77500]" />
//             <span className="text-xs font-semibold text-gray-600">
//               Accompagnement personnalisé
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







































// components/ContactForm.tsx
// 'use client';

// import React, { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Données soumises :', formData);
//   };

//   return (
//     <section id="contacts" className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Titre de section */}
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B70] text-center mb-12">
//           Contacts
//         </h2>

//         {/* Bloc Formulaire avec fond gris-bleu clair */}
//         <div className="bg-[#F0F4F8] rounded-[32px] p-8 sm:p-12 border border-gray-100 shadow-sm">
          
//           {/* Badge & Titre avec accentuation Orange */}
//           <div className="mb-8">
//             <span className="inline-block px-3 py-1 bg-white text-gray-600 text-[11px] font-semibold rounded-full mb-4 border border-gray-200/80 shadow-2xl">
//               Contact ou Message
//             </span>

//             <h3 className="text-xl sm:text-2xl font-extrabold text-[#123B70] mb-3">
//               Parlons de votre <span className="text-[#F77500]">projet immobilier.</span>
//             </h3>

//             <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
//               Vous avez un projet immobilier, vous recherchez un bien ou souhaitez publier une annonce ? Laissez-nous un message et notre équipe vous recontactera dans les plus brefs délais.
//             </p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-4">
            
//             {/* Ligne 1 : Nom & Prénom */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Nom *"
//                   value={formData.lastName}
//                   onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F77500] focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Prénom *"
//                   value={formData.firstName}
//                   onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F77500] focus:border-transparent transition-all"
//                 />
//               </div>
//             </div>

//             {/* Ligne 2 : Téléphone & Email */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {/* Champ téléphone avec indicatif du Cameroun */}
//               <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#F77500]">
//                 <span className="px-3 py-3 bg-gray-50 text-gray-500 text-xs flex items-center border-r border-gray-200 font-medium">
//                   🇨🇲 +237
//                 </span>
//                 <input
//                   type="tel"
//                   required
//                   placeholder="6XX XX XX XX *"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   className="w-full px-3 py-3 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   required
//                   placeholder="Email *"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F77500] focus:border-transparent transition-all"
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <textarea
//                 required
//                 rows={5}
//                 placeholder="Votre Message *"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F77500] focus:border-transparent transition-all resize-none"
//               ></textarea>
//             </div>

//             {/* Bouton Envoyer */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 className="w-full py-3.5 bg-[#F77500] hover:bg-[#e06a00] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
//               >
//                 Envoyer
//               </button>
//             </div>

//           </form>

//         </div>

//       </div>
//     </section>
//   );
// }
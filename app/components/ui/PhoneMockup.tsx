import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="phone-frame phone-glow animate-float">
      {/* Dynamic Island / notch */}
      <div className="flex justify-center pt-2 pb-0 bg-[#111]">
        <div className="w-[72px] h-[22px] bg-[#0a0a0a] rounded-b-2xl" />
      </div>

      {/* Screen */}
      <div className="bg-[#0f0f0f]">
        {/* Tabs */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0a0a0a] border-b border-white/5">
          <span className="text-orange text-xs font-semibold border-b-2 border-orange pb-0.5 font-display">
            Pour toi
          </span>
          <span className="text-white/40 text-xs">Explorer</span>
          <span className="text-white/40 text-xs">Abonnements</span>
          <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Property image */}
        <div className="relative w-full h-44 overflow-hidden">
          <RoomIllustration />
          {/* Owner avatar */}
          <div className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-orange overflow-hidden">
            <Image
              src="https://i.pravatar.cc/32?img=5"
              alt="Propriétaire"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          {/* Action buttons */}
          <div className="absolute right-2 bottom-2 flex flex-col gap-2 items-center">
            <ActionBtn icon="heart" count="2,1K" />
            <ActionBtn icon="message" count="156" />
            <ActionBtn icon="share" count="342" />
          </div>
        </div>

        {/* Property info */}
        <div className="px-3 pt-3 pb-1 bg-[#0f0f0f]">
          <p className="text-white text-sm font-semibold font-display">
            Appartement moderne
          </p>
          <p className="text-white/40 text-[10px] mb-1.5">Cocody, Abidjan</p>
          <p className="text-orange font-bold text-sm mb-2">350 000 FCFA / mois</p>
          <div className="flex gap-3 text-white/40 text-[10px] pb-2 border-b border-white/5">
            <span>🛏 2 Chambres</span>
            <span>🚿 2 Salles de bain</span>
            <span>📐 85 m²</span>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#0a0a0a]">
          <NavItem icon="home" label="Accueil" active />
          <NavItem icon="heart" label="Favoris" />
          <div className="w-9 h-9 bg-orange rounded-full flex items-center justify-center shadow-orange-sm">
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <NavItem icon="message" label="Messages" />
          <NavItem icon="user" label="Profil" />
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-1.5 bg-[#0a0a0a]">
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────── */

function ActionBtn({ icon, count }: { icon: string; count: string }) {
  const iconMap: Record<string, JSX.Element> = {
    heart: (
      <svg width="13" height="13" fill="white" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    message: (
      <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    share: (
      <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  };
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-full px-1.5 py-1 flex flex-col items-center gap-0.5">
      {iconMap[icon]}
      <span className="text-white text-[8px] leading-none">{count}</span>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  const color = active ? "#FF6B00" : "rgba(255,255,255,0.35)";
  const icons: Record<string, JSX.Element> = {
    home: (
      <svg width="15" height="15" fill={active ? "#FF6B00" : "none"} stroke={color} strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    heart: (
      <svg width="15" height="15" fill="none" stroke={color} strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    message: (
      <svg width="15" height="15" fill="none" stroke={color} strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    user: (
      <svg width="15" height="15" fill="none" stroke={color} strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  };
  return (
    <div className="flex flex-col items-center gap-0.5">
      {icons[icon]}
      <span className={`text-[8px] ${active ? "text-orange" : "text-white/35"}`}>
        {label}
      </span>
    </div>
  );
}

/* ── SVG Room Illustration ──────────────────────────────── */
function RoomIllustration() {
  return (
    <svg
      width="264"
      height="176"
      viewBox="0 0 264 176"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d1a0a" />
          <stop offset="50%" stopColor="#1a0f05" />
          <stop offset="100%" stopColor="#0d0804" />
        </linearGradient>
        <linearGradient id="winGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87ceeb" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4682b4" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="floorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0e06" />
          <stop offset="100%" stopColor="#251505" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="264" height="176" fill="url(#roomBg)" />

      {/* Window */}
      <rect x="82" y="8" width="100" height="88" rx="4" fill="url(#winGrad)" opacity="0.65" />
      <line x1="132" y1="8" x2="132" y2="96" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1="82" y1="52" x2="182" y2="52" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

      {/* Curtains */}
      <path d="M82 8 Q66 52 82 96" stroke="rgba(255,220,180,0.35)" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M182 8 Q198 52 182 96" stroke="rgba(255,220,180,0.35)" strokeWidth="14" fill="none" strokeLinecap="round" />

      {/* Floor */}
      <rect x="0" y="155" width="264" height="21" fill="url(#floorGrad)" />

      {/* Sofa body */}
      <rect x="28" y="118" width="208" height="40" rx="8" fill="#3d2012" />
      <rect x="28" y="118" width="208" height="18" rx="5" fill="#4a2a18" />

      {/* Cushions */}
      <rect x="44" y="122" width="50" height="14" rx="5" fill="#5a3420" />
      <rect x="107" y="122" width="50" height="14" rx="5" fill="#5a3420" />
      <rect x="170" y="122" width="50" height="14" rx="5" fill="#5a3420" />

      {/* Lamp */}
      <line x1="226" y1="70" x2="226" y2="118" stroke="#8B6914" strokeWidth="2" />
      <ellipse cx="226" cy="64" rx="16" ry="8" fill="#D4AF37" opacity="0.85" />
      <path d="M210 64 Q226 72 242 64" fill="rgba(255,200,80,0.15)" />

      {/* Plant pot */}
      <rect x="14" y="104" width="18" height="22" rx="3" fill="#8B5E3C" />
      <ellipse cx="23" cy="100" rx="17" ry="19" fill="#2d5a27" opacity="0.85" />
      <ellipse cx="13" cy="94" rx="11" ry="13" fill="#3a6e33" opacity="0.7" />
      <ellipse cx="33" cy="92" rx="10" ry="14" fill="#2d5a27" opacity="0.7" />

      {/* Coffee table */}
      <rect x="90" y="142" width="84" height="10" rx="3" fill="#2a1a0a" />
      <line x1="102" y1="152" x2="102" y2="160" stroke="#2a1a0a" strokeWidth="3" />
      <line x1="162" y1="152" x2="162" y2="160" stroke="#2a1a0a" strokeWidth="3" />
    </svg>
  );
}

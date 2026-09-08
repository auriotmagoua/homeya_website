import type { Step } from "@/types";

interface StepPhoneProps {
  variant: Step["phoneVariant"];
}

export default function StepPhone({ variant }: StepPhoneProps) {
  return (
    <div className="w-36 h-64 bg-gray-900 rounded-2xl border border-gray-700/60 overflow-hidden shadow-xl shadow-black/40">
      {/* Notch */}
      <div className="h-5 bg-gray-800 flex justify-center items-end pb-1">
        <div className="w-14 h-2 bg-gray-700 rounded-full" />
      </div>
      {/* Screen content */}
      <div className="w-full h-36">{screenMap[variant]}</div>
      {/* Info lines */}
      <div className="px-2.5 py-2.5 space-y-1.5">
        <div className="h-2 bg-gray-700 rounded w-full" />
        <div className="h-2 bg-gray-700 rounded w-3/4" />
        <div className="h-2 bg-gray-600/60 rounded w-1/2 mt-2" />
      </div>
    </div>
  );
}

const screenMap: Record<Step["phoneVariant"], JSX.Element> = {
  explore: (
    <svg width="144" height="144" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
      <rect width="144" height="144" fill="#1e2a4a" />
      <rect x="8" y="8" width="128" height="76" rx="4" fill="#2a3a5c" opacity="0.7" />
      {/* Property thumbnails */}
      <rect x="18" y="68" width="38" height="16" rx="3" fill="#1a2a40" />
      <rect x="62" y="68" width="70" height="16" rx="3" fill="#1a2a40" />
      {/* Grid of images */}
      <circle cx="28" cy="32" rx="18" fill="#3a4a7c" opacity="0.55" />
      <circle cx="72" cy="32" rx="18" fill="#4a5a8c" opacity="0.55" />
      <circle cx="116" cy="32" rx="18" fill="#3a4a7c" opacity="0.55" />
      {/* Bottom bar */}
      <rect x="8" y="90" width="128" height="12" rx="3" fill="#1a2a40" opacity="0.6" />
      <rect x="8" y="108" width="128" height="8" rx="3" fill="#1a2a40" opacity="0.4" />
    </svg>
  ),
  save: (
    <svg width="144" height="144" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
      <rect width="144" height="144" fill="#2d1a0a" />
      {/* Background glow */}
      <circle cx="72" cy="72" r="50" fill="rgba(255,107,0,0.12)" />
      {/* Heart */}
      <circle cx="72" cy="60" r="34" fill="rgba(255,107,0,0.18)" stroke="#FF6B00" strokeWidth="1.5" />
      <path
        d="M72 80 C72 80 52 68 52 56 C52 49.4 57.4 44 64 44 C67.2 44 72 47 72 47 C72 47 76.8 44 80 44 C86.6 44 92 49.4 92 56 C92 68 72 80 72 80Z"
        fill="#FF6B00"
      />
      {/* Small property cards below */}
      <rect x="16" y="102" width="50" height="30" rx="4" fill="#3d2012" opacity="0.7" />
      <rect x="78" y="102" width="50" height="30" rx="4" fill="#3d2012" opacity="0.7" />
    </svg>
  ),
  contact: (
    <svg width="144" height="144" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
      <rect width="144" height="144" fill="#0e1f14" />
      <circle cx="72" cy="60" r="34" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5" />
      {/* Avatar */}
      <circle cx="72" cy="52" r="16" fill="rgba(34,197,94,0.35)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" />
      <path d="M48 78 C48 68 59 62 72 62 C85 62 96 68 96 78" fill="rgba(34,197,94,0.2)" />
      {/* Chat bubbles */}
      <rect x="24" y="92" width="64" height="16" rx="8" fill="rgba(34,197,94,0.25)" />
      <rect x="56" y="114" width="64" height="16" rx="8" fill="rgba(255,107,0,0.25)" />
    </svg>
  ),
};

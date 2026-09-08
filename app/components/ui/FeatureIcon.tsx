import type { Feature } from "@/types";

interface FeatureIconProps {
  icon: Feature["icon"];
  className?: string;
}

export default function FeatureIcon({ icon, className = "" }: FeatureIconProps) {
  const icons: Record<Feature["icon"], JSX.Element> = {
    shield: (
      <svg width="20" height="20" fill="none" stroke="#FF6B00" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    zap: (
      <svg width="20" height="20" fill="none" stroke="#FF6B00" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    play: (
      <svg width="20" height="20" fill="none" stroke="#FF6B00" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="#FF6B00" stroke="none" />
      </svg>
    ),
    globe: (
      <svg width="20" height="20" fill="none" stroke="#FF6B00" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  };

  return (
    <div className={`w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center ${className}`}>
      {icons[icon]}
    </div>
  );
}

import type { StoreType } from "../../types";

interface StoreButtonProps {
  store: StoreType;
  className?: string;
}

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M3.18 23.76c.35.2.74.24 1.12.12l12.5-7.22-2.62-2.62-11 11zm16.31-9.65L17.07 12l2.42-2.11-10.5-6.06a1.28 1.28 0 0 0-1.3-.01L19.49 14.1zM2.13 1.34A1.28 1.28 0 0 0 1.5 2.5v19a1.28 1.28 0 0 0 .63 1.26l.09.05L13.29 12 2.22 1.29l-.09.05zm12.13 8.93L3.18.47c-.35-.2-.74-.24-1.12-.12L13.38 11.6l.88-.88z" />
  </svg>
);

export default function StoreButton({ store, className = "" }: StoreButtonProps) {
  const isApple = store === "apple";
  return (
    <a
      href="#"
      className={`store-btn flex items-center gap-3 px-5 py-3 rounded-xl text-white ${className}`}
    >
      {isApple ? <AppleIcon /> : <GoogleIcon />}
      <div>
        <div className="text-white/50 text-[10px] leading-none">
          {isApple ? "Télécharger sur" : "Disponible sur"}
        </div>
        <div className="text-white text-sm font-semibold mt-0.5">
          {isApple ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}

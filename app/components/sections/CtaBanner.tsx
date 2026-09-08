import StoreButton from "../../components/ui/StoreButton";

export default function CtaBanner() {
  return (
    <section className="py-6 px-6 max-w-7xl mx-auto mb-16">
      <div className="cta-bg rounded-3xl overflow-hidden px-10 py-14 flex flex-col md:flex-row items-center gap-8 justify-between relative">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none" />

        {/* Icon */}
        <div className="flex-shrink-0 relative z-10">
          <div className="w-16 h-16 bg-orange rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,107,0,0.4)]">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
              <path d="M9 21V12h6v9" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
            Prêt à vivre dans le logement
            <br />
            <span className="text-orange">qui vous ressemble ?</span>
          </h2>
          <p className="text-white/55 text-sm">
            Rejoignez des milliers d&apos;utilisateurs et téléchargez HOMEYA.
          </p>
        </div>

        {/* Store buttons */}
        <div className="flex-shrink-0 flex flex-col gap-3 relative z-10">
          <StoreButton store="apple" className="min-w-[180px]" />
          <StoreButton store="google" className="min-w-[180px]" />
        </div>
      </div>
    </section>
  );
}

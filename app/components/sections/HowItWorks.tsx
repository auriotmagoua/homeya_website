import SectionTag from "../../components/ui/SectionTag";
import StepPhone from "../../components/ui/StepPhone";
import { STEPS } from "../../lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <SectionTag className="text-center block">Simple et rapide</SectionTag>
          <h2 className="font-display text-4xl font-bold text-gray-900">
            Comment ça{" "}
            <span className="text-orange underline-orange">marche ?</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Dashed connector (desktop) */}
          <div className="hidden md:block absolute top-[5.5rem] left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] step-dashed-line" />

          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Mini phone */}
              <StepPhone variant={step.phoneVariant} />

              {/* Step number badge */}
              <div className="w-9 h-9 bg-orange rounded-full text-white font-bold font-display text-sm flex items-center justify-center mt-5 mb-3 shadow-orange-sm">
                {step.number}
              </div>

              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

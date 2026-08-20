import { ChevronRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[640px] md:h-[720px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/14169042/pexels-photo-14169042.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Golden sunrise over the KwaZulu-Natal coastline with waves along the Durban beachfront"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/55 to-primary-900/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center pt-16">
          <span className="inline-block font-body text-xs md:text-sm font-bold tracking-widest uppercase text-accent-500 mb-5">
            KwaZulu-Natal Space Design Competition
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
            Designing the Future from KwaZulu-Natal
          </h1>
          <p className="mt-6 font-body text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            KZNsdc challenges high school learners across the province to design tomorrow's
            space settlements, blending engineering, science and bold imagination.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#notify"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-heading text-sm md:text-base font-bold text-primary-900 shadow-lg transition-all duration-200 hover:bg-accent-400 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Notified for 2027
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 font-heading text-sm md:text-base font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              <PlayCircle className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 z-10 rounded-md bg-primary-900/60 px-3 py-1.5 backdrop-blur-sm">
          <p className="font-body text-xs text-white/90 italic">Durban Beaches</p>
        </div>
      </div>
    </section>
  );
}

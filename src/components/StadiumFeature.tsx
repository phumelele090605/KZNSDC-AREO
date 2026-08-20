export default function StadiumFeature() {
  return (
    <section className="relative">
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/37857043/pexels-photo-37857043.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Aerial view of Moses Mabhida Stadium in Durban showing its iconic arch and skywalk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-end pb-12">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-accent-500 mb-3">
            Where Durban Meets Ambition
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white max-w-xl leading-tight">
            Hosted in the Shadow of an Icon
          </h2>
          <p className="mt-4 font-body text-white/85 max-w-xl leading-relaxed">
            KZNsdc events and showcases take place across Durban, the same city home to the
            soaring arch and skywalk of Moses Mabhida Stadium.
          </p>
          <p className="mt-4 font-body text-xs text-white/80 italic">
            Moses Mabhida Stadium &ndash; Durban Landmark
          </p>
        </div>
      </div>
    </section>
  );
}

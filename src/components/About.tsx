import { Globe2, Rocket, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: Rocket,
    title: 'Engineering Excellence',
    text: 'Learners design functional space settlement concepts, applying real engineering and scientific principles.',
  },
  {
    icon: Users,
    title: 'Teamwork & Mentorship',
    text: 'Teams are guided by industry mentors and educators throughout the design and build process.',
  },
  {
    icon: Globe2,
    title: 'National & Global Reach',
    text: "KZNsdc connects KwaZulu-Natal's brightest young minds to South Africa's national competition and beyond.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="font-body text-sm font-bold tracking-widest uppercase text-primary-500">
              Our Mission
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-extrabold text-primary-700 leading-tight">
              Empowering KwaZulu-Natal's Next Generation of Innovators
            </h2>
            <p className="mt-6 font-body text-ink/80 leading-relaxed">
              KZNsdc brings the spirit of the South African Space Design Competition
              (ZASDC) to KwaZulu-Natal, inviting learners in Grades 8&ndash;12 to imagine,
              design and defend bold space settlement concepts alongside engineers,
              scientists and educators from across the province.
            </p>
            <p className="mt-4 font-body text-ink/80 leading-relaxed">
              Through hands-on workshops and a province-wide design challenge, we build
              STEM confidence, teamwork and a lasting connection to South Africa's growing
              space industry.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7869239/pexels-photo-7869239.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
              alt="Students collaborating on an engineering design project"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-accent-500 rounded-xl px-6 py-4 shadow-lg">
              <p className="font-heading text-2xl font-extrabold text-primary-900">Grades 8-12</p>
              <p className="font-body text-xs font-semibold text-primary-900/80">Open to all KZN learners</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-sand-300 bg-sand-100 p-7 transition-shadow duration-200 hover:shadow-lg"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-700 mb-5">
                <Icon className="w-6 h-6 text-accent-500" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary-700 mb-2">{title}</h3>
              <p className="font-body text-sm text-ink/75 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

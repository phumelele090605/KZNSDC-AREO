import { Cpu, GraduationCap, Presentation, Trophy } from 'lucide-react';

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: 'Workshops',
    text: 'Hands-on sessions covering space science, structural design and mission planning.',
  },
  {
    icon: Cpu,
    title: 'Design Challenge',
    text: 'Teams develop a full space settlement concept using real engineering constraints.',
  },
  {
    icon: Presentation,
    title: 'Mentorship',
    text: 'Guidance from engineers, scientists and educators throughout the competition.',
  },
  {
    icon: Trophy,
    title: 'National Recognition',
    text: 'Top KZN teams advance to represent the province at the national ZASDC finals.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-body text-sm font-bold tracking-widest uppercase text-primary-500">
            What to Expect
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-extrabold text-primary-700 leading-tight">
            Our Programs
          </h2>
          <p className="mt-4 font-body text-ink/75 leading-relaxed">
            Workshops, competitions and mentorship designed to grow the next generation of
            engineers and scientists.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-7 shadow-sm border border-sand-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-700 mb-6 transition-colors duration-200 group-hover:bg-accent-500">
                <Icon className="w-7 h-7 text-accent-500 transition-colors duration-200 group-hover:text-primary-900" strokeWidth={2} />
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

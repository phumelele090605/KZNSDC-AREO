import { Mail, MapPin, Phone } from 'lucide-react';

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Durban, KwaZulu-Natal, South Africa' },
  { icon: Mail, label: 'info@kznsdc.org' },
  { icon: Phone, label: '+27 31 123 4567' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-sand-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-body text-sm font-bold tracking-widest uppercase text-primary-500">
            Get in Touch
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-extrabold text-primary-700 leading-tight">
            Contact KZNsdc
          </h2>
          <p className="mt-4 font-body text-ink/75 leading-relaxed">
            Have a question about the competition, mentorship or partnering with us? Reach out.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-4 rounded-2xl bg-white border border-sand-300 p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-700">
                <Icon className="w-6 h-6 text-accent-500" strokeWidth={2} />
              </span>
              <p className="font-body text-sm font-semibold text-primary-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

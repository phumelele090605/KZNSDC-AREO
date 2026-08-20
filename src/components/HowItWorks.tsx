const STEPS = [
  {
    number: '01',
    title: 'Register Your Team',
    text: 'Learners in Grades 8-12 form teams and register through their school or independently.',
  },
  {
    number: '02',
    title: 'Design & Build',
    text: 'Teams attend workshops and develop their space settlement concept with mentor support.',
  },
  {
    number: '03',
    title: 'Present & Compete',
    text: 'Teams present their designs to a panel of judges at the KZN showcase event in Durban.',
  },
  {
    number: '04',
    title: 'Advance to Nationals',
    text: "Winning teams represent KwaZulu-Natal at South Africa's national ZASDC finals.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-body text-sm font-bold tracking-widest uppercase text-primary-500">
            The Journey
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-extrabold text-primary-700 leading-tight">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-700 text-accent-500 font-heading text-xl font-extrabold mb-6 mx-auto sm:mx-0">
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-700 mb-2 text-center sm:text-left">
                {step.title}
              </h3>
              <p className="font-body text-sm text-ink/75 leading-relaxed text-center sm:text-left">
                {step.text}
              </p>
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-sand-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

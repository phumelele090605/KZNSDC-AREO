import { AlarmClock } from 'lucide-react';

export default function ApplicationsBanner() {
  return (
    <div className="bg-accent-500 border-b border-accent-600 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <AlarmClock className="w-5 h-5 text-primary-900 flex-shrink-0" strokeWidth={2.5} />
        <p className="font-body text-sm md:text-base font-bold text-primary-900">
          Applications for 2026 are CLOSED.{' '}
          <span className="font-semibold">Applications for 2027 open next year.</span>
        </p>
      </div>
    </div>
  );
}

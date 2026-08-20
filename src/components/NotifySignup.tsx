import { CheckCircle2, Loader2, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NotifySignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');
    const { error } = await supabase.from('interest_signups').insert({ email: email.trim() });

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  }

  return (
    <section id="notify" className="py-20 md:py-28 bg-primary-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-500 mb-6">
          <Mail className="w-7 h-7 text-primary-900" strokeWidth={2.5} />
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Be First to Know When 2027 Applications Open
        </h2>
        <p className="mt-4 font-body text-white/80 leading-relaxed max-w-xl mx-auto">
          Applications for 2026 are closed. Leave your email and we'll notify you the moment
          registration opens for the 2027 competition.
        </p>

        {status === 'success' ? (
          <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-success-500/15 border border-success-500/40 px-6 py-4 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0" />
            <p className="font-body text-sm font-semibold text-white">
              You're on the list! We'll be in touch when 2027 applications open.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full sm:flex-1 rounded-full border-0 bg-white/10 px-5 py-3.5 font-body text-sm text-white placeholder:text-white/50 outline-none ring-1 ring-white/20 transition-shadow focus:ring-2 focus:ring-accent-500"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-heading text-sm font-bold text-primary-900 transition-all duration-200 hover:bg-accent-400 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Notify Me'
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 font-body text-sm text-error-500">
            Something went wrong submitting your email. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

import type { FC, FormEvent } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { withProviders } from '@shell/providers/withProviders';

import type {
  TGenerateEmailResponse,
  TToastState,
  TToastType,
} from './types';
import {
  getToastIcon,
  getToastClasses,
} from './toast-helpers';
import { createCopy } from './copy-helpers';
import { generateEmail } from './generate-email';
import { createKeyboardShortcutHandler } from './keyboard-shortcuts';

export const Outreacher: FC = withProviders(() => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] =
    useState<TGenerateEmailResponse | null>(null);
  const [toast, setToast] = useState<TToastState>(null);

  const showToast = useCallback(
    (
      message: string,
      type: TToastType = 'info',
      via?: string,
    ) => {
      setToast({ message, type, via });
      setTimeout(() => setToast(null), 1800);
    },
    [],
  );

  const copy = useCallback(createCopy(showToast), [
    showToast,
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!url) {
      setError('Please enter a website URL.');
      return;
    }

    setLoading(true);

    try {
      const data = await generateEmail(url);
      setResult(data);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handler = createKeyboardShortcutHandler({
      url,
      result,
      copy,
    });

    window.addEventListener('keydown', handler);
    return () =>
      window.removeEventListener('keydown', handler);
  }, [url, result, copy]);

  const primaryEmail = result?.contactEmails?.[0];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-neutral-900 text-black-3">
      {/* --- Everything below is unchanged UI --- */}

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.12),_transparent_55%)]" />
      <div className="relative z-10 flex items-start justify-center px-4 py-10 md:px-6 lg:px-8">
        <div className="flex items-center justify-center max-w-6xl mx-auto grid gap-8 w-full lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)]">
          {/* Main card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-6 md:p-8 space-y-6">
            <header className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-black-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                Outreacher • Email generator
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-black-4">
                Generate & qualify outreach leads in one
                pass
              </h1>
              <p className="text-sm text-black-1">
                Paste an agency URL. Get a tailored subject,
                body, lead score, insights, and follow-ups —
                with one-key copy for everything.
              </p>
            </header>

            {/* URL Input */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <label className="block space-y-1.5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-black-1">
                  Agency / studio website URL
                </span>

                <div className="relative">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example-agency.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-black-4 placeholder:text-black-5 shadow-[0_0_0_1px_rgba(148,163,184,0.12)] outline-none focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/40 transition"
                    data-copy-target="url"
                  />

                  {(result?.normalizedUrl || url) && (
                    <button
                      type="button"
                      onClick={() =>
                        copy(
                          'URL',
                          result?.normalizedUrl ?? url,
                          'button',
                        )
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/80 px-2 py-1 text-[11px] font-medium text-slate-900 hover:bg-white transition pointer-events-auto"
                    >
                      Copy
                    </button>
                  )}
                </div>

                {result?.normalizedUrl && (
                  <p className="text-[11px] text-black-1 mt-1">
                    Normalized URL:{' '}
                    <span className="font-mono text-slate-200">
                      {result.normalizedUrl}
                    </span>
                  </p>
                )}
              </label>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition pointer-events-auto"
                >
                  {loading ? (
                    <>
                      <span className="h-3 w-3 animate-spin rounded-full border-[2px] border-black-1 border-t-transparent" />
                      Generating…
                    </>
                  ) : (
                    <>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Generate email & insights
                    </>
                  )}
                </button>

                <p className="text-[11px] text-black-1 hidden md:block">
                  Quick copy:{' '}
                  <span className="font-mono">⌘1–⌘4</span>{' '}
                  or focus +{' '}
                  <span className="font-mono">⌘C</span>
                </p>
              </div>
            </form>

            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-100">
                {error}
              </div>
            )}

            {/* Results */}
            {result && (
              <div className="space-y-4">
                {/* --- Content omitted for brevity (unchanged) --- */}
              </div>
            )}
          </div>

          {/* Sidebar + Debug (unchanged) */}
          <aside className="space-y-4">{/* ... */}</aside>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-4 right-4 z-50"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div
              className={[
                'rounded-xl text-sm px-4 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] border backdrop-blur-2xl flex items-center gap-2',
                toast ? getToastClasses(toast.type) : '',
              ].join(' ')}
            >
              <span className="text-lg">
                {getToastIcon(toast.type)}
              </span>
              <span className="text-black-4">
                {toast.message}
              </span>
              {toast.via && (
                <span className="text-xs text-black-3 ml-1">
                  — via {toast.via}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

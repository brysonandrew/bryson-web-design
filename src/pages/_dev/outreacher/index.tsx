import type { FC, FormEvent } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { withProviders } from '@shell/providers/withProviders';

import type {
  TGenerateEmailResponse,
  TToastState,
  TToastType,
} from './types';
import { createCopy } from './copy-helpers';
import { generateEmail } from './generate-email';
import { createKeyboardShortcutHandler } from './keyboard-shortcuts';
import { OutreacherToast } from '@pages/_dev/outreacher/toast';
import { LeadPanel } from '@pages/_dev/outreacher/lead-panel';
import { BusinessSearchPanel } from '@pages/_dev/outreacher/business-search-panel';

export const Outreacher: FC = withProviders(() => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] =
    useState<TGenerateEmailResponse | null>(null);
  const [toast, setToast] = useState<TToastState>(null);

  // Email preview state (editable)
  const [emailPreviewSubject, setEmailPreviewSubject] =
    useState<string>('');
  const [emailPreviewBody, setEmailPreviewBody] =
    useState<string>('');

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

  // Sync preview subject/body when a new result arrives
  useEffect(() => {
    if (result) {
      setEmailPreviewSubject(result.subject ?? '');
      setEmailPreviewBody(result.body ?? '');
    } else {
      setEmailPreviewSubject('');
      setEmailPreviewBody('');
    }
  }, [result]);

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

  // Pick primary email from contactEmails, ignore .webp etc.
  const primaryEmail =
    result?.contactEmails?.find((value) =>
      value.includes('@'),
    ) ?? '';

  const mailtoAddress = primaryEmail || 'hello@agency.com';

  const mailtoHref =
    mailtoAddress || emailPreviewSubject || emailPreviewBody
      ? `mailto:${encodeURIComponent(
          mailtoAddress,
        )}?subject=${encodeURIComponent(
          emailPreviewSubject || '',
        )}&body=${encodeURIComponent(
          emailPreviewBody || '',
        )}`
      : '';

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-dark to-black text-white-8">
      {/* Soft radial accents using primary / accent */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(113,174,225,0.22),_transparent_55%)]" />
      <div className="column-stretch gap-8 px-4 py-10 md:px-6 lg:px-8">
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full gap-8">
            <BusinessSearchPanel onUrl={setUrl} />
          </div>
        </div>
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full gap-8 lg:grid lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]">
            {/* Main card (parent of LeadPanel) */}
            <div className="rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-6 md:p-8 space-y-6">
              <header className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white-03 bg-black-3 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gray-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-plus shadow-[0_0_0_4px_rgba(74,222,128,0.35)]" />
                  Outreacher • Email generator
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Generate & qualify outreach leads in one
                  pass
                </h1>
                <p className="text-sm text-gray-5">
                  Paste an agency URL. Get a tailored
                  subject, body, lead score, insights, and
                  follow-ups — with one-key copy for
                  everything.
                </p>
              </header>

              {/* URL Input */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <label className="block space-y-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-gray-5">
                    Agency / studio website URL
                  </span>

                  <div className="relative">
                    <input
                      type="url"
                      value={url}
                      onChange={(e) =>
                        setUrl(e.target.value)
                      }
                      placeholder="https://example-agency.com"
                      className="w-full rounded-xl border border-white-03 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-gray-5 shadow-[0_0_0_1px_rgba(0,0,0,0.35)] outline-none focus:border-primary focus:ring-2 focus:ring-primary-03 transition"
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
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg border border-white-03 bg-white-08 px-2 py-1 text-[11px] font-medium text-black hover:bg-white transition pointer-events-auto"
                      >
                        Copy
                      </button>
                    )}
                  </div>

                  {result?.normalizedUrl && (
                    <p className="text-[11px] text-gray-5 mt-1">
                      Normalized URL:{' '}
                      <a
                        href={result.normalizedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-secondary underline underline-offset-4 decoration-primary-04"
                      >
                        {result.normalizedUrl}
                      </a>
                    </p>
                  )}
                </label>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary-08 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-05 transition pointer-events-auto"
                  >
                    {loading ? (
                      <>
                        <span className="h-3 w-3 animate-spin rounded-full border-[2px] border-white-6 border-t-transparent" />
                        Generating…
                      </>
                    ) : (
                      <>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white-08" />
                        Generate email & insights
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-5 hidden md:block">
                    Quick copy:{' '}
                    <span className="font-mono text-white-8">
                      ⌘1–⌘4
                    </span>{' '}
                    or focus +{' '}
                    <span className="font-mono text-white-8">
                      ⌘C
                    </span>
                  </p>
                </div>
              </form>

              {error && (
                <div className="rounded-xl border border-red bg-red/10 px-3.5 py-2.5 text-sm text-white">
                  {error}
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="space-y-4">
                  <LeadPanel data={result} />
                </div>
              )}
            </div>

            {/* Sidebar: Email preview + mailto composer */}
            <aside className="space-y-4 hidden lg:block">
              <div className="rounded-2xl border border-white-02 bg-black-3 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-2xl p-4 md:p-5 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
                      Email preview
                    </p>
                    <p className="text-sm text-white-9">
                      Subject & body editor
                    </p>
                  </div>
                  {mailtoHref && (
                    <a
                      href={mailtoHref}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full bg-primary-02 px-3 py-1 text-[11px] font-medium text-primary hover:bg-primary-03 border border-primary-04"
                      rel="noreferrer"
                    >
                      Open mail client
                    </a>
                  )}
                </div>

                {/* To */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
                      To
                    </span>
                    {primaryEmail && (
                      <button
                        type="button"
                        onClick={() =>
                          copy(
                            'Primary contact email',
                            primaryEmail,
                            'button',
                          )
                        }
                        className="rounded-lg border border-white-03 bg-dark-06 px-2 py-0.5 text-[11px] text-white-8 hover:bg-dark-05"
                      >
                        Copy email
                      </button>
                    )}
                  </div>
                  <p className="text-xs font-mono text-white-8 break-all">
                    {primaryEmail || 'hello@agency.com'}
                  </p>
                </div>

                {/* Subject textarea */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
                      Subject
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copy(
                          'Subject',
                          emailPreviewSubject,
                          'button',
                        )
                      }
                      className="rounded-lg border border-white-03 bg-dark-06 px-2 py-0.5 text-[11px] text-white-8 hover:bg-dark-05"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    value={emailPreviewSubject}
                    onChange={(e) =>
                      setEmailPreviewSubject(e.target.value)
                    }
                    rows={2}
                    className="w-full rounded-xl border border-white-03 bg-dark-08 px-3 py-2 text-sm text-white-9 placeholder:text-gray-5 outline-none focus:border-primary focus:ring-2 focus:ring-primary-03 resize-none"
                    placeholder="Email subject…"
                  />
                </div>

                {/* Body textarea */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
                      Body
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copy(
                          'Email body',
                          emailPreviewBody,
                          'button',
                        )
                      }
                      className="rounded-lg border border-white-03 bg-dark-06 px-2 py-0.5 text-[11px] text-white-8 hover:bg-dark-05"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    value={emailPreviewBody}
                    onChange={(e) =>
                      setEmailPreviewBody(e.target.value)
                    }
                    rows={10}
                    className="w-full rounded-xl border border-white-03 bg-dark-08 px-3 py-2 text-sm text-white-9 placeholder:text-gray-5 outline-none focus:border-primary focus:ring-2 focus:ring-primary-03"
                    placeholder="Email body…"
                  />
                </div>

                {/* mailto link preview */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
                      mailto link
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copy(
                          'mailto link',
                          mailtoHref,
                          'button',
                        )
                      }
                      className="rounded-lg border border-white-03 bg-dark-06 px-2 py-0.5 text-[11px] text-white-8 hover:bg-dark-05"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    readOnly
                    value={
                      mailtoHref ||
                      'mailto:hello@agency.com?subject=...&body=...'
                    }
                    rows={3}
                    className="w-full rounded-xl border border-white-03 bg-black-2 px-3 py-2 text-[11px] font-mono text-white-8 outline-none"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && <OutreacherToast toast={toast} />}
      </AnimatePresence>
    </div>
  );
});

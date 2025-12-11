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
import { BusinessSearchPanel } from '@pages/_dev/outreacher/business-search-panel';
import { TimezoneTimeline } from '@pages/_dev/outreacher/timezone-timeline';
import { EmailPreviewSidebar } from '@pages/_dev/outreacher/email-preview-sidebar';
import { UrlForm } from '@pages/_dev/outreacher/url-form';

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
            <TimezoneTimeline />
          </div>
        </div>
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full gap-8">
            <BusinessSearchPanel onUrl={setUrl} />
          </div>
        </div>
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full gap-8 lg:grid lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]">
            <UrlForm
              url={url}
              loading={loading}
              error={error}
              result={result}
              onUrlChange={setUrl}
              onSubmit={handleSubmit}
              copy={copy}
            />
            <EmailPreviewSidebar
              primaryEmail={primaryEmail}
              mailtoHref={mailtoHref}
              emailPreviewSubject={emailPreviewSubject}
              emailPreviewBody={emailPreviewBody}
              setEmailPreviewSubject={
                setEmailPreviewSubject
              }
              setEmailPreviewBody={setEmailPreviewBody}
              copy={copy}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toast && <OutreacherToast toast={toast} />}
      </AnimatePresence>
    </div>
  );
});

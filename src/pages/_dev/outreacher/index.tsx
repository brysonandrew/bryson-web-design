import type { FC, FormEvent } from 'react';
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
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
import type { TBusiness } from '@pages/_dev/outreacher/business-search-panel';
import { BusinessSearchResults } from '@pages/_dev/outreacher/business-search-results';
import { TimezoneTimeline } from '@pages/_dev/outreacher/timezone-timeline';
import { EmailPreviewSidebar } from '@pages/_dev/outreacher/email-preview-sidebar';
import { UrlForm } from '@pages/_dev/outreacher/url-form';
import { OUTREACH_COUNTRIES } from '@pages/_dev/outreacher/timezone-timeline/constants';
import { TimezoneTimelineSearchResults } from '@pages/_dev/outreacher/timezone-timeline/search/results';
import type { TSearchTown } from '@pages/_dev/outreacher/timezone-timeline/types';
import { AnimatedTitle } from '@pages/_dev/outreacher/animated-title';
import { useGoogleMapsLoader } from '@pages/_dev/outreacher/google-maps-loader';

export const Outreacher: FC = withProviders(() => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] =
    useState<TGenerateEmailResponse | null>(null);
  const [toast, setToast] = useState<TToastState | null>(
    null,
  );
  const [
    businessFinderLocation,
    setBusinessFinderLocation,
  ] = useState<string>('Stockholm, Sweden');
  const [generateButtonProps, setGenerateButtonProps] =
    useState<{
      handleGenerate: () => void;
      isLoading: boolean;
      disabled?: boolean;
    } | null>(null);
  const [searchResults, setSearchResults] = useState<{
    towns: TSearchTown[];
    isLoading: boolean;
    statusMessage: string | null;
  } | null>(null);
  const [
    businessGenerateButtonProps,
    setBusinessGenerateButtonProps,
  ] = useState<{
    handleGenerate: () => void;
    isLoading: boolean;
    disabled?: boolean;
  } | null>(null);
  const [businessSearchResults, setBusinessSearchResults] =
    useState<{
      businesses: TBusiness[];
      isLoading: boolean;
      statusMessage: string | null;
    } | null>(null);

  // Email preview state (editable)
  const [emailPreviewSubject, setEmailPreviewSubject] =
    useState<string>('');
  const [emailPreviewBody, setEmailPreviewBody] =
    useState<string>('');

  const isLoaded = useGoogleMapsLoader();

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

  const copy = useMemo(
    () => createCopy(showToast),
    [showToast],
  );

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

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-dark to-black text-white-8">
      {/* Soft radial accents using primary / accent */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(113,174,225,0.22),_transparent_55%)]" />
      <div className="column-stretch gap-8 px-4 py-10 md:px-6 lg:px-8">
        <AnimatedTitle />

        {/* Timezone → Town finder */}
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full">
            <div className="w-full flex flex-col">
              <TimezoneTimeline
                onSelectTown={(town: TSearchTown) => {
                  // Find the country for the baseCity
                  const countryEntry =
                    OUTREACH_COUNTRIES.find(
                      (c) => c.city === town.baseCity,
                    );
                  const country =
                    countryEntry?.country || '';

                  // Format as "town, city, country"
                  const location = `${town.name}, ${town.baseCity}${
                    country ? `, ${country}` : ''
                  }`;
                  setBusinessFinderLocation(location);
                }}
                onGenerateButton={setGenerateButtonProps}
                onSearchResults={setSearchResults}
              />

              {generateButtonProps && (
                <>
                  <div className="h-[1px] bg-white-04" />
                  <section className="flex flex-col gap-4 w-full rounded-b-2xl rounded-b-2xl border-b border-l border-r border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-4 md:p-6">
                    {searchResults && (
                      <TimezoneTimelineSearchResults
                        towns={searchResults.towns}
                        isLoading={searchResults.isLoading}
                        statusMessage={
                          searchResults.statusMessage
                        }
                        onSelectTown={(
                          town: TSearchTown,
                        ) => {
                          const countryEntry =
                            OUTREACH_COUNTRIES.find(
                              (c) =>
                                c.city === town.baseCity,
                            );
                          const country =
                            countryEntry?.country || '';

                          const location = `${town.name}, ${town.baseCity}${
                            country ? `, ${country}` : ''
                          }`;
                          setBusinessFinderLocation(
                            location,
                          );
                        }}
                      />
                    )}

                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={
                          generateButtonProps.handleGenerate
                        }
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-08 text-black text-sm font-semibold transition-all shadow-[0_0_18px_rgba(56,189,248,0.55)] hover:shadow-[0_0_26px_rgba(56,189,248,0.8)] disabled:opacity-60 disabled:shadow-none"
                        disabled={
                          generateButtonProps.isLoading ||
                          generateButtonProps.disabled
                        }
                      >
                        {generateButtonProps.isLoading
                          ? 'Searching…'
                          : 'Find towns'}
                      </button>
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Business finder */}
        <div className="relative z-10 flex items-start justify-center">
          <div className="flex items-start justify-center max-w-6xl mx-auto w-full gap-8">
            <div className="w-full flex flex-col">
              <BusinessSearchPanel
                onUrl={setUrl}
                externalLocation={businessFinderLocation}
                onGenerateButton={
                  setBusinessGenerateButtonProps
                }
                onSearchResults={setBusinessSearchResults}
              />

              {businessGenerateButtonProps && (
                <>
                  <div className="h-[1px] bg-white-04" />
                  <section className="flex flex-col gap-4 w-full rounded-b-2xl border-b border-l border-r border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-4 md:p-6">
                    {businessSearchResults && (
                      <BusinessSearchResults
                        businesses={
                          businessSearchResults.businesses
                        }
                        isLoading={
                          businessSearchResults.isLoading
                        }
                        statusMessage={
                          businessSearchResults.statusMessage
                        }
                        onSelectBusiness={(
                          business: TBusiness,
                        ) => {
                          if (business.website) {
                            setUrl(business.website);
                          }
                        }}
                      />
                    )}

                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={
                          businessGenerateButtonProps.handleGenerate
                        }
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-08 text-black text-sm font-semibold transition-all shadow-[0_0_18px_rgba(56,189,248,0.55)] hover:shadow-[0_0_26px_rgba(56,189,248,0.8)] disabled:opacity-60 disabled:shadow-none"
                        disabled={
                          businessGenerateButtonProps.isLoading ||
                          businessGenerateButtonProps.disabled
                        }
                      >
                        {businessGenerateButtonProps.isLoading
                          ? 'Searching…'
                          : 'Find businesses'}
                      </button>
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>

        {/* URL → Email preview */}
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

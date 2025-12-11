import { createCopy } from '@pages/_dev/outreacher/copy-helpers';
import { LeadPanel } from '@pages/_dev/outreacher/lead-panel';
import { TGenerateEmailResponse } from '@pages/_dev/outreacher/types';
import { FormEvent, FC } from 'react';

type TUrlFormProps = {
  url: string;
  loading: boolean;
  error: string | null;
  result: TGenerateEmailResponse | null;
  onUrlChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  copy: ReturnType<typeof createCopy>;
};
export const UrlForm: FC<TUrlFormProps> = ({
  url,
  loading,
  error,
  result,
  onUrlChange,
  onSubmit,
  copy,
}) => {
  const normalizedUrl = result?.normalizedUrl;

  return (
    <div className="rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-4 md:p-6 flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-white-02 bg-black-2 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white-06">
          <span className="h-1.5 w-1.5 rounded-full bg-plus shadow-[0_0_0_4px_rgba(74,222,128,0.35)]" />
          Outreacher • Email generator
        </div> */}

        <h2 className="text-white-09 text-sm font-semibold">
          Lead Qualifier and Email Generator{' '}
        </h2>
        <p className="text-sm text-white-07">
          Paste an agency URL. Get a tailored subject, body,
          lead score, insights, and follow-ups.
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-white-06">
            Agency / studio website URL
          </span>

          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="https://example-agency.com"
              className="w-full rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
            />

            {(normalizedUrl || url) && (
              <button
                type="button"
                onClick={() =>
                  copy(
                    'URL',
                    normalizedUrl ?? url,
                    'button',
                  )
                }
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg border border-white-02 bg-black-2 px-2 py-1 text-[11px] font-medium text-white-09 hover:bg-black-3 transition-colors"
              >
                Copy
              </button>
            )}
          </div>

          {normalizedUrl && (
            <p className="text-xs text-white-06">
              Normalized URL:{' '}
              <a
                href={normalizedUrl}
                target="_blank"
                className="font-mono underline text-primary hover:text-primary-08"
                rel="noreferrer"
              >
                {normalizedUrl}
              </a>
            </p>
          )}
        </label>

        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-primary-08 disabled:opacity-60 disabled:cursor-default"
          >
            {loading
              ? 'Generating…'
              : 'Generate email & insights'}
          </button>

          <p className="text-xs text-white-06 hidden md:block">
            Quick copy:{' '}
            <span className="font-mono">⌘1–⌘4</span>
          </p>
        </div>
      </form>

      {error && (
        <div className="rounded-xl border border-red/40 bg-red/10 px-3.5 py-2.5 text-sm text-white">
          {error}
        </div>
      )}

      {result && <LeadPanel data={result} />}
    </div>
  );
};

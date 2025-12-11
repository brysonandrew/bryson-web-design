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
    <div className="rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-6 md:p-8 space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white-03 bg-black-3 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gray-6">
          <span className="h-1.5 w-1.5 rounded-full bg-plus shadow-[0_0_0_4px_rgba(74,222,128,0.35)]" />
          Outreacher • Email generator
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Generate & qualify outreach leads in one pass
        </h1>
        <p className="text-sm text-gray-5">
          Paste an agency URL. Get a tailored subject, body,
          lead score, insights, and follow-ups.
        </p>
      </header>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-gray-5">
            Agency / studio website URL
          </span>

          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="https://example-agency.com"
              className="w-full rounded-xl border border-white-03 bg-black-2 px-3.5 py-2.5 text-sm text-white-9"
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
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg border bg-white-08 px-2 py-1 text-[11px] font-medium text-black"
              >
                Copy
              </button>
            )}
          </div>

          {normalizedUrl && (
            <p className="text-[11px] text-gray-5 mt-1">
              Normalized URL:{' '}
              <a
                href={normalizedUrl}
                target="_blank"
                className="font-mono underline"
                rel="noreferrer"
              >
                {normalizedUrl}
              </a>
            </p>
          )}
        </label>

        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-black"
          >
            {loading
              ? 'Generating…'
              : 'Generate email & insights'}
          </button>

          <p className="text-[11px] text-gray-5 hidden md:block">
            Quick copy:{' '}
            <span className="font-mono">⌘1–⌘4</span>
          </p>
        </div>
      </form>

      {error && (
        <div className="rounded-xl border border-red bg-red/10 px-3.5 py-2.5 text-sm text-white">
          {error}
        </div>
      )}

      {result && <LeadPanel data={result} />}
    </div>
  );
};

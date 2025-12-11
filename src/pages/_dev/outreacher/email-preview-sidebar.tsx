import { FC } from "react";
import { useOutreacher } from "./context";

export const EmailPreviewSidebar: FC = () => {
  const {
    primaryEmail,
    mailtoHref,
    emailPreviewSubject,
    emailPreviewBody,
    setEmailPreviewSubject,
    setEmailPreviewBody,
    copy,
  } = useOutreacher();

  return (
  <aside className="hidden lg:block">
    <div className="rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-4 md:p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white-06">
            Email preview
          </p>
          <p className="text-sm text-white-09">
            Subject & body editor
          </p>
        </div>

        {mailtoHref && (
          <a
            href={mailtoHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-primary px-3 py-1.5 text-[11px] font-semibold text-black hover:bg-primary-08 transition-colors"
          >
            Open mail client
          </a>
        )}
      </div>

      {/* To */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white-06">
            To / recipient
          </span>

          {primaryEmail && (
            <button
              onClick={() =>
                copy(
                  'Primary contact email',
                  primaryEmail,
                  'button',
                )
              }
              className="rounded-lg border border-white-02 bg-black-2 px-2 py-0.5 text-[11px] text-white-09 hover:bg-black-3 transition-colors"
            >
              Copy email
            </button>
          )}
        </div>

        <p className="text-xs font-mono break-all text-white-08">
          {primaryEmail || 'hello@agency.com'}
        </p>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white-06">
            Subject / email subject
          </span>

          <button
            onClick={() =>
              copy('Subject', emailPreviewSubject, 'button')
            }
            className="rounded-lg border border-white-02 bg-black-2 px-2 py-0.5 text-[11px] text-white-09 hover:bg-black-3 transition-colors"
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
          className="w-full rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white-06">
            Body / email body
          </span>

          <button
            onClick={() =>
              copy('Email body', emailPreviewBody, 'button')
            }
            className="rounded-lg border border-white-02 bg-black-2 px-2 py-0.5 text-[11px] text-white-09 hover:bg-black-3 transition-colors"
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
          className="w-full rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
        />
      </div>

      {/* Mailto Preview */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white-06">
            Mailto link / mailto URL
          </span>

          <button
            onClick={() =>
              copy('mailto link', mailtoHref, 'button')
            }
            className="rounded-lg border border-white-02 bg-black-2 px-2 py-0.5 text-[11px] text-white-09 hover:bg-black-3 transition-colors"
          >
            Copy
          </button>
        </div>

        <textarea
          readOnly
          rows={3}
          value={
            mailtoHref ||
            'mailto:hello@agency.com?subject=...&body=...'
          }
          className="w-full rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-[11px] font-mono text-white-08"
        />
      </div>
    </div>
  </aside>
  );
};

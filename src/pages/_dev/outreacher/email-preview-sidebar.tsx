import { createCopy } from "@pages/_dev/outreacher/copy-helpers";
import { FC } from "react";

type TEmailPreviewSidebarProps = {
  primaryEmail: string;
  mailtoHref: string;
  emailPreviewSubject: string;
  emailPreviewBody: string;
  setEmailPreviewSubject: (value: string) => void;
  setEmailPreviewBody: (value: string) => void;
  copy: ReturnType<typeof createCopy>;
};

export const EmailPreviewSidebar: FC<
  TEmailPreviewSidebarProps
> = ({
  primaryEmail,
  mailtoHref,
  emailPreviewSubject,
  emailPreviewBody,
  setEmailPreviewSubject,
  setEmailPreviewBody,
  copy,
}) => (
  <aside className="space-y-4 hidden lg:block">
    <div className="rounded-2xl border border-white-02 bg-black-3 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-2xl p-4 md:p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
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
            rel="noreferrer"
            className="rounded-full bg-primary-02 px-3 py-1 text-[11px] font-medium text-primary border border-primary-04"
          >
            Open mail client
          </a>
        )}
      </div>

      {/* To */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
            To
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
              className="rounded-lg border bg-dark-06 px-2 py-0.5 text-[11px] text-white-8"
            >
              Copy email
            </button>
          )}
        </div>

        <p className="text-xs font-mono break-all text-white-8">
          {primaryEmail || 'hello@agency.com'}
        </p>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
            Subject
          </span>

          <button
            onClick={() =>
              copy('Subject', emailPreviewSubject, 'button')
            }
            className="rounded-lg border bg-dark-06 px-2 py-0.5 text-[11px]"
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
          className="w-full rounded-xl border bg-dark-08 px-3 py-2 text-sm"
        />
      </div>

      {/* Body */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
            Body
          </span>

          <button
            onClick={() =>
              copy('Email body', emailPreviewBody, 'button')
            }
            className="rounded-lg border bg-dark-06 px-2 py-0.5 text-[11px]"
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
          className="w-full rounded-xl border bg-dark-08 px-3 py-2 text-sm"
        />
      </div>

      {/* Mailto Preview */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-gray-6">
            mailto link
          </span>

          <button
            onClick={() =>
              copy('mailto link', mailtoHref, 'button')
            }
            className="rounded-lg border bg-dark-06 px-2 py-0.5 text-[11px]"
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
          className="w-full rounded-xl border bg-black-2 px-3 py-2 text-[11px] font-mono"
        />
      </div>
    </div>
  </aside>
);

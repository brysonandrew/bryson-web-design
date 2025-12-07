import type { EmailBits } from './email-engine';
import { formatName } from './name-utils';

export type BuiltEmail = {
  subject: string;
  body: string;
};

// ---- Build final email with your template ----

export const buildEmail = (bits: EmailBits): BuiltEmail => {
  const { name, subject, cta, offer, demoIdea } = bits;

  const safeName = formatName(name);

  const subjectLine =
    subject || `Frontend web developer support available for ${safeName}`;

  const body = `Hi ${safeName},

I'm a frontend web developer from New Zealand, now based in Poland, with 9+ years of experience building React, Next.js, and Vue interfaces in TypeScript.

${cta}

${offer ? `${offer}\n` : ''}${
    demoIdea
      ? `If it helps, I'm happy to put together a small demo along these lines: ${demoIdea}\n`
      : ''
  }References available. I can send a couple of recent projects, or we can jump on a quick call if that's easier.

Kind regards,
Andrew Bryson
brysona.dev | github.com/brysonandrew | linkedin.com/in/brysona

14-second intro → https://brysona.dev/video
`;

  return { subject: subjectLine, body };
};


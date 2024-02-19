import { resolveContactFormGlowShortcuts } from '@brysonandrew/contact/variants/glow';

export const CONTACT_FORM_SHORTCUTS =
  resolveContactFormGlowShortcuts((record) => {
    const text = 'title-section capitalize';
    return {
      ...record,
      'name-text': text,
      'submit-text': [
        record['submit-text'],
        text,
        'char-gap-1 char-gap-transition group-hover:(text-accent char-gap-6)',
      ],
      footer: [record['footer'], 'column-end'],
    };
  });

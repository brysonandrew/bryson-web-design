import { resolveContactFormGlowShortcuts } from '@brysonandrew/contact/variants/glow';

export const CONTACT_FORM_SHORTCUTS =
  resolveContactFormGlowShortcuts((record) => {
    const text = 'title-section capitalize';
    return {
      ...record,
      'name-text': record['name-text'],
      'submit-text': [
        record['submit-text'],
        text,
        'italic',
      ],
      footer: [record['footer'], 'column-end'],
    };
  });

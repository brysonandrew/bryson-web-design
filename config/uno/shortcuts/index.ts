import { SHORTCUTS as DEFAULT_SHORTCUTS } from '@brysonandrew/uno-shortcuts';
import { StaticShortcutMap } from 'unocss';
import { CONTACT_FORM_SHORTCUTS } from './contact-form';
import { TYPOGRAPHY_SHORTCUTS } from './typography';
import { BASE } from './base';

const SHORTCUTS: StaticShortcutMap = {
  ...BASE,
  ...DEFAULT_SHORTCUTS,
  ...TYPOGRAPHY_SHORTCUTS,
  ...CONTACT_FORM_SHORTCUTS,
};

export { SHORTCUTS };

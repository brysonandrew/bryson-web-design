import { SHORTCUTS as DEFAULT_SHORTCUTS } from '@brysonandrew/uno-shortcuts';
import { StaticShortcutMap } from 'unocss';
import { DARK_MODE_UNO_SHORTCUTS } from '@brysonandrew/dark-mode/config/constants/animation';
import { CONTACT_FORM_SHORTCUTS } from './contact-form';
import { TYPOGRAPHY_SHORTCUTS } from './typography';
import { BASE } from './base';

const SHORTCUTS: StaticShortcutMap = {
  ...BASE,
  ...DEFAULT_SHORTCUTS,
  ...TYPOGRAPHY_SHORTCUTS,
  ...CONTACT_FORM_SHORTCUTS,
  ...DARK_MODE_UNO_SHORTCUTS,
};

export { SHORTCUTS };

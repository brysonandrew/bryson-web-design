import { SHORTCUTS as DEFAULT_SHORTCUTS } from '@brysonandrew/uno-shortcuts';
import { CONTACT_FORM_GLOW_SHORTCUTS } from '@brysonandrew/contact/variants/glow';
import { StaticShortcutMap } from 'unocss';
import { DARK_MODE_UNO_SHORTCUTS } from '@brysonandrew/dark-mode/config/animation';

const TYPOGRAPHY_SHORTCUTS: StaticShortcutMap = {
  'title-pricing':
    'font-semibold text-main capitalize char-gap-0_006725',
  'text-pricing': 'text-white-7',
};

const SHORTCUTS: StaticShortcutMap = {
  ...DEFAULT_SHORTCUTS,
  ...TYPOGRAPHY_SHORTCUTS,
  ...CONTACT_FORM_GLOW_SHORTCUTS,
  ...DARK_MODE_UNO_SHORTCUTS,
};

export { SHORTCUTS };

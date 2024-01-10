import { RESET } from '../../app/preflight/reset';
import { resolveScrollbarCss } from '../../app/preflight/resolveScrollbarCss';
import type { Preflight, PreflightContext } from 'unocss';
import type { TTheme } from '../theme';

export const CSS: Preflight<TTheme> = {
  getCSS: ({ theme }: PreflightContext<TTheme>) =>
    `${RESET}
${resolveScrollbarCss(theme)}`,
} as const;

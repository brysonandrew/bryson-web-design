import type { Preflight } from 'unocss';
import type { TAnyTheme } from '../theme';
import { CSS } from './css';
export const PRE_FLIGHTS: Preflight<TAnyTheme>[] = [CSS];

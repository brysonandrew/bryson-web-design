import { ValueTarget } from 'framer-motion';
import { TSign } from '@brysonandrew/motion-cursor/hooks';

export const resolveCalc = (
  percent: number,
  sign: TSign,
  px: number
): ValueTarget =>
  `calc(${percent}% ${sign < 0 ? '-' : '+'} ${px}px)`;

export const INIT_CALC = resolveCalc(0, 1, 0);

import {
  TVariant,
  TVariants,
} from '@brysonandrew/motion/config';

export const resolvePresence = (
  initial: TVariant,
  animate: TVariant,
  exit?: TVariant
): TVariants => ({
  initial,
  animate,
  exit: exit ?? initial,
});

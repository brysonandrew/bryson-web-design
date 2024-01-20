import { TDefaultStyle } from '../config/types';
import {
  resolveColorSet,
  TColorSet,
} from '../utils/resolveColorSet';

export const useColorSetRecord = <S extends TDefaultStyle>(
  config: S,
) => {
  return {
    accent: resolveColorSet(config.COLOR.accent),
    secondary: resolveColorSet(config.COLOR.secondary),
    highlight: resolveColorSet(config.COLOR.highlight),
  };
};

export type TColorSetRecord = {
  accent: TColorSet;
  secondary: TColorSet;
  highlight: TColorSet;
};

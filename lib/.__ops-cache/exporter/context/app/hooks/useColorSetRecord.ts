import { TStyle } from '../config/types';
import {
  resolveColorSet,
  TColorSet,
} from '../utils/resolveColorSet';

type TConfig = TStyle;
export const useColorSetRecord = (config: TConfig) => {
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

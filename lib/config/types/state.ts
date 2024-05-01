import { Dispatch, SetStateAction } from 'react';

export type TStateEntry<S> = [S, Dispatch<SetStateAction<S>>];
export type TStatePairKey<P extends string = string> =
  `${P}State`;
export type TStatePair<S> = {
  [key: TStatePairKey]: TStateEntry<S>;
};

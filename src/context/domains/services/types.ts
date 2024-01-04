import { Dispatch, SetStateAction } from 'react';

export type TExtrasRecord = Record<
  string,
  boolean | number
>;
export type TContext = {
  extras: TExtrasRecord;
  setExtras: Dispatch<SetStateAction<TExtrasRecord>>;
};

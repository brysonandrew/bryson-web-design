import { Dispatch, SetStateAction } from 'react';

export type TExtrasRecord = Record<
  string,
    number
>;
export type TPricingContext = {
  extras: TExtrasRecord;
  setExtras: Dispatch<SetStateAction<TExtrasRecord>>;
};

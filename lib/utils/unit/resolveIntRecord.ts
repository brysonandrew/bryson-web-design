import { stripPx } from "./stripPx";

export type TPxRecord = Record<string, `${string}px`>
export type TPxEntry = [string, `${string}px`]
export type TPxEntries = TPxEntry[]
export type TIntRecord = Record<string, number>;

export const resolveIntRecord = (pxRecord: TPxRecord) => {
  const entries = Object.entries(pxRecord) as TPxEntries;
 const intRecord = entries.reduce(
  (a, [key, value]: TPxEntry) => ({
    ...a,
    [key]: stripPx(value),
  }),
  {} as TIntRecord,
);

return intRecord
}
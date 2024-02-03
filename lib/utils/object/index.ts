import {
  TKeyStr,
  TStringRecord,
} from '@brysonandrew/config-types';

type TPrefixedKey<
  P extends string,
  T extends TStringRecord,
  K extends string = TKeyStr<T>,
> = `${P}${K}`;

type TConfig<T extends TStringRecord> = {
  prefix: string;
  record: T;
};
export const prefixKeys = <T extends TStringRecord>({
  prefix,
  record,
}: TConfig<T>) => {
  type TOldKey = keyof T;
  type TKey = TPrefixedKey<typeof prefix, T>;
  type TValue = T[TOldKey];
  type TNextRecord = Record<TKey, TValue>;
  type TEntry = [TOldKey, TValue];
  const entries = Object.entries(record) as TEntry[];
  return entries.reduce((a, [key, value]) => {
    const nextKey = `${prefix}${String(key)}` as TKey;
    a[nextKey] = value;
    return a;
  }, {} as TNextRecord);
};

export const wrapInternal = (v: string) => `_${v}_`;
export const prefixInternalKeys = <
  T extends TStringRecord = TStringRecord,
>({
  prefix,
  record,
}: TConfig<T>) =>
  prefixKeys<T>({ prefix: wrapInternal(prefix), record });

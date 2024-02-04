import {
  TKeyStr,
  TStringOrStringsRecord,
} from '@brysonandrew/config-types';

export type TPrefixKeysConfig<
  P extends string,
  T extends TStringOrStringsRecord,
> = {
  prefix: P;
  record: T;
  prefixValuesRx?: RegExp;
};
export const prefixKeys = <
  P extends string,
  T extends TStringOrStringsRecord,
>({
  prefix,
  record,
  prefixValuesRx,
}: TPrefixKeysConfig<P, T>) => {
  type TPrevKey = TKeyStr<T>;
  type TNextKey = `${P}${TPrevKey}`;
  type TValue = T[TPrevKey];

  type TEntry = [TPrevKey, TValue];

  type TNextRecord = Record<TNextKey, string>;

  const resolvePrefix = <K extends TPrevKey>(prevKey: K) =>
    `${prefix}${prevKey}` as const;

  const entries = Object.entries(record) as TEntry[];
  return entries.reduce((a, [prevKey, value]: TEntry) => {
    const nextKey = resolvePrefix<typeof prevKey>(prevKey);
    let nextValue: string = Array.isArray(value)
      ? value.join(' ')
      : value;
    if (prefixValuesRx) {
      nextValue = nextValue.replace(prefixValuesRx, (v) =>
        resolvePrefix<typeof prevKey>(v as TPrevKey),
      );
    }
    a[nextKey] = nextValue;
    return a;
  }, {} as TNextRecord);
};

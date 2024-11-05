import { TStringOrStringsRecord } from '@brysonandrew/config-types';
import {
  TPrefixKeysConfig,
  prefixKeys,
} from '@brysonandrew/utils-object/prefixKeys';

type TInternalKey<K extends string> = `_${K}_`;
export const wrapInternal = <V extends string>(v: V) =>
  `_${v}_` as const;
export const scopeRecord = <
  P extends string,
  T extends TStringOrStringsRecord = TStringOrStringsRecord,
>({
  prefix,
  record,
}: TPrefixKeysConfig<P, T>) => {
  const prevKeys = Object.keys(record) as (keyof T)[];
  const prevKeysUnions = prevKeys.join('|');
  const prefixValuesRx = new RegExp(prevKeysUnions, 'g');
  type TPrefix = TInternalKey<typeof prefix>;
  const wrappedPrefix = wrapInternal<P>(prefix);
  return prefixKeys<TPrefix, T>({
    prefix: wrappedPrefix,
    record,
    prefixValuesRx,
  });
};

import { TStringOrStringsRecord } from '@brysonandrew/config-types';
import { scopeRecord } from '@brysonandrew/utils/object/scopeRecord';

export const PREFIX = 'contact' as const;

export type TResolvePartial<
  T extends TStringOrStringsRecord,
> = (record: T) => Record<keyof T, string | string[]>;

export type TPrefixConfig<
  T extends TStringOrStringsRecord,
> = {
  record: T;
  resolvePartial?: TResolvePartial<T>;
};
export const prefixContact = <
  T extends TStringOrStringsRecord,
>({
  record,
  resolvePartial,
}: TPrefixConfig<T>) => {
  const mergedRecord = resolvePartial
    ? resolvePartial(record)
    : record;
  return scopeRecord<typeof PREFIX>({
    prefix: PREFIX,
    record: mergedRecord,
  });
};

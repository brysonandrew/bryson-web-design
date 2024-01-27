import {
  TDirection,
  TNumberValue,
  TPosPercentValue,
  TPresenceConfig,
  TPresenceConfigs,
  TTarget,
  TXyKey,
} from '@brysonandrew/animation/config/types';
import { TAnyRecord } from '@brysonandrew/types';

const resolveKey = (key: TDirection): TXyKey => {
  if (key === 'left') return 'x';
  if (key === 'right') return 'x';
  if (key === 'up') return 'y';
  if (key === 'down') return 'y';
  return 'y';
};

const resolveNegative = (
  value: TPosPercentValue,
): TNumberValue =>
  typeof value === 'string' ? `-${value}` : -value;

const resolveValue = (
  key: TDirection,
  value: TPosPercentValue,
): TNumberValue => {
  if (key === 'left') return value;
  if (key === 'right') return resolveNegative(value);
  if (key === 'up') return value;
  if (key === 'down') return resolveNegative(value);
  return value;
};

const resolveDirection = <
  T extends TDirection,
  V extends TPosPercentValue,
>(
  key: T,
  value: V,
) => {
  const dk = resolveKey(key);
  const dv = resolveValue(key, value);
  const da = typeof dv === 'number' ? 0 : '0%';
  return [dk, dv, da] as const;
};

const resolveFade = <T extends TPresenceConfig['fade']>(
  fade: T,
) => {
  const key = 'opacity';
  const originValue = 0;
  const animateValue = fade;

  return [key, originValue, animateValue] as const;
};

const resolveRecordValue = <T extends TPresenceConfig>({
  direction,
  value,
  fade,
}: T) => {
  const initial = {} as TTarget;
  const animate = {} as TTarget;
  if (
    typeof direction !== 'undefined' &&
    typeof value !== 'undefined'
  ) {
    const [dk, dv, da] = resolveDirection<
      typeof direction,
      typeof value
    >(direction, value);
    initial[dk] = dv;
    animate[dk] = da;
  }
  if (fade) {
    const [fk, fv, fa] = resolveFade<typeof fade>(fade);
    initial[fk] = fv;
    animate[fk] = fa;
  }

  return {
    initial,
    animate,
    exit: initial,
  } as const;
};

const resolveRecordKey = <T extends TPresenceConfig>({
  direction,
  value,
  fade,
}: T) => {
  const dKey =
    typeof direction === 'undefined' ||
    typeof value === 'undefined'
      ? '-'
      : (`${direction}${value}` as const);
  const recordKey = `${dKey}/${fade ?? '-'}` as const;

  return recordKey;
};

export const resolvePresenceRecord = <
  T extends TPresenceConfigs,
>(
  presenceConfigs: T,
) => {
  const presenceRecord = presenceConfigs.reduce(
    (a, presenceConfig) => {
      const recordKey =
        resolveRecordKey<typeof presenceConfig>(
          presenceConfig,
        );
      const recordValue =
        resolveRecordValue(presenceConfig);
      a[recordKey] = recordValue;
      return a;
    },
    {} as TAnyRecord,
  );
  return presenceRecord;
};

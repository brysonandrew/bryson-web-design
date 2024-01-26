import {
  TDirection,
  TNumberValue,
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

const resolveValue = (
  key: TDirection,
  value: TNumberValue,
): TNumberValue => {
  if (key === 'left') return value;
  if (key === 'right') return -value;
  if (key === 'up') return -value;
  if (key === 'down') return value;
  return value;
};

const resolveDirection = <
  T extends TDirection,
  V extends TNumberValue,
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
  const value = fade;
  const animateValue = 0;

  return [key, value, animateValue] as const;
};

const resolveRecordValue = <T extends TPresenceConfig>({
  direction,
  value,
  fade,
}: T) => {
  const initial = {} as TTarget;
  const animate = {} as TTarget;
  if (direction) {
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

export const resolvePresenceRecord = <
  T extends TPresenceConfigs,
>(
  presenceConfigs: T,
) => {
  const presenceRecord = presenceConfigs.reduce(
    (a, presenceConfig) => {
      const { direction, value, fade } = presenceConfig;
      const recordKey = `${direction}${value}/${fade}`;
      const recordValue =
        resolveRecordValue(presenceConfig);
      a[recordKey] = recordValue;
      return a;
    },
    {} as TAnyRecord,
  );
  return presenceRecord;
};

import {
  TPlaceholder,
  T_VD,
} from '@brysonandrew/motion-config-types';
import {
  TBaseTransitionConfig,
  TDelayValue,
  TDurationValue,
  TEaseValue,
} from '@brysonandrew/motion-config-types';
import {
  TEasing,
  TBezierDefinition,
} from '@brysonandrew/motion-config-types';

//duration
type TDurationKey<T extends TDurationValue> =
  T extends TDurationValue ? `${T}` : TPlaceholder;

//ease
export type TBezierString<E extends TBezierDefinition> =
  `${E[0]},${E[1]},${E[2]},${E[3]}`;

export type TEaseStringify<E extends TEasing> =
  E extends TBezierDefinition ? TBezierString<E> : E;

export type TEaseKey<T extends TEaseValue> =
  T extends TEasing ? `${TEaseStringify<T>}` : TPlaceholder;

//delay
type TDelayKey<T extends number> = T extends TDelayValue
  ? `${T}`
  : TPlaceholder;

//result
export type TBaseTransitionConfigKey<
  T extends TBaseTransitionConfig,
> = `${TDurationKey<T['duration']>}${T_VD}${TEaseKey<
  T['ease']
>}${T_VD}${TDelayKey<T['delay']>}`;

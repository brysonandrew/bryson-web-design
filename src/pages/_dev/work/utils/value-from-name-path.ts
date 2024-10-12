import { isDefined, isTruthy } from "@brysonandrew/utils-validation";

export const valueFromNamePath = <T, K extends string = string>(
  target: T,
  namePath: K
) => {
  const keys = namePath.split('.');
  let value: any = target;

  if (isDefined(value)) {
    for (const key of keys) {
      if (typeof key === 'string' && isTruthy(key)) {
        if (!isDefined(value)) return null;
        value = value[key];
      }
    }
  }

  return value;
};

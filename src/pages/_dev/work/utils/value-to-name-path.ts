import { isValidKey } from '@brysonandrew/config-types';
import { isString } from '@brysonandrew/utils-validation';

export const valueToNamePath = <
  T extends Record<string, any>
>(
  namePath: string,
  nextValue: any,
  partial: T
) => {
  const pathParts = namePath.split('.');
  const prop = pathParts.pop();
  const parent = pathParts.reduce(
    (result, key) => result[key],
    partial
  );
  if (isString(prop) && isValidKey(prop, parent)) {
    parent[prop] = nextValue;
  }
  return parent;
};

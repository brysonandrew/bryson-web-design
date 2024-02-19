import { TAnyRecord } from '@brysonandrew/config-types';

export const mergeDeepObjects = <
  T extends TAnyRecord = TAnyRecord,
>(
  target: T,
  ...sources: TAnyRecord[]
): T => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (source === undefined) {
    return target;
  }

  if (
    isMergebleObject(target) &&
    isMergebleObject(source)
  ) {
    Object.keys(source).forEach((key: string) => {
      if (isMergebleObject(source[key])) {
        if (!target[key]) {
          (target as any)[key] = {};
        }
        mergeDeepObjects(target[key], source[key]);
      } else {
        (target as any)[key] = source[key];
      }
    });
  }

  return mergeDeepObjects(target, ...sources);
};

const isObject = (item: any): boolean => {
  return item !== null && typeof item === 'object';
};

const isMergebleObject = (item: any): boolean => {
  return isObject(item) && !Array.isArray(item);
};

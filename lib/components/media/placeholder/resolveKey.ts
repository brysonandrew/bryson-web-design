import { resolveCompositeKey } from '@lib/utils/key';

export const IMAGE_PLACEHOLDER_KEY =
  'IMAGE_PLACEHOLDER_KEY';

export const resolveKey = (key: number | string) =>
  resolveCompositeKey(IMAGE_PLACEHOLDER_KEY, key);

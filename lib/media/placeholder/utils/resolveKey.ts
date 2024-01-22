import { resolveCompositeKey } from '@brysonandrew/utils/key';
import { IMAGE_PLACEHOLDER_ID } from '../config/constants';

export const resolveKey = (key: number | string) =>
  resolveCompositeKey(IMAGE_PLACEHOLDER_ID, key);

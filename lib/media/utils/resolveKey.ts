import { IMAGE_PLACEHOLDER_ID } from '@brysonandrew/media/config/constants';
import { resolveCompositeKey } from '@brysonandrew/utils/key';

export const resolveKey = (key: number | string) =>
  resolveCompositeKey(IMAGE_PLACEHOLDER_ID, key);

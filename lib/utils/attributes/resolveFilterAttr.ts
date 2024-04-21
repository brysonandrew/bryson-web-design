import { resolveUrlId } from '@brysonandrew/utils-attributes/resolveUrlId';

export const resolveFilterAttr = (id: string) => ({
  filter: resolveUrlId(id),
});

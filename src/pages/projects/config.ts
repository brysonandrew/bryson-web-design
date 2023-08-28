import { TItem } from '@t/projects';
import { resolveCompositeKey } from '@utils/keys';

export const PROJECT_KEY = 'project';
export const NAME_KEY = 'name';

export const resolveTitleLayoutId = (key: string) =>
  resolveCompositeKey('TITLE', key);

export const EXCLUDED_KEYS = ['preview', 'logo'];

export type TSlugProps = Pick<TItem, 'slug'>;

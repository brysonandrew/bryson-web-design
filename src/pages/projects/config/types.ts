import { PROJECT_ITEMS_RECORD } from './constants/items';

export type TTag = {
  title: string;
  href?: string;
};
export type TItem = {
  slug: string;
  title: string;
  description: string;
  paragraphs?: string[];
  time?: Date;
  tags?: TTag[];
  href?: string;
  category?: string;
  altTo?: string;
};

export type TSlugProps = Pick<TItem, 'slug'>;

export type TProjectItemRecord = Record<string, TItem>;
export type TProjectKey = keyof typeof PROJECT_ITEMS_RECORD;

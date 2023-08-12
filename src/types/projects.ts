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

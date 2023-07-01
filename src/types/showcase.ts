export type TItem = {
  slug: string;
  title: string;
  description: string;
  paragraphs?: string[];
  time?: Date;
  tags?: string[];
  href?: string;
  category?: string;
  altTo?: string;
};

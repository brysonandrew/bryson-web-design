import { BASE_CV_INIT } from '@brysonandrew/cv/config/constants';
import { TTag } from '@brysonandrew/gallery';

export type TCvSection = {
  title: string;
  description: string;
  tags: readonly TTag[];
  paragraphs: readonly string[];
  time?: Date;
};

export type TCvContext = typeof BASE_CV_INIT & {
  descriptionParagraphs: string[];
  sections: TCvSection[];
};

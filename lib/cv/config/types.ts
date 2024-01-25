import { BASE_CV_INIT } from "@brysonandrew/cv/config/constants";

export type TCvSection = {
  title: string;
  description: string;
  tags: string[];
  paragraphs: string[];
};

export type TCvContext = typeof BASE_CV_INIT & {
  descriptionParagraphs: string[];
  sections: TCvSection[];
};
export type TGoogleFont = {
  family: string;
  variants: any[];
  subsets: any[];
  version: string;
  lastModified: string;
  files: any[];
  category: string;
  kind: string;
  menu: string;
};

export type TGoogleFontResult = {
  kind: string;
  items: TGoogleFont[];
};

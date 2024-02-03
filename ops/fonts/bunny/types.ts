export type TBunnyFont = {
  variants: Record<string, number>;
  isVariable: false;
  styles: string[];
  weights: number[];
  familyName: string;
  defSubset: string;
  category: string;
};

export type TBunnyFontResult = Record<string, TBunnyFont>;

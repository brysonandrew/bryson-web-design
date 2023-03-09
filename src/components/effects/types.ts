import type { TChildren } from "@t/index";

export type TFilterChildrenProps<T extends string> = {
  children?(id: T): TChildren;
  external?(id: T): TChildren;
};

export type TFilterProps = TFilterChildrenProps<string> & {
  id: string;
  source?: "SourceGraphic";
  result?: string;
};

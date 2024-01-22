import type { TChildren } from '@brysonandrew/types/dom';

export type TFilterChildrenProps = {
  children?(id: string): TChildren;
  external?(id: string): TChildren;
};

export type TFilterProps = TFilterChildrenProps & {
  id: string;
  source?: 'SourceGraphic';
  result?: string;
};

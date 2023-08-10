import { ClassValue } from 'clsx';

export type TBaseChildren = JSX.Element | null | string;
export type TChildrenElement =
  | TBaseChildren
  | TBaseChildren[];
export type TChildren = string | TChildrenElement | null;
export type TError = any | unknown;
export type TEmptyRecord = Record<string, unknown>;
export type TAnyRecord = Record<string, any>;

export type TChildrenProps = { children: TChildren };
export type TChildrenPartialProps = Partial<TChildrenProps>;

export type TClassValueProps = {
  classValue?: ClassValue;
};

export type TTitleProps = {
  title: string;
};

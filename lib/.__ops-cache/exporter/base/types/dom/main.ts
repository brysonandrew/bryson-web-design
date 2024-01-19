import { ClassValue } from 'clsx';

export type TError = any | unknown;
export type TEmptyRecord = Record<string, unknown>;
export type TAnyRecord = Record<string, any>;

export type TBaseChildren = JSX.Element | null | string;
export type TChildrenElement =
  | TBaseChildren
  | TBaseChildren[];
export type TChildren = string | TChildrenElement | null;
export type TChildrenProps = { children: TChildren };
export type TChildrenHandlerProps<T> = {
  children(props: T): TChildren;
};
export type TChildrenPartialProps = Partial<TChildrenProps>;
export type TChildrenString = { children: string };
export type TChildrenStrings = { children: string[] };

export type TClassValueProps = {
  classValue?: ClassValue;
};

export type TTitleProps = {
  title: string;
};

export type TRect = DOMRect | null;

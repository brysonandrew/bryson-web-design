export type TBaseChildren = JSX.Element | null | string;
export type TChildrenElement =
  | TBaseChildren
  | TBaseChildren[];
export type TChildren = string | TChildrenElement | null;
export type TError = any | unknown;
export type TEmptyRecord = Record<string, unknown>;
export type TAnyRecord = Record<string, any>;

export type TChildrenProps = { children: TChildren }

export type TModule = {
  default: string;
};
export type TImportLookup = Record<string, () => Promise<TModule>>;


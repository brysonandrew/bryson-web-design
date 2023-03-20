import type { FC } from "react";

export const PADDING = 28;
export const PADDING_05 = PADDING / 2;
export const GAP = 8;
export const GAP_05 = GAP / 2;

type TItemProps = {
  name: string;
  to: string;
};

export type TItem = TItemProps & {
  Component: FC<any>;
};
export const ITEMS: TItem[] = [
  {
    name: "NotFound404",
    to: "/gallery",
    Component: () => <div>NotFound404</div>,
  },
  {
    name: "Decipher",
    to: "/gallery",
    Component: () => <div>decipher</div>,
  },
];

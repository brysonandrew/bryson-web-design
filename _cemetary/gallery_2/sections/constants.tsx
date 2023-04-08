import type { FC } from "react";

export const WIDTH = 512;
export const WIDTH_05 = WIDTH * 0.5;

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

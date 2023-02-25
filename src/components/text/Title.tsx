import type { TChildren } from "@t/index";
import type { FC } from "react";

type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => (
  <div className="inline-flex fixed top-0 left-0 py-1 px-2 z-0 bg-black-05">
    <h2 className="text-center">{children}</h2>
  </div>
);

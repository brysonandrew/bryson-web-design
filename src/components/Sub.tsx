import type { FC } from "react";

type TProps = { children: string };
export const Sub: FC<TProps> = ({ children }) => (
  <h4 className="text-teal text-xs">{children}</h4>
);

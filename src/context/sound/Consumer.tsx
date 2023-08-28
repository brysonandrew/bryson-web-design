import type { FC } from "react";
import type { TContext } from "./types";
import { Sound } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Sound.Consumer>
    {children}
  </Sound.Consumer>
);

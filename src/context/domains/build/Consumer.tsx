import type { FC } from "react";
import type { TContext } from "./types";
import { Build } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Build.Consumer>
    {children}
  </Build.Consumer>
);

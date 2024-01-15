import type { FC } from "react";
import type { TContext } from "./config/types";
import { NETWORK } from "./config/constants";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <NETWORK.Consumer>
    {children}
  </NETWORK.Consumer>
);

import type { FC } from "react";
import type { TContext } from "./config/types";
import { NETWORK } from "./config/constants";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const NetworkConsumer: FC<
  TConsumerProps
> = ({ children }) => (
  <NETWORK.Consumer>
    {children}
  </NETWORK.Consumer>
);

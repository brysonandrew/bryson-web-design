import type { FC } from "react";
import type { TContext } from "./types";
import { Services } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Services.Consumer>
    {children}
  </Services.Consumer>
);

import type { FC } from "react";
import type { TContext } from "./types";
import { ServicesC } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <ServicesC.Consumer>
    {children}
  </ServicesC.Consumer>
);

import type { FC } from "react";
import { SOUND } from "./constants";
import type { TContext } from "./types";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <SOUND.Consumer>
    {children}
  </SOUND.Consumer>
);

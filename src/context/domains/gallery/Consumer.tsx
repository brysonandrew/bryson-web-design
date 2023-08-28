import type { FC } from "react";
import type { TContext } from "./types";
import { Gallery } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Gallery.Consumer>
    {children}
  </Gallery.Consumer>
);

import type { FC } from "react";
import type { RouterProps } from "react-router";
import { BrowserRouter as _Router } from "react-router-dom";
import { Source } from "./Source";


type TProps = Partial<RouterProps> & {
  history: History;
  children: JSX.Element;
};
export const Router: FC<TProps> = ({
  history,
  children,
  ...props
}) => (
  <_Router>
    <Source />
  </_Router>
);

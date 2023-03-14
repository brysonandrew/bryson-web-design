import type { FC } from "react";
import { Content } from "./Content";

type TProps = {
  selectedPath: string;
};
export const Full: FC<TProps> = ({ selectedPath }) => {
  return <Content selectedPath={selectedPath} />;
};

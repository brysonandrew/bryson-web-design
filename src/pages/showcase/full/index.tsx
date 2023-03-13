import { kebabToPascal, kebabToTitle } from "@utils/format";
import type { FC } from "react";
import * as components from "../components";
import { Content } from "./Content";

type TProps = {
  selectedPath: string | null;
};
export const Full: FC<TProps> = ({ selectedPath }) => {
  if (selectedPath === null) return null;
  const title = kebabToTitle(selectedPath);
  const componentKey = kebabToPascal(selectedPath);
  const Selected = (components as Record<string, any>)[
    componentKey
  ];
  return (
    <Content item={title}>
      <Selected />
    </Content>
  );
};

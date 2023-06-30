import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import type { FC } from "react";
import { Close } from "./Close";
import { Container } from "./Container";
import { Title } from "./Title";
import { Gallery } from "./gallery";

type TProps = {
  selectedPath: string;
};
export const Full: FC<TProps> = ({ selectedPath }) => {
  useFreezeScrollBar();
  return (
    <Container
      layoutId={selectedPath}
      classValue="fixed inset-0 screen-width screen-height text-teal-bright"
    >
      <Title>{selectedPath}</Title>
      <Close />
      <Gallery selectedPath={selectedPath} />
    </Container>
  );
}; 

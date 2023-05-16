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
      id={selectedPath}
      classValue="fixed top-0 left-0 screen-width screen-height z-10 text-teal-bright bg-black-08"
      style={{ zIndex: 99, backdropFilter: "blur(10px)" }}
    >
      <Title>{selectedPath}</Title>
      <Close />
      <Gallery selectedPath={selectedPath} />
    </Container>
  );
};

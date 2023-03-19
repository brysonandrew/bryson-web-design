import styled from "@emotion/styled";
import type {
  TMedia,
  TMediaRecord,
} from "@pages/showcase/config";
import type { FC } from "react";
import { Footer } from "./footer";
import { Sections } from "./sections";
import { useX } from "./useX";
import { useMotionValue } from "framer-motion";

const Root = styled.div``;

const ScrollArea = styled.div``;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Gallery: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  const items: TMedia[] = mediaRecord[selectedPath];
  const count = items.length;
  const motionX = useMotionValue(0);

  return (
    <Root className="h-screen w-screen overflow-hidden">
      <Sections items={items} motionX={motionX} />
      <Footer items={items} motionX={motionX} />
    </Root>
  );
};

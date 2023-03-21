import type { FC } from "react";
import {
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import type {
  TMedia,
  TMediaRecord,
} from "@pages/showcase/config";
import { Footer } from "./footer";
import { Sections } from "./sections";
import { useArrowKeys } from "./useArrowKeys";
import { useWindowSize } from "@hooks/useWindowSize";
import type { TBase, TBaseProps } from "./types";

const Root = styled.div``;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
  base?: TBase;
};
export const Gallery: FC<TProps> = ({
  mediaRecord,
  selectedPath,
  base = "showcase",
}) => {
  const items: TMedia[] = mediaRecord[selectedPath];
  const count = items.length;
  const motionX = useMotionValue(0);
  useArrowKeys({ count });

  const windowSize = useWindowSize();
  if (!windowSize) return null;

  const width = windowSize.width * 0.7;
  const itemWidth = width / count;

  const props: TBaseProps = {
    width,
    itemWidth,
    items,
    count,
    motionX,
    base,
  };

  return (
    <Root className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        {!windowSize.isResizing && <Sections {...props} />}
      </AnimatePresence>
      <Footer {...props} />
    </Root>
  );
};

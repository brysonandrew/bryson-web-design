import type { FC } from "react";
import {
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import { useWindowSize } from "@hooks/useWindowSize";
import { useMediaFromKey } from "@pages/showcase/useMediaFromKey";
import { Footer } from "./footer";
import { Sections } from "./sections";
import { useKeys } from "./useKeys";
import type { TBase, TBaseProps } from "./types";

const Root = styled.div``;

type TProps = {
  selectedPath: string;
  base?: TBase;
};
export const Gallery: FC<TProps> = ({
  selectedPath,
  base = "showcase",
}) => {
  const mediaItems = useMediaFromKey(selectedPath);
  const motionX = useMotionValue(0);

  const count = mediaItems?.length ?? 0;

  useKeys({ count });

  const windowSize = useWindowSize();

  if (!windowSize || mediaItems === null) return null;

  const width = windowSize.width * 0.7;
  const itemWidth = width / count;

  const props: TBaseProps = {
    width,
    itemWidth,
    items: mediaItems,
    count,
    motionX,
    base,
  };

  return (
    <Root className="relative h-screen w-full overflow-hidden bg-black-05 backdrop-blur-lg">
      <AnimatePresence>
        {!windowSize.isResizing && <Sections {...props} />}
      </AnimatePresence>
      <Footer {...props} />
    </Root>
  );
};

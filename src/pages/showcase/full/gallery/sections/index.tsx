import { useRef } from "react";
import type { FC } from "react";
import { motion, useTransform } from "framer-motion";
import { Section } from "./Section";
import type { TBaseProps } from "../types";
import styled from "@emotion/styled";
import { PRESENCE_OPACITY } from "@constants/animation";
import {
  CONTENT_OFFSET_SIZE,
  HEADER_SIZE,
} from "./constants";
import { Image } from "./image";
import type { TMedia } from "@pages/showcase/config";
import { Filter } from "./Filter";

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { items, count, motionX, width } = props;
  const left = useTransform(
    motionX,
    (v) => `${(-v * count * 100) / width + 50}vw`,
  );
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Root
      key="Sections"
      ref={ref}
      className="min-h-screen mx-auto"
      style={{ width, left }}
      {...PRESENCE_OPACITY}
    >
      <Filter motionX={motionX} />
      <motion.ul
        className="absolute flex"
        style={{ left, top: HEADER_SIZE + 40 }}
      >
        {items.map((item: TMedia, index: number) => (
          <Section
            key={item.key}
            root={ref}
            style={{
              left: `${-index * 100}vw`,
              x: "-50%",
              width,
              height: `calc(100vh - ${CONTENT_OFFSET_SIZE}px)`,
            }}
          >
            <Image item={item} />
          </Section>
        ))}
      </motion.ul>
    </Root>
  );
};

import { useRef } from "react";
import type { FC } from "react";
import { motion, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Marker } from "./Marker";
import type { TBaseProps } from "../types";
import styled from "@emotion/styled";
import { PRESENCE_OPACITY } from "@constants/animation";
import {
  CONTENT_OFFSET_SIZE,
  HEADER_SIZE,
} from "./constants";

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
      className="bg-black-95 backdrop-blur-xl min-h-screen mx-auto"
      style={{ width, left }}
      {...PRESENCE_OPACITY}
    >
      <Marker itemWidth={width / count} />
      <motion.ul
        className="absolute flex"
        style={{ left, top: HEADER_SIZE }}
      >
        {items.map(({ key, name, file }, index: number) => (
          <Section
            key={key}
            root={ref}
            style={{
              left: `${-index * 100}vw`,
              x: "-50%",
              width,
              height: `calc(100vh - ${CONTENT_OFFSET_SIZE}px)`,
            }}
          >
            <motion.img
              className="absolute left-1/2 top-1/2 max-w-full max-h-full shadow-teal-dark-02"
              src={`../../../../../../src/screens/${name}/${file}`}
              alt={key}
              onPointerDown={(e) => e.preventDefault()}
              style={{ x: "-50%", y: "-50%" }}
            />
          </Section>
        ))}
      </motion.ul>
    </Root>
  );
};

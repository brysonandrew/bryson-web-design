import { useRef } from "react";
import type { FC } from "react";
import { motion, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Marker } from "./Marker";
import type { TBaseProps } from "../types";
import styled from "@emotion/styled";

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
      ref={ref}
      className="bg-black-95 backdrop-blur-xl min-h-screen mx-auto"
      style={{ width, left }}
    >
      <Marker itemWidth={width / items.length} />
      <motion.ul
        className="absolute flex top-1/2"
        style={{ left }}
      >
        {items.map(({ key, name, file }, index: number) => (
          <Section
            key={key}
            root={ref}
            style={{
              left: `${-index * 100}vw`,
              x: "-50%",
              y: "-50%",
              width,
            }}
          >
            <motion.img
              className="shadow-teal-dark-02"
              src={`../../../../../../src/screens/${name}/${file}`}
              alt={key}
              onPointerDown={(e) => e.preventDefault()}
            />
          </Section>
        ))}
      </motion.ul>
    </Root>
  );
};

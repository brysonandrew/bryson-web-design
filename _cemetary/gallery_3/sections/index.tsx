import { useRef } from "react";
import type { FC } from "react";
import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Section } from "./Section";
import { WIDTH } from "./constants";
import { TMedia } from "@pages/showcase/config";

type TProps = {
  items: TMedia[];
  motionX: MotionValue;
};
export const Sections: FC<TProps> = ({
  items,
  motionX: footerX,
}) => {
  const itemWidth = WIDTH / items.length;
  const left = useTransform(
    footerX,
    (v) => `${(v * items.length * 100) / WIDTH}vw`,
  );
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className="bg-black-95 backdrop-blur-xl min-h-screen mx-auto"
      style={{ width: WIDTH }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-002 h-full"
        style={{ width: itemWidth }}
      />
      <motion.div
        className="absolute flex"
        style={{ left }}
      >
        {items.map(({ key }, index: number) => (
          <Section
            key={key}
            root={ref}
            left={`calc(${WIDTH * 0.5 * index}px - ${
              index * 25
            }vw)`}
          >
            <div>{key}</div>
          </Section>
        ))}
      </motion.div>
      <div className="py-12" />
    </motion.div>
  );
};

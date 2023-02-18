import type {
  MotionValue} from "framer-motion";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const useParallax = (
  value: MotionValue<number>,
  distance: string
) => useTransform(
    value,
    [0, 1],
    ["-" + distance, distance]
  );

interface Props {
  alt: string;
  category: string;
  index: number;
  aspectRatio: string;
}

export const Image = ({
  alt,
  category,
  index,
  aspectRatio,
}: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");

  return (
    <section>
      <div ref={ref} style={{ aspectRatio }}>
        <img src={`/${category}-${index}.jpg`} alt={alt} />
      </div>
      <motion.h2 style={{ y }}>{`#00${index}`}</motion.h2>
    </section>
  );
};

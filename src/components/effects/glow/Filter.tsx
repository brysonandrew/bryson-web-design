import type { FC } from "react";
import { motion } from "framer-motion";
import { GLOW_ID, HEIGHT, OVERHANG, WIDTH } from "./config";
import COLORS from "../../../../tailwind.config-colors.json";
export const Filter: FC = () => (
  // const glitch = resolveRandomGlitch();
  // const [currGlitch, setGlitch] = useState(glitch);

  // useInterval(() => {
  //   const glitch = resolveRandomGlitch();
  //   setGlitch(glitch);
  // }, (currGlitch.duration + currGlitch.delay) * 1000);

  // const baseFrequency = currGlitch.duration * 0.1;

  <filter
    id={GLOW_ID}
    x={-0}
    y={-0}
    height={HEIGHT}
    width={WIDTH}
    filterUnits="userSpaceOnUse"
  >
    <motion.feMorphology
      operator="dilate"
      radius="1"
      in="SourceAlpha"
      result="fatty"
    />
    <feGaussianBlur
      in="fatty"
      stdDeviation="10"
      result="blur"
    />
    <motion.feFlood
      floodColor={COLORS["teal-bright"]}
      result="color"
    />
    <feComposite
      in="color"
      in2="blur"
      operator="in"
      result="glow"
    />
    <feMerge>
      <feMergeNode in="glow" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

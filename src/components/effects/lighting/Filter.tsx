import type { FC } from "react";
import { motion } from "framer-motion";
import { LIGHTING_ID } from "./config";


export const Filter: FC = () => (
  // const glitch = resolveRandomGlitch();
  // const [currGlitch, setGlitch] = useState(glitch);

  // useInterval(() => {
  //   const glitch = resolveRandomGlitch();
  //   setGlitch(glitch);
  // }, (currGlitch.duration + currGlitch.delay) * 1000);

  // const baseFrequency = currGlitch.duration * 0.1;

  <filter id={LIGHTING_ID}>
    <motion.feSpecularLighting
      result="spotlight"
      specularConstant="1.5"
      specularExponent="80"
      lighting-color="#FFF"
    >
      <motion.fePointLight x="50" y="50" z="220" />
    </motion.feSpecularLighting>
    <motion.feComposite
      in="SourceGraphic"
      in2="spotlight"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0"
    />
  </filter>
);

import type { FC } from "react";
import type { TFilterProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";
import type { MotionValue} from "framer-motion";
import { motion } from "framer-motion";

type TProps = {
  cursorX?: MotionValue<number>;
  cursorY?: MotionValue<number>;
};
export const Filter: FC<TProps & TFilterProps> = ({
  children,
  id,
  cursorX,
  cursorY,
  result = id,
  source = id,
}) => (
    <>
      <feSpecularLighting
        in={source ?? id}
        result="spotlight"
        specularConstant="1"
        specularExponent="800"
        lightingColor="#FFF"
      >
        <motion.fePointLight
          style={{ x: cursorX, y: cursorY }}
          z="1000"
        />
      </feSpecularLighting>
      <feComposite
        in={source}
        in2="spotlight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
      />
      {children ? children(result ?? id) : null}
    </>
  );

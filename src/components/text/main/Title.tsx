import { Desk } from "@components/icons/Desk";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import type { CSSProperties, FC } from "react";
import { Sub } from "../Sub";
import { GlitchPorsalin } from "./glitch-porsalin";
import { STROKE_CLASS_NAMES } from "./glitch-porsalin/config";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="flex items-center">
      <div className="-mt-3 pl-2">
        <GlitchPorsalin
          offset={0.8}
          tag="div"
          classValues={STROKE_CLASS_NAMES}
        >
          <Desk
            width={44}
            height={44}
            fill="none"
            strokeWidth={8}
          />
        </GlitchPorsalin>
      </div>
      <motion.div
        className="flex relative px-3 pt-2 pb-3 grow"
        style={{ scale: opacity }}
      >
        <motion.div className="hidden flex-col sm:flex">
          <GlitchPorsalin {...props} offset={0.6}>
            <span
              style={{
                position: "relative",
                left: 2,
                top: 2,
                width: "100%",
                fontSize: 19,
              }}
            >
              Andrew Bryson
            </span>
          </GlitchPorsalin>
          <div className="p-1" />
          <Sub
            classValue="relative md:flex"
            style={{ fontSize: 14 }}
          >
            {EXPERIENCE_SLOGAN}
          </Sub>
        </motion.div>
      </motion.div>
    </div>
  );
};

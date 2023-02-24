import type { FC} from "react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import type { TChildren } from "@t/index";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";

type TProps = {
  id: string;
  children?: TChildren;
};
export const TrailPointlight: FC<TProps> = ({ id }) => {
  const { motionValuePairs } = useContext();

  if (!motionValuePairs) return null;
  return (
    <filter
      id={id}
      x="0%"
      y="0%"
      width="100%"
      height="100%"
    >
      {motionValuePairs.map(
        ([x, y]: TMotionValuePair, index: number) => {
          const prev = `${
            index < 1 ? "SourceGraphic" : index - 1
          }`;
          const curr = `${index}`;
          return (
            <Fragment key={curr}>
              <motion.feSpecularLighting
                specularConstant="20"
                specularExponent="80"
                lighting-color="#FFF"
                result={curr}
                in={prev}
              >
                <motion.fePointLight x={x} y={y} z="40" />
              </motion.feSpecularLighting>
              <feComposite
                in2={prev}
                in={curr}
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
              />
            </Fragment>
          );
        },
      )}
    </filter>
  );
};

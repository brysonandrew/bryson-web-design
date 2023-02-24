import { FC, Fragment } from "react";
import { motion } from "framer-motion";
import type { TChildren } from "@t/index";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";

type TProps = {
  id: string;
  children?: TChildren;
};
export const TrailGlow: FC<TProps> = ({ id }) => {
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
            index < 1 ? "SourceAlpha" : index - 1
          }`;
          const curr = `${index}`;
          return (
            <Fragment key={curr}>
              <feImage
                in={`#${index}`}
                result={`circle-${index}`}
              />
              <feComposite
                in2={prev}
                in={`circle-${index}`}
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result={`shape-${index}`}
              />
              <motion.feMorphology
                in={`shape-${index}`}
                operator="dilate"
                radius="1"
                result={`fatty-${index}`}
              />
              <feGaussianBlur
                in={`fatty-${index}`}
                stdDeviation="10"
                result={
                  curr
                  // `blur-${index}`
                }
              />
              {/* <motion.feFlood
                floodColor={COLORS["teal-bright"]}
                result={`flood-${index}`}
              /> */}
              {/* <feComposite
                in2={`blur-${index}`}
                in={`flood-${index}`}
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result={curr}
              /> */}
            </Fragment>
          );
        },
      )}
    </filter>
  );
};

import type { TMotionValuePair } from "@state/types";
import type { TChildren } from "@t/index";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";

type TProps = {
  id: string;
  motionValuePairs: TMotionValuePair[];
  children?: TChildren;
};
export const TrailGlow: FC<TProps> = ({
  id,
  motionValuePairs,
}) => (
  <filter id={id} x="0%" y="0%" width="100%" height="100%">
    {motionValuePairs.map(
      (_: TMotionValuePair, index: number) => {
        if (index === 0) return null;
        const prev =
          index === 0 ? "SourceGraphic" : `${index - 1}`;
        const curr = `${index}`;

        return (
          <Fragment key={curr}>
            <feImage
              in={`#${index}`}
              result={`image-${index}`}
            />
            <feComposite
              in2={prev}
              in={`image-${index}`}
              operator="lighter"
              result={`shape-${index}`}
            />
            <motion.feMorphology
              in={`shape-${index}`}
              operator="erode"
              radius="10"
              result={`fatty-${index}`}
            />
            <feGaussianBlur
              in={`fatty-${index}`}
              stdDeviation="1000"
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

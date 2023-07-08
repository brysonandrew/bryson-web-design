import type { FC } from "react";
import type {
  HTMLMotionProps,
  MotionStyle,
} from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import {
  CURSOR_SIZE,
  SELECT_LAYOUT_ID,
} from "../cursor/config";
import { resolveUrlId } from "@utils/resolveUrlId";
import { POOL_ID } from "@components/cursor";
import { useDomCondition } from "@hooks/useDomCondition";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  classValue?: ClassValue;
  style?: MotionStyle;
};
export const Square: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  const isChrome = useDomCondition(
    () => window.navigator.userAgent.search("Chrome") > 0,
  );

  return (
    <Root
      initial={false}
      layoutId={SELECT_LAYOUT_ID}
      layout="size"
      style={{
        y: 0,
        x: 0,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        backdropFilter: isChrome
          ? resolveUrlId(POOL_ID)
          : "invert(100%)",
        ...(isChrome
          ? { filter: resolveUrlId(POOL_ID) }
          : {}),
        ...style,
      }}
      className={clsx(
        "fixed z-40 pointer-events-none cursor-crosshair",
        classValue,
      )}
      animate={{
        opacity: [1, 0.4],
      }}
      transition={{
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
        duration: 2,
      }}
      {...props}
    />
  );
};

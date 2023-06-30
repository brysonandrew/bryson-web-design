import type { FC } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { SM } from "@css/layout";
import type { TVariant } from "./config";
import { RECORDER_ICON_ANIMATION } from "./config";

const Root = styled(motion.i)``;

type TProps = HTMLMotionProps<"i"> & {
  variant: TVariant;
};
export const RecorderIcon: FC<TProps> = ({
  variant,
  ...props
}) => (
  <Root
    className={clsx(
      "absolute right-full top-1/2 rounded-full",
      SM
    )}
    style={{ x: -10, y: "-50%" }}
    initial={{ opacity: 0 }}
    {...RECORDER_ICON_ANIMATION[variant]}
    {...props}
  />
);

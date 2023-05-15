import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Review } from "./Review";

const Root = styled(motion.li)``;

type TProps = HTMLMotionProps<"li"> & {
  isActive: boolean;
  index: number;
  isLong: boolean;
};
export const Main: FC<TProps> = ({
  index,
  isActive,
  isLong,
  ...props
}) => (
  <Root
    className={clsx(
      "absolute left-full top-0 px-1 py-2 m-1 w-xs xs:w-sm sm:w-md m:w-lg lg:w-xl xl:w-xxl",
    )}
    {...props}
  >
    {!isLong && (
      <motion.div
        className="absolute inset-0 bg-transparent"
        layoutId={`${index}`}
      />
    )}
    <Review index={index} type="short" />
  </Root>
);

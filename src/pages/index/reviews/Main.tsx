import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps} from "framer-motion";
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
        "absolute left-full top-0 uppercase px-1 py-2 m-1 w-mid lg:w-mid-lg xl:w-mid-xl",
      )}
      {...props}
    >
      {!isLong && (
        <motion.div
          className="absolute inset-0 bg-transparent"
          layoutId={`${index}`}
        />
      )}
      <motion.div
        className="absolute top-2 bottom-2 shadow-teal left-0 w-1 h-full bg-teal-bright"
        animate={{ opacity: isActive ? 1 : 0.2 }}
      />
      <Review index={index} type="short" />
    </Root>
  );

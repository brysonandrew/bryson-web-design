import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { WIDTH } from "../sections/constants";
import COLORS from "@windi/config-colors.json";

export const Root = styled(motion.li)``;
export const Background = styled(motion.div)``;

export type TItemProps = {
  name: string;
  to: string;
  count: number;
};
export const Item: FC<TItemProps> = ({
  name,
  to,
  count,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const itemWidth = WIDTH / count;
  const animation = isActive ? "active" : "init";
  return (
    <Root
      initial={animation}
      animate={animation}
      style={{
        width: itemWidth,
      }}
      whileHover={animation}
      className="relative m-0.25 hover:z-50"
    >
      <Background
        variants={{
          init: {
            scaleY: 1,
            scaleX: 1,
            backgroundColor: COLORS["pink-04"],
          },
          active: {
            scaleY: 1,
            scaleX: 1,
            backgroundColor: COLORS["purple-04"],
          },
          hover: {
            scaleY: 1.2,
            scaleX: 1 + itemWidth / WIDTH,
            backgroundColor: COLORS["purple-04"],
          },
        }}
        className="absolute inset-0"
      />
      <Link
        to={to}
        className={clsx(
          "relative flex items-center pl-2 pt-1 pb-1 h-full bg-black bg-opacity-95 m-0.5 z-10",
          [isActive && "bg-opacity-90 cursor-default"],
        )}
      >
        <motion.span
          variants={{
            init: {
              opacity: 0.5,
            },
            active: {
              opacity: 1,
            },
            hover: {
              opacity: 0.7,
            },
          }}
          className="uppercase text-white-dark text-xs"
        >
          {name}
        </motion.span>
      </Link>
    </Root>
  );
};

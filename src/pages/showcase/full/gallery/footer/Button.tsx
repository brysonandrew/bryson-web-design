import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { IMG_KEY } from "@pages/showcase/config";
import { useMoveSound } from "@hooks/sounds/useMoveSound";

const TEXT_GLOW =
  "1px 1px 16px white, 0 0 8em white, 0 0 1em white";
const NO_TEXT_GLOW =
  "1px 1px 0px white, 0 0 0em white, 0 0 0em white";

export const Root = styled(motion.li)``;
export const Background = styled(motion.div)``;

export type TProps = {
  name: string;
  to: string;
  itemWidth: number;
};
export const Button: FC<TProps> = ({
  itemWidth,
  name,
  to,
}) => {
  const [searchParams] = useSearchParams();
  const imgParam = searchParams.get(IMG_KEY);
  const isActive = imgParam === to.split(`${IMG_KEY}=`)[1];
  const animation = isActive ? "active" : "idle";
  const handleMoveSound = useMoveSound();
  const handleClick = () => {
    handleMoveSound();
  };
  return (
    <Root
      initial="idle"
      animate={animation}
      style={{
        width: itemWidth,
      }}
      whileHover={isActive ? "active" : "hover"}
      className="relative shadow-teal-bright-sm m-0.25"
      variants={{
        active: { cursor: "default", zIndex: 99 },
      }}
    >
      <Link
        to={to}
        onClick={handleClick}
        className={clsx(
          "relative flex items-center pl-2 pt-1 pb-1 h-full bg-black m-0.5 z-10",
        )}
        style={{ cursor: isActive ? "default" : "pointer" }}
      >
        {isActive && (
          <motion.div
            layoutId="SELECTED_GALLERY_BUTTON"
            className="absolute inset-0 bg-teal-bright-02"
          />
        )}
        <motion.span
          className="uppercase text-teal-bright text-xs"
          variants={{
            idle: {
              opacity: 0.5,
              textShadow: NO_TEXT_GLOW,
            },
            active: {
              opacity: 1,
              textShadow: TEXT_GLOW,
            },
            hover: {
              opacity: 0.7,
              textShadow: NO_TEXT_GLOW,
            },
          }}
        >
          {name}
        </motion.span>
      </Link>
    </Root>
  );
};

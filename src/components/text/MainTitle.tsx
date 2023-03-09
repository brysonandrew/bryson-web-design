import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "../typewriter";
import { useResetScroll } from "@hooks/useResetScroll";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Border as Select } from "@components/select/Border";
import { useContext } from "@state/Context";

const TITLE_ID = "TITLE_ID";

const Root = styled(motion.div)``;
const H1 = styled(motion.h1)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const MainTitle: FC<TProps> = ({ scale, x }) => {
  const { isInit } = useContext();
  const { handlers, isSelected } =
    useSelectHandlers(TITLE_ID);
  const linkText = "brysona.dev";

  const handleResetScroll = useResetScroll();
  return (
    <Root
      className="relative grow-0 z-10 top-0.5"
      style={{ scale, x }}
      onTap={handleResetScroll}
      {...handlers}
    >
      {isSelected && <Select />}
      <Link className="flex relative px-3 pt-2 pb-3" to="/">
        <H1 className="text-teal-bright text-xl uppercase leading-none">
          {isInit ? (
            <Typewriter wip={linkText}>
              {(content) => <>{content}</>}
            </Typewriter>
          ) : (
            linkText
          )}
        </H1>
      </Link>
    </Root>
  );
};

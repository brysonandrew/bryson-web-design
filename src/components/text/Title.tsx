import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "../typewriter";
import { useResetScroll } from "@hooks/useResetScroll";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { SELECT_LAYOUT_ID } from "@components/cursor/config";
import { Select } from "@components/Select";

const TITLE_ID = "TITLE_ID";

const Root = styled(motion.div)``;
const H1 = styled(motion.h1)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const Title: FC<TProps> = ({ scale, x }) => {
  const { handlers, isSelected } =
    useSelectHandlers(TITLE_ID);

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
        <Typewriter delay={100} wip="brysona.dev">
          {(content) => (
            <H1 className="text-xl uppercase leading-none">
              {content}
            </H1>
          )}
        </Typewriter>
      </Link>
    </Root>
  );
};

import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useResetScroll } from "@hooks/useResetScroll";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link as _Link } from "react-router-dom";
import { Title } from "./Title";
import { useOffSound } from "@hooks/sounds/useOffSound";

const TITLE_ID = "TITLE_ID";

const Root = styled(motion.div)``;

export const Link: FC = () => {
  const { handlers, isSelected } =
    useSelectHandlers(TITLE_ID);
  const handleResetScroll = useResetScroll();
  const handleClick = useOffSound();

  return (
    <Root onTap={handleResetScroll} {...handlers}>
      <_Link
        className="flex flex-col relative"
        to="/"
        onClick={handleClick}
      >
        {isSelected && <Select />}
        <Title />
      </_Link>
    </Root>
  );
};

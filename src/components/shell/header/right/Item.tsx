import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Border as Select } from "../../../select/Border";
import { useOffSound } from "@hooks/sounds/useOffSound";

const Root = styled(motion.li)``;

type TProp = {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({ to, children }) => {
  const { handlers, isSelected } = useSelectHandlers(to);
  const handleClick = useOffSound();
  return (
    <Root className="relative" {...handlers}>
      <Link
        to={to}
        onClick={handleClick}
        className="flex items-center justify-center pl-2 pr-1 pt-1 pb-1.5 bg-transparent"
      >
        {isSelected && <Select />}

        <h6
          className="relative text-teal-bright uppercase text-xxxs"
          style={{ letterSpacing: 4 }}
        >
          {children}
        </h6>
      </Link>
    </Root>
  );
};

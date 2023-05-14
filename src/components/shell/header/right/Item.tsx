import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import styled from "@emotion/styled";
import { useOffSound } from "@hooks/sounds/useOffSound";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import FONT_SIZE from "@windi/config-font-size.json";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Border as Select } from "../../../select/Border";
import { Fill } from "@components/metal/Fill";

const Root = styled(motion.li)``;

type TProp = {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({ to, children }) => {
  const { handlers, isSelected } = useSelectHandlers(to);
  const handleClick = useOffSound();
  return (
    <Root className="relative mb-0.5" {...handlers}>
      <Link
        to={to}
        onClick={handleClick}
        className="relative flex items-center justify-center py-2.5 pl-3 pr-2.5 bg-transparent text-xxxs lg:text-xs xl:text-sm"
      >
        <Fill inset={1} />
        {isSelected && <Select />}
        <GlitchPorsalin
          offset={2.8}
          tag="h6"
          classValue="uppercase"
        >
          {children}
        </GlitchPorsalin>
      </Link>
    </Root>
  );
};

import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Border as Select } from "../../../select/Border";
import { useOffSound } from "@hooks/sounds/useOffSound";
import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import FONT_SIZE from "@windi/config-font-size.json";
import { resolveUrlId } from "@utils/resolveUrlId";
import { ID } from "@components/effects/displacement";
import { TEXT_CLASS_NAMES } from "@components/text/main/glitch-porsalin/config";

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
        <GlitchPorsalin
          style={{ fontSize: FONT_SIZE["xxxs"] }}
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

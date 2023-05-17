import { FilterShell } from "@components/FilterShell";
import { Displacement } from "@components/effects/displacement";
import styled from "@emotion/styled";
import { TChildren } from "@t/index";
import { motion } from "framer-motion";
import { FC } from "react";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => {
  return (
    <Root className="w-screen h-screen bg-black-dark text-white">
      <FilterShell>
        <Displacement />
      </FilterShell>
      {children}
    </Root>
  );
};

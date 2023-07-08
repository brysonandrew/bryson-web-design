import { Displacement } from "@components/effects/displacement";
import { FilterShell } from "@components/filters/FilterShell";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => (
    <Root className="flex flex-col bg-black text-white">
      <FilterShell>
        <Displacement />
      </FilterShell>
      {children}
    </Root>
  );

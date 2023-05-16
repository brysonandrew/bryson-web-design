import { FilterShell } from "@components/FilterShell";
import { Displacement } from "@components/effects/displacement";
import styled from "@emotion/styled";
import { useStyles } from "@styles/useStyles";
import { motion } from "framer-motion";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { SIZE } from "./constants";
import { Description } from "./Description";
import { Space6 } from "@components/spaces/Space6";
import { Experience } from "./Experience";
import { Space4 } from "@components/spaces/Space4";

const Root = styled(motion.div)``;
const _Card = styled(motion.div)``;

export const Cv = () => {
  useStyles();
  return (
    <Root className="w-screen h-screen bg-black-dark">
      <FilterShell>
        <Displacement />
      </FilterShell>
      <_Card
        className="flex flex-col items-center pt-12 bg-black"
        style={{ ...SIZE }}
      >
        <Contact />
        <Space4 />
        <Header />
        <Space4 />
        <div className="w-3/4">
          <Description />
          <Space4 />
          <Experience />
        </div>
      </_Card>
    </Root>
  );
};

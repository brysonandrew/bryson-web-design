import { Speech as _Speech } from "@moth-components/speech";
import { CENTER } from "@moth-constants/styles";
import styled from "@emotion/styled";
import clsx from "clsx";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;
const Panel = styled(motion.div)``;

export const Speech = () => (
    <Root className={clsx(CENTER)}>
      <Panel className="p-4 w-core">
        <_Speech />
      </Panel>
    </Root>
  ); 
 
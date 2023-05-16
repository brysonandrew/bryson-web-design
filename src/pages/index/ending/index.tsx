import { Fill } from "@components/metal/Fill";
import { Space2 } from "@components/spaces/Space2";
import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { type FC } from "react";
import { Contact } from "./Contact";
import { Showroom } from "./Showcase";
import { Home } from "./Home";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Ending: FC<TProps> = () => (
    <Root className="relative flex flex-col items-center">
      <div className="inline-flex flex-col items-start">
        <div
          className="absolute"
          style={{ width: 10, height: 600 }}
        >
          <Fill />
        </div>
        <Showroom />
        <Space2 />
        <Contact />
        <Space2 />
        <Home />
      </div>
    </Root>
  );

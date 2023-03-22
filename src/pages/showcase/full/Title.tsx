import styled from "@emotion/styled";
import { kebabToTitle } from "@utils/format";
import { motion } from "framer-motion";
import type { FC } from "react";
import { HEADER_SIZE } from "./gallery/sections/constants";
import { TextSm } from "@components/text/TextSm";

const Text = styled(motion.div)``;

type TProps = {
  children: string;
};
export const Title: FC<TProps> = ({ children }) => {
  return (
    <div
      className="absolute left-18 top-10 flex items-center justify-between z-10"
      style={{ height: HEADER_SIZE }}
    >
      <TextSm >
        {kebabToTitle(children)}
      </TextSm>
    </div>
  );
};

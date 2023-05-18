import styled from "@emotion/styled";
import { resolveUrlId } from "@utils/resolveUrlId";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { MORPH_ID } from "@components/background/morph";
import { PATTERN_ID } from "@components/background/pattern";
import { Processor } from "@components/icons/Processor";

const Root = styled(motion.svg)``;
const Rect = styled(motion.rect)``;

type TProps = {
  classValue?: ClassValue;
};
export const Pattern: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx("fixed inset-0", classValue)}
    width="100%"
    height="100%"
  >
    <Rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill={resolveUrlId(PATTERN_ID)}
      filter={resolveUrlId(MORPH_ID)}
    />
          <Processor width="100%" height="100%" stroke="green" fill="unset" />

  </Root>
);

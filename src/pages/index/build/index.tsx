import { ThinLineGap } from "@components/ThinLineGap";
import { Blinders } from "@components/blinders/Blinders";
import { TextXl } from "@components/text/TextXl";
import { STORY } from "@constants/copy";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildrenProps } from "./Motion";
import { Text } from "./Text";
import { Images } from "./images";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Build: FC<TProps> = ({ opacityBlinders }) => (
  <Root className="flex flex-col items-center">
    <TextXl>{STORY.build}</TextXl>
    <ThinLineGap />
    <div className="relative overflow-hidden w-full">
      <Blinders opacity={opacityBlinders} />
      <Images />
      <Text />
    </div>
  </Root>
);

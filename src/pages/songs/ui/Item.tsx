import { Play } from "@moth-components/icons/Play";
import { Playing } from "@moth-components/icons/Playing";
import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.li)``;
const Button = styled(motion.button)``;
const Icon = styled(motion.div)``;

type TProps = HTMLMotionProps<"button"> & {
  isPlaying: boolean;
  name: string;
};
export const Item: FC<TProps> = ({
  isPlaying,
  name,
  ...props
}) => (
  <Root className="relative shadow-teal-08">
    {isPlaying && (
      <motion.div
        layoutId="NOW_PLAYING"
        className="absolute inset-0 shadow-teal-04-sm pointer-events-none"
      />
    )}
    <Button className="flex items-center" {...props}>
      <Icon className="flex items-center justify-center w-12 h-12">
        {isPlaying ? <Playing /> : <Play />}
      </Icon>
      <div className="p-2" />
      <p>{name}</p>
      <div className="p-2" />
    </Button>
  </Root>
);

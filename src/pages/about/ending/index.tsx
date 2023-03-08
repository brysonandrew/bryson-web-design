import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Text } from "../Text";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Ending: FC<TProps> = () => (
  <Root className="flex flex-col items-start">
    <Link to="/contact">
      <Text>
        Get in touch if you would like to collaborate
      </Text>
    </Link>
  </Root>
);

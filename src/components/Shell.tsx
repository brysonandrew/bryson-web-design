import type { FC} from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import type { TChildren } from "@t/index";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  return <Root className="bg-black">{children}</Root>;
};

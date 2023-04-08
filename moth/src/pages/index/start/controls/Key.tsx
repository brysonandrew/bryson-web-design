import { Down } from "@components/icons/Down";
import { Left } from "@components/icons/Left";
import { Right } from "@components/icons/Right";
import { Up } from "@components/icons/Up";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { type FC } from "react";

const LOOKUP: Record<string, JSX.Element> = {
  ArrowUp: <Up />,
  ArrowDown: <Down />,
  ArrowLeft: <Left />,
  ArrowRight: <Right />,
};

const Root = styled(motion.h6)``;

type TProps = {
  children: string;
};
export const Key: FC<TProps> = ({ children }) => {
  return (
    <>
      {LOOKUP[children] ? (
        <Root className="py-0.5 px-1 shadow-teal-02">
          {LOOKUP[children]}
        </Root>
      ) : (
        <Root className="py-0.5 px-2.5 shadow-teal-02">
          {children}
        </Root>
      )}
    </>
  );
};

import { motion, useIsPresent } from "framer-motion";
import styled from "@emotion/styled";

const Root = styled(motion.div)``;

export const Screen = () => {
  const isPresent = useIsPresent();

  return (
    <Root
      className="fixed inset-0 bg-purple z-20"
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      exit={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circIn" },
      }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  );
};

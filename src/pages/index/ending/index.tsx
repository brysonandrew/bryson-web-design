import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useRef, type FC } from "react";
import { Link } from "react-router-dom";
import { Text } from "@components/text/Text";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Border as Select } from "@components/select/Border";
import { Pulse } from "@components/select/Pulse";
import { WHITE_FILTER } from "../constants";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Ending: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers("ending");
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  return (
    <Root
      ref={ref}
      className="relative flex flex-col items-start"
      {...handlers}
    >
      <Link
        to="/contact"
        className="relative px-1 py-2 bg-white-005 m-1 backdrop-blur-xl"
      >
        {isSelected ? (
          <Select />
        ) : isInView ? (
          <Pulse />
        ) : null}
        <Text>
          <span style={WHITE_FILTER}>👉 </span>
          Get in touch if you would like to collaborate
        </Text>
      </Link>
    </Root>
  );
};

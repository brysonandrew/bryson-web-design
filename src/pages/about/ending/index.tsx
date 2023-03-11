import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../../components/text/Text";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Border as Select } from "@components/select/Border";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Ending: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers("ending");
  return (
    <Root
      className="relative flex flex-col items-start"
      {...handlers}
    >
      <Link
        to="/contact"
        className="relative px-1 py-2 bg-teal-01 m-1 backdrop-blur-xl"
      >
        {isSelected && <Select />}
        <Text>
         👋 Get in touch if you would like to collaborate
        </Text>
      </Link>
    </Root>
  );
};

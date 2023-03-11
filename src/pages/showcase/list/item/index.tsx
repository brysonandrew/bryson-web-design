import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

const Root = styled(motion.li)``;

type TProps = { children: string };
export const Item: FC<TProps> = ({ children }) => {
  const { isSelected, handlers } =
    useSelectHandlers(children);
  return (
    <Root className="flex relative" {...handlers}>
      <Link
        to={`/showcase/${children
          .toLowerCase()
          .replace(/\s/g, "-")}`}
        className="px-6 py-4 rounded-md shadow-teal-04-sm bg-teal-005 w-full"
      >
        {isSelected && <Select />}
        {children}
      </Link>
    </Root>
  );
};

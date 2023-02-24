import { Select } from "@components/Select";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../constants/tech";

const Root = styled(motion.li)``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({ icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root
      className="relative rounded-xs shrink-0 mt-2"
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className="relative flex items-center pt-2 pb-3 px-3"
        href={href}
        target="_blank"
      >
        {icon}
        <div className="p-1" />
        <h3 className="text-md">{title}</h3>
      </Anchor>
    </Root>
  );
};

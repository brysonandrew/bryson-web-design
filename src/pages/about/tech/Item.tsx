import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { XXL, XXXXL } from "@styles/style";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../constants/tech";

const Root = styled(motion.div)``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root
      className="inline-flex relative rounded-xs mt-2 ml-2 rounded-md"
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className="relative flex items-center pt-2 pb-2 px-2 bg-teal-01"
        href={href}
        target="_blank"
      >
        <Icon classValue={XXL} />
        <div className="p-2" />
        <h3 className="text-2xl">{title}</h3>
      </Anchor>
    </Root>
  );
};

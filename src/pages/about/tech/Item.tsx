import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../constants/tech";
import { LG, XL, XXXXL } from "@styles/style";

const Root = styled(motion.div)``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root
      className="inline-flex relative rounded-xs mt-2"
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className="relative flex items-center pt-2 pb-3 px-3"
        href={href}
        target="_blank"
      >
        <Icon classValue={XXXXL} />
        <div className="p-2" />
        <h3 className="text-2xl">{title}</h3>
      </Anchor>
    </Root>
  );
};

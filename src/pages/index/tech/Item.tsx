import { Border as Select } from "@components/select/Border";
import { TextLg } from "@components/text/TextLg";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { XXXXL } from "@styles/style";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../constants/tech";

const Root = styled(motion.div)``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root
      className="inline-flex relative rounded-xs rounded-md"
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className="relative flex items-center p-2 lg:p-3 xl:p-4 bg-white-005"
        href={href}
        target="_blank"
      >
        <Icon classValue={XXXXL} />
        <div className="p-2" />
        <TextLg>{title}</TextLg>
      </Anchor>
    </Root>
  );
};

import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { XXL, XXXXL } from "@styles/style";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../constants/tech";
<<<<<<< Updated upstream
import { TextLg } from "@components/text/TextLg";
=======
import { LG, XL, XXXXL } from "@styles/style";
>>>>>>> Stashed changes

const Root = styled(motion.div)``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root
<<<<<<< Updated upstream
      className="inline-flex relative rounded-xs mt-2 ml-2 rounded-md"
=======
      className="inline-flex relative rounded-xs mt-2"
>>>>>>> Stashed changes
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className="relative flex items-center pt-2 pb-2 px-2 bg-teal-01"
        href={href}
        target="_blank"
      >
<<<<<<< Updated upstream
        <Icon classValue={XXL} />
        <div className="p-2" />
        <TextLg>{title}</TextLg>
=======
        <Icon classValue={XXXXL} />
        <div className="p-2" />
        <h3 className="text-2xl">{title}</h3>
>>>>>>> Stashed changes
      </Anchor>
    </Root>
  );
};

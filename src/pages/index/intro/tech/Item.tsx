import { Border as Select } from "@components/select/Border";
import clsx from "clsx";
import { Text } from "@components/text/Text";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { XXXXL } from "@styles/style";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "../../../../constants/tech";
import { LINE_COLOR_STYLE } from "@components/Line";
import { Fill } from "@components/metal/Fill";

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
        className={clsx(
          "relative p-2 lg:p-3 xl:p-4",
          LINE_COLOR_STYLE,
        )}
        href={href}
        target="_blank"
      >
        <Fill classValue="rounded-sm" inset={1} />
        <div className="relative flex items-center z-10">
          <Icon classValue={XXXXL} />
          <div className="p-2" />
          <Text>{title}</Text>
        </div>
      </Anchor>
    </Root>
  );
};

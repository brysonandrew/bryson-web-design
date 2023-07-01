import { Link as Icon } from "@components/icons/Link";
import { Border } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.a)``;

type TProps = {
  href: string;
};
export const Link: FC<TProps> = ({ href }) => {
  const { isSelected, handlers } = useSelectHandlers(href);
  return (
    <Root
      className="relative p-2 text-teal-bright-fade hover:text-teal-bright"
      href={href}
      target="_blank"
      {...handlers}
    >
      {isSelected && <Border />}
      <Icon classValue="w-4 h-4" title={href} />
    </Root>
  );
};

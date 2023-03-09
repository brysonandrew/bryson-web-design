import { Link } from "@components/icons/Link";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { BACKGROUND_DARK_CLASS } from "@styles/backgrounds";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TItem } from "./constants";
import { Border as Select } from "@components/select/Border";

const Root = styled.li``;
const Row = styled.div``;
const Date = styled(motion.h3)``;

export const Item: FC<TItem> = ({
  title,
  description,
  time,
  href,
}) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root className="relative">
      <Date
        className="hidden md:flex absolute left-full text-teal top-1/2 text-xxxs uppercase whitespace-nowrap"
        style={{ x: 60, y: "-50%" }}
      >
        {`— ${
          typeof time === "undefined"
            ? "Present"
            : new Intl.DateTimeFormat("en-UK", {
                month: "short",
                year: "numeric",
              }).format(time)
        }`}
      </Date>
      <Row
        className={clsx(
          "pl-2.5 pr-0 pt-0 pb-2.5 rounded-sm",
          BACKGROUND_DARK_CLASS,
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-md">{title}</h2>
          <div className="p-1" />
          <motion.a
            className="relative p-2 text-teal-bright-fade hover:text-teal-bright"
            href={href}
            target="_blank"
            {...handlers}
          >
            {isSelected && <Select />}
            <Link classValue="w-4 h-4" title={href} />
          </motion.a>
        </div>
        <h3 className="text-md text-teal-bright-m20">
          {description}
        </h3>
      </Row>
    </Root>
  );
};

import styled from "@emotion/styled";
import type { FC } from "react";
import type { TItem } from "./constants";
import { motion } from "framer-motion";
import COLORS from "@windi/config-colors.json";
import { Link } from "@components/icons/Link";
import clsx from "clsx";
import { BACKGROUND_CLASS, BACKGROUND_DARK_CLASS } from "@styles/backgrounds";

const Root = styled.li``;
const Row = styled.div``;
const Date = styled(motion.h3)``;

export const Item: FC<TItem> = ({
  title,
  description,
  time,
  href,
}) => (
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
        "flex flex-col px-3 py-2 rounded-sm",
        BACKGROUND_DARK_CLASS,
      )}
      // style={{
      //   filter: `drop-shadow(0px 0px 1px ${COLORS["teal-bright-fade"]})`,
      // }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-md">{title}</h2>
        <div className="p-1" />
        <a
          className="text-teal-bright-fade hover:text-teal-bright"
          href={href}
          target="_blank"
        >
          <Link classValue="w-4 w-h" title={href} />
        </a>
      </div>
      <div className="p-0.5" />
      <h3 className="text-md text-teal-bright-m20">
        {description}
      </h3>
    </Row>
  </Root>
);

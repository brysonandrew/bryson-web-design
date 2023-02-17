import styled from "@emotion/styled";
import type { FC } from "react";
import type { TItem } from "./constants";
import { motion } from "framer-motion";

const Root = styled.li``;
const Header = styled.header``;
const Row = styled.div``;
const Date = styled(motion.h3)``;

const Mid = styled.div``;
const Footer = styled.footer``;

export const Item: FC<TItem> = ({
  title,
  description,
  time,
}) => (
  <Root>
    <Header className="relative">
      <Date
        className="absolute left-full text-teal top-1/2 text-xxxs uppercase whitespace-nowrap"
        style={{ x: 60, y: "-50%" }}
      >
        {`[
        ${
          typeof time === "undefined"
            ? "Present"
            : new Intl.DateTimeFormat("en-UK", {
                month: "short",
                year: "numeric",
              }).format(time)
        } ]`}
      </Date>
      <Row className="flex items-center justify-between">
        <h2 className="text-md">{title}</h2>
        <div className="px-2" />
        <h3 className="text-sm">{description}</h3>
      </Row>
    </Header>
    <Mid></Mid>
    <Footer></Footer>
  </Root>
);

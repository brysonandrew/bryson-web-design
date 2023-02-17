import styled from "@emotion/styled";
import type { FC } from "react";
import type { TItem } from "./constants";

const Header = styled.header``;
const Row = styled.div``;

const Mid = styled.div``;
const Footer = styled.footer``;

export const Content: FC<TItem> = ({
  title,
  description,
  time,
}) => (
  <>
    <Header>
      <Row className="flex items-center justify-between">
        <h2>{title}</h2>
        <h4 className="text-xs uppercase">
          {new Intl.DateTimeFormat("en-UK", {
            month: "short",
            year: "numeric",
          }).format(time)}
        </h4>
      </Row>
      {/* <h3>{tags}</h3> */}
      <h3 className="text-xs">{description}</h3>
    </Header>
    <Mid></Mid>
    <Footer></Footer>
  </>
);

import styled from "@emotion/styled";
import type { FC } from "react";
import type { TItem } from "./constants";

const Root = styled.a``;

export const Content: FC<TItem> = ({
  icon,
  href,
}) => (
  <Root
    className="flex items-center"
    href={href}
    target="_blank"
  >
    {icon}
  </Root>
);

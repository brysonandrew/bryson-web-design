import styled from "@emotion/styled";
import type { FC } from "react";
import type { TItem } from "./constants";

const Root = styled.li``;
const Anchor = styled.a``;

export const Item: FC<TItem> = ({
  icon,
  title,
  href,
}) => (
  <Root className="p-2 rounded-xs">
    <Anchor
      className="flex items-center"
      href={href}
      target="_blank"
    >
      {icon}
      <div className="p-1" />
      <h3 className="text-md">{title}</h3>
    </Anchor>
  </Root>
);

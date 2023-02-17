import styled from "@emotion/styled";
import type { FC, SVGAttributes } from "react";

const Root = styled.svg``;

type TProps = SVGAttributes<SVGElement>;
export const Email: FC<TProps> = (props) => (
  <Root
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
  </Root>
);

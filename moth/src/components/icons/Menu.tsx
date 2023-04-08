import styled from "@emotion/styled";
import type { FC, SVGAttributes } from "react";

const Root = styled.svg``;

type TProps = SVGAttributes<SVGElement>;
export const Menu: FC<TProps> = (props) => (
  <Root
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    {...props}
  >
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z" />
  </Root>
);

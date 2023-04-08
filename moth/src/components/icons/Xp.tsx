import styled from "@emotion/styled";
import type { TBaseIconProps } from "@t/icons";
import type { FC, SVGAttributes } from "react";
import COLORS from "@windi/config-colors.json"

const Root = styled.svg``;

type TProps = TBaseIconProps;
export const Xp: FC<TProps> = (props) => (
  <Root
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    {...props}
  >
    <circle cx="10" cy="12" r="10" fill={COLORS["teal-bright"]}/>
    <text x="1" y="16" fill="black" style={{fontSize:10}} >xp</text>
  </Root>
);

import styled from "@emotion/styled";
import { Filter } from "./Filter";
import { MaskBlur } from "./MaskBlur";
import { MaskDisplace } from "./MaskDisplace";
import { MaskText } from "./MaskText";
import { FC } from "react";

const Root = styled.defs``;

type TProps = { id: string };
export const Defs: FC<TProps> = ({ id }) => (
  <Root>
    <MaskText />
    <MaskBlur />
    <MaskDisplace />
    <Filter id={id} />
  </Root>
);

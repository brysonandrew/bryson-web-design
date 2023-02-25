import styled from "@emotion/styled";
import { Filter } from "./Filter";
import { MaskBlur } from "./MaskBlur";
import { MaskDisplace } from "./MaskDisplace";
import { MaskText } from "./MaskText";

const Root = styled.defs``;

export const Defs = () => (
    <Root>
      <MaskText />
      <MaskBlur />
      <MaskDisplace />
      <Filter />
    </Root>
  );

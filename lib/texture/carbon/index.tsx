import type { FC } from 'react';
import styled from '@emotion/styled';
import { carbonFiberCss } from '@brysonandrew/texture/carbon/textures';
const textureCss = carbonFiberCss;

const Root = styled.div``;
const Dark = styled.div`
  background-color: var(--black);
`;
const Light = styled.div`
  background-color: var(--white);
`;
const Texture = styled.div`
  ${textureCss}/* opacity: 0.4; */
`;

export const Carbon: FC = () => {
  return (
    <Root className="fill-screen">
      <Dark className="fill opacity-dark" />
      <Light className="fill opacity-light" />
    </Root>
  );
};

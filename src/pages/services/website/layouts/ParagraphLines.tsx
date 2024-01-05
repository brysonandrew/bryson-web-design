import type { FC } from 'react';
import styled from '@emotion/styled';

const Root = styled.div``;

type TProps = {
  lines: string[];
};
export const ParagraphLines: FC<TProps> = ({ lines }) => {
  return (
    <Root className='column items-stretch gap-6'>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </Root>
  );
};

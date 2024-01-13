import type { FC } from 'react';
import styled from '@emotion/styled';

const Root = styled.div``;

type TProps = {
  lines: string[];
};
export const ParagraphLines: FC<TProps> = ({ lines }) => {
  return (
    <Root className='column-stretch gap-4'>
      {lines.map((line) => (
        <p key={line} className='font-sans text-xl'>{line}</p>
      ))}
    </Root>
  );
};

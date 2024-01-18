import { ThickLine } from 'lib/components/layout/line/ThickLine';
import { DURATION } from 'lib/animation/constants';
import styled from '@emotion/styled';
import type { CSSProperties, FC } from 'react';

const Root = styled.h1``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => {
  return (
    <Root className='column-start md:row-start'>
      <div className='relative  text-md uppercase font-light'>
        Bryson
      </div>
      <div className='p-0 md:p-0.75' />
      <div className='relative column-start'>
        <div className=' text-md italic uppercase font-light'>
          Web design
        </div>
        <ThickLine
          classValue='top-full w-full h-2 z-50'
          transition={{ duration: DURATION * 2 }}
        />
      </div>
    </Root>
  );
};

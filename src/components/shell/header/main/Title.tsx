import { ThickLine } from '@components/line/ThickLine';
import { DURATION } from '@constants/animation';
import styled from '@emotion/styled';
import type { CSSProperties, FC } from 'react';

const Root = styled.div``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => {
  return (
    <Root className='row-start'>
      <div className='relative flex flex-col pb-2 md:flex-row'>
        <h1 className='relative text-g-tb text-md uppercase'>
          Bryson A.
        </h1>
        <div className='p-0 md:p-0.75' />
        <div className='relative'>
          <h2 className='text-g-bb text-md italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.0625'>
            Web design
          </h2>
          <ThickLine
            classValue='top-full w-full h-2 z-50'
            layoutId='WEB_DESIGN_UNDERLINE'
            transition={{ duration: DURATION * 2 }}
          />
        </div>
      </div>
    </Root>
  );
};

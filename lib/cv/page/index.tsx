import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';
import { SIZE } from '../config/constants';
import { Shell } from './Shell';
import { Description } from './Description';
import { Experience } from './experience';
import { Header } from './header';
import { Margin } from './Margin';
import { P1 } from '@brysonandrew/space/P1';

type TProps = {
  style?: CSSProperties;
};
export const Page: FC<TProps> = ({ style = {} }) => {
  return (
    <Shell>
      <div
        className='relative column-stretch shrink-0 bg-black-2 overflow-hidden'
        style={{ ...SIZE, ...style }}
      >
        <div className='column gap-12 pt-16 pb-8'>
          <Margin>
            <Header />
          </Margin>
          <Margin>
            <Description />
          </Margin>
        </div>
        <P1 />
        <Experience />
      </div>
      <div className='py-2' />
    </Shell>
  );
};

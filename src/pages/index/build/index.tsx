import { STORY } from '@constants/copy';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Title } from '../../../components/text/Title';
import { Fake3D } from '../../../components/fake-3d';
import { Images } from './images';
import { TitleOffset } from '@components/spaces/TitleOffset';

const Root = styled(motion.div)``;

export const Build: FC = () => {
  return (
    <Root className='flex flex-col items-center'>
      <Title>{STORY.build}</Title>
      <TitleOffset />
      <Fake3D classValue='w-full'>
        {(props) => <Images {...props} />}
      </Fake3D>
    </Root>
  );
};

import { Fake3D } from '@components/fake-3d';
import { MAX_SCROLL } from '@components/fake-3d/hooks/config';
import { List } from './list';
import { TitleOffset } from '@components/spaces/TitleOffset';
import { STORY } from '@constants/copy';
import { Title } from '../../../components/text/Title';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export const Clients = () => {
  return (
    <Root className='relative flex flex-col items-center z-10'>
      <Title>{STORY.clients}</Title>
      <TitleOffset />
      <Fake3D
        dispersion={{
          input: ({ startScroll, windowHeight }) => [
            startScroll + windowHeight * 0.9,
            startScroll + windowHeight * 0.9 + MAX_SCROLL,
          ],
          output: [0, 20],
        }}
        resistance={{
          input: ({ startScroll, windowHeight }) => [
            startScroll + windowHeight * 0.25,
            startScroll + windowHeight * 0.25 + MAX_SCROLL,
          ],
          output: [-60, 80],
        }}
        visibility={{
          input: ({ startScroll, windowHeight }) => [
            startScroll + windowHeight * 0.9,
            startScroll +
              MAX_SCROLL * 0.8 +
              windowHeight * 0.9,
          ],
          blur: [0, 8],
          grayscale: [0, 100],
          opacity: [0, 0.5],
        }}
      >
        {(props) => <List {...props} />}
      </Fake3D>
    </Root>
  );
};

import { STORY } from '@constants/copy';
import { Title } from '../../../components/text/Title';
import { Links } from './links';
import { TitleOffset } from '@components/spaces/TitleOffset';
import { Fake3D } from '@components/fake-3d';
import { MAX_SCROLL } from '@components/fake-3d/hooks/config';

export const Tech = () => (
  <div className='flex flex-col items-center'>
    <Title>{STORY.tech}</Title>
    <TitleOffset />
    <Fake3D
      dispersion={{
        input: ({ startScroll, windowHeight }) => [
          startScroll + windowHeight * 0.75,
          startScroll + windowHeight * 0.75 + MAX_SCROLL,
        ],
        output: [0, 20],
      }}
      resistance={{
        input: ({ startScroll }) => [
          startScroll,
          startScroll + MAX_SCROLL,
        ],
        output: [-20, 60],
      }}
      visibility={{
        input: ({ startScroll, windowHeight }) => [
          startScroll + windowHeight * 0.75,
          startScroll +
            MAX_SCROLL * 0.8 +
            windowHeight * 0.75,
        ],
        blur: [0, 8],
        grayscale: [0, 100],
        opacity: [0, 0.5],
      }}
    >
      {(props) => <Links {...props} />}
    </Fake3D>
  </div>
);

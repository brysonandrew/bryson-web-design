import { INTRO_ID, SECTION_TITLES } from '@constants/copy';
import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@components/Section';
import { Fake3D } from '@components/fake-3d';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@context/domains/build/Provider';
import { Fade } from './Fade';

const Build: FC = () => {
  return (
    <Section
      id={INTRO_ID}
      title={
        <>
          <Fade />
          <div className='relative z-0'>
            {SECTION_TITLES.build}
          </div>
        </>
      }
    >
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => (
          <Provider>
            <Images {...props} />
          </Provider>
        )}
      </Fake3D>
    </Section>
  );
};

export default Build;

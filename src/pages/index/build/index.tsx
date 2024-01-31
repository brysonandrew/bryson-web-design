import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/layout/section';
import { Parallax } from '@brysonandrew/parallax';
import { PARALLAX_PROPS } from './config/constants';
import { BuildProvider } from '@pages/index/build/BuildProvider';
import { SECTION_RECORD } from '@app/routes';
import { Headline } from '@pages/index/build/headline';

const Build: FC = () => {
  return (
    <>
      <Parallax {...PARALLAX_PROPS}>
        {(props) => (
          <Section
            title={SECTION_RECORD.build}
            Title={Headline}
          >
            <BuildProvider>
              <Images {...props} />
            </BuildProvider>
          </Section>
        )}
      </Parallax>
      <div className='fill bg-gradient-to-b from-transparent via-black to-transparent opacity-dark z-0 pointer-events-none' />
      <div className='fill bg-gradient-to-b from-transparent via-white to-transparent opacity-light z-0 pointer-events-none' />
    </>
  );
};

export default Build;

import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/layout-section';
import { Parallax } from '@brysonandrew/parallax';
import { PARALLAX_PROPS } from './config/constants';
import { BuildProvider } from '@pages/index/build/BuildProvider';
import { SECTION_RECORD } from '@app/routes';
import { Headline } from '@pages/index/build/headline';
import { FadeMidPair } from '@brysonandrew/fade-edge/pairs/FadeMidPair';

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
      <FadeMidPair
        classValue='flex md:hidden h-screen'
        direction='to bottom'
        darkMidColor='var(--black-04)'
        lightMidColor='var(--white-04)'
        edgeColor='var(--transparent)'
        darkClass='opacity-dark'
        lightClass='opacity-light'
      />
    </>
  );
};

export default Build;

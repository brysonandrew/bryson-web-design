import { FC } from 'react';
import { BuildCarousel } from '@pages/index/build/carousel';
import { Section } from '@brysonandrew/layout-section';
import { Parallax } from '@brysonandrew/motion-parallax';
import { PARALLAX_PROPS } from './constants';
import { SECTION_RECORD } from '@app/routes';
import { Headline } from '@pages/index/build/headline';
import { FadeMidPair } from '@brysonandrew/fade-edge/pairs/FadeMidPair';
import { BuildProvider } from '@pages/index/build/context';

const BuildMain: FC = () => {
  return (
    <>
      <Parallax {...PARALLAX_PROPS}>
        {(props) => (
          <Section
            title={SECTION_RECORD.build}
            Title={Headline}
          >
            <BuildProvider>
              <BuildCarousel {...props} />
            </BuildProvider>
          </Section>
        )}
      </Parallax>
      <FadeMidPair
        classValue="flex md:hidden h-screen"
        direction="to bottom"
        darkMidColor="var(--black-04)"
        lightMidColor="var(--white-04)"
        edgeColor="var(--transparent)"
        darkClass="opacity-dark"
        lightClass="opacity-light"
      />
    </>
  );
};

export default BuildMain;

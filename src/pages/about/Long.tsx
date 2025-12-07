import { ThinLineGrow } from '@brysonandrew/layout';
import { useIntoViewOnMount } from '@hooks/into-view-on-mount';
import { AboutBlocks } from '@pages/about/Blocks';
import { AboutBullets } from '@pages/about/Bullets';
import { ABOUT_COPY } from '@pages/about/constants';
import { AboutTitle } from '@pages/about/Title';
import { Fragment, type FC } from 'react';

export const AboutLong: FC = () => {
  const ref = useIntoViewOnMount<HTMLHRElement>({
    block: 'start',
  });

  const sections = [
    ABOUT_COPY.whatIDo,
    ABOUT_COPY.howIWork,
    ABOUT_COPY.whoIWorkWith,
    ABOUT_COPY.aboutMe,
    ABOUT_COPY.letsWork,
  ];

  return (
    <>
      <div ref={ref} className="w-full">
        <ThinLineGrow />
      </div>

      {sections.map((section, idx) => (
        <Fragment key={section.title}>
          <AboutTitle>{section.title}</AboutTitle>

          <AboutBlocks>
            {section.blocks.map((block, index) => {
              if (typeof block === 'string') {
                return block;
              }

              return (
                <AboutBullets
                  key={index}
                  {...('title' in block
                    ? { title: block.title }
                    : {})}
                >
                  {block.items}
                </AboutBullets>
              );
            })}
          </AboutBlocks>

          {idx < sections.length - 1 && <ThinLineGrow />}
        </Fragment>
      ))}
    </>
  );
};

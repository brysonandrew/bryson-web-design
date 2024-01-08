import { INTRO_ID, SECTION_TITLES } from '@constants/copy';
import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@components/Section';
import { Fake3D } from '@components/fake-3d';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@context/domains/build/Provider';
import { Fade } from './Fade';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_Y_SHIFT } from '@constants/animation';
import { resolveCompositeKey } from '@utils/keys';

const Build: FC = () => {
  return (
    <Section
      id={INTRO_ID}
      title={
        <>
          <Fade />
          <div className='relative column-start gap-4 text-5xl overflow-hidden sm:text-7xl lg:text-8xl xl:text-9xl'>
            <AnimatePresence>
              {SECTION_TITLES.build
                .split(/\s/)
                .map((word, wi, arr) => {
                  const animation = (ci: number) => ({
                    ...PRESENCE_Y_SHIFT,
                    transition: {
                      delay: 0.5 + ci * 0.025,
                      duration: 0.6,
                    },
                  });
                  const prevCount = arr
                    .slice(0, wi)
                    .reduce((a, c) => a + c.length, 0);
                  return (
                    <motion.div
                      key={word}
                      className='overflow-hidden'
                    >
                      {wi % 2 === 0 ? (
                        <motion.div className='row font-thin'>
                          {word
                            .split('')
                            .map((char, ci) => (
                              <motion.div
                                key={resolveCompositeKey(
                                  char,
                                  ci,
                                )}
                                {...animation(
                                  prevCount + ci,
                                )}
                              >
                                {char}
                              </motion.div>
                            ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          className='row text-teal'
                          {...animation}
                        >
                          {word
                            .split('')
                            .map((char, ci) => (
                              <motion.div
                                key={resolveCompositeKey(
                                  char,
                                  ci,
                                )}
                                {...animation(
                                  prevCount + ci,
                                )}
                              >
                                {char}
                              </motion.div>
                            ))}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
            </AnimatePresence>
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

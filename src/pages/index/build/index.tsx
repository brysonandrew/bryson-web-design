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
    <Fake3D {...FAKE_3D_PROPS}>
      {(props) => (
        <Section
          id={INTRO_ID}
          title={
            <>
              <Fade />
              <motion.div className='relative w-core row-wrap justify-center gap-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'>
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
                
                        >
                          {wi % 2 === 0 ? (
                            <motion.div className='row font-thin overflow-hidden'>
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
                              className='row text-teal overflow-hidden'
                              {...animation}
                            >
                              {word
                                .split('')
                                .map((char, ci) => (
                                  <motion.strong
                                    key={resolveCompositeKey(
                                      char,
                                      ci,
                                    )}
                                    {...animation(
                                      prevCount + ci,
                                    )}
                                  >
                                    {char}
                                  </motion.strong>
                                ))}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </motion.div>
            </>
          }
        >
          <Provider>
            <Images {...props} />
          </Provider>
        </Section>
      )}
    </Fake3D>
  );
};

export default Build;

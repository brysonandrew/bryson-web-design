import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';
import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';
import { WORDS } from '.';
import { Stagger } from './Stagger';

type TProps = { index: number; children: string };
export const Word: FC<TProps> = ({ index, children }) => {
  const charsProps = useMemo(() => {
    const prevCount = WORDS.slice(0, index).reduce(
      (a, c) => a + c.length,
      0,
    );
    return {
      prevCount,
      children: children.split(''),
      ...PRESENCE_OPACITY_SHIFT,
    };
  }, []);

  return (
    <motion.div className='row overflow-hidden'>
      {index % 2 === 0 ? (
        <Stagger classValue='font-thin' {...charsProps} />
      ) : (
        <Stagger
          classValue='text-teal font-black'
          {...charsProps}
        />
      )}
    </motion.div>
  );
};

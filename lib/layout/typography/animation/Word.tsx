import { PRESENCE_OPACITY_SHIFT } from '@brysonandrew/animation';
import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';
import { Stagger } from './Stagger';

type TProps = {
  index: number;
  children: string;
  prevWords: string[];
};
export const Word: FC<TProps> = ({
  index,
  children,
  prevWords,
}) => {
  const charsProps = useMemo(() => {
    const prevCount = prevWords
      .slice(0, index)
      .reduce((a, c) => a + c.length, 0);
    return {
      prevCount,
      children: children.split(''),
      ...PRESENCE_OPACITY_SHIFT,
    };
  }, [prevWords]);

  return (
    <motion.div className='row overflow-hidden'>
      {index % 2 === 0 ? (
        <Stagger classValue='font-thin' {...charsProps} />
      ) : (
        <Stagger
          classValue='text-secondary font-black'
          {...charsProps}
        />
      )}
    </motion.div>
  );
};

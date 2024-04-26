import { PRESENCE_UP_Y } from '@brysonandrew/motion-config-constants';
import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';
import { Stagger } from './Stagger';
import { useApp } from '@brysonandrew/app';

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
  const { COLOR } = useApp();
  const charsProps = useMemo(() => {
    const prevCount = prevWords
      .slice(0, index)
      .reduce((a, c) => a + c.length, 0);
    return {
      prevCount,
      children: children.split(''),
      ...PRESENCE_UP_Y,
    };
  }, [prevWords]);

  return (
    <motion.div className='row overflow-hidden'>
      {index % 2 === 0 ? (
        <Stagger classValue='font-thin' {...charsProps} />
      ) : (
        <Stagger
          classValue='font-black'
          style={{ color: COLOR.primary }}
          {...charsProps}
        />
      )}
    </motion.div>
  );
};

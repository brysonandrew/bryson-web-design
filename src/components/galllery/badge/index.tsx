import type { FC } from 'react';
import { TPricingKey } from '@brysonandrew/copy';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { Text } from './Text';
import { useApp } from '@brysonandrew/app';
import { TStyle } from '@app/style';
import { FadeDownPair } from '@brysonandrew/fade-edge/pairs/FadeDownPair';

export type TPricingProps = {
  type: TPricingKey;
  isText?: boolean;
  isHover?: boolean;
} & TDivMotionProps;
export const Badge: FC<TPricingProps> = ({
  type,
  isText,
  isHover,
  classValue,
  ...props
}) => {
  const { COLOR, CLASS, BORDER_RADIUS } = useApp<TStyle>();
  return (
    <motion.div
      className={clsx(
        'relative center p-4 overflow-hidden',
        CLASS.GRADIENT[type],
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        backgroundColor: COLOR[type],
      }}
      {...props}
    >
      <FadeDownPair
        classValue='h-full'
        darkClass='opacity-dark'
        lightClass='opacity-light'
        darkColor='var(--black-02)'
        lightColor='var(--white-02)'
      />
      {(isHover || isText) && <Text>{type}</Text>}
    </motion.div>
  );
};

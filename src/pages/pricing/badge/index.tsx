import type { FC } from 'react';
import { TPricingKey } from '@pages/pricing/config/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import { Text } from './Text';
import { useApp } from '@brysonandrew/app';
import { TStyle } from '@app/style';
import { FadeDown } from '@brysonandrew/fade';

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
  const { COLOR } = useApp<TStyle>();
  return (
    <motion.div
      className={clsx(
        'relative center p-4 overflow-hidden',
        `gradient-${type}`
      )}
      style={{
        borderRadius: 40,
        backgroundColor: COLOR[type],
      }}
      layout
      {...props}
    >
      <FadeDown classValue='inset-2 opacity-40' />
      {(isHover || isText) && <Text>{type}</Text>}
    </motion.div>
  );
};

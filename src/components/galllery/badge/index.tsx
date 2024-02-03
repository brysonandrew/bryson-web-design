import type { FC } from 'react';
import { TPricingKey } from '@pages/pricing/config/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/config/types/dom/motion';
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
  const { COLOR } = useApp<TStyle>();
  return (
    <motion.div
      className={clsx(
        'relative center p-4 overflow-hidden',
        `gradient-${type}`,
      )}
      style={{
        borderRadius: 40,
        backgroundColor: COLOR[type],
      }}
      {...props}
    >
      <FadeDownPair />
      {(isHover || isText) && <Text>{type}</Text>}
    </motion.div>
  );
};

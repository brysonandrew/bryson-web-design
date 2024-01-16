import type { FC } from 'react';
import { TPricingKey } from '@pages/pricing/config/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BG } from './config';
import { TDivMotionProps } from '@lib/types/dom';
import { Text } from './Text';
import { useApp } from '@lib/context/app/useApp';

export type TProps = {
  type: TPricingKey;
  isText?: boolean;
  isHover?: boolean;
} & TDivMotionProps;
export const Badge: FC<TProps> = ({
  type,
  isText,
  isHover,
  ...props
}) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <motion.div
      className={clsx('center p-4', BG[type])}
      style={{ borderRadius: BORDER_RADIUS.XL }}
      {...props}
    >
      {(isHover || isText) && <Text>{type}</Text>}
    </motion.div>
  );
};

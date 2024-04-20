import { PRESENCE_OPACITY } from '@brysonandrew/motion/core/config';
import {
  TLinkProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { I } from '@brysonandrew/icons-i';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { BLink } from './BLink';

type TProps = TLinkProps & {
  isActive: boolean;
  to: string;
  icon: string;
} & TInteractiveProps;
export const BLinkSm: FC<TProps> = ({
  isActive,
  to,
  icon,
  shape = 'interactive-rect-sm',
  look,
  classValue,
  ...props
}) => {
  return (
    <BLink to={to} shape={shape} look={look} {...props}>
      {isActive && (
        <motion.div
          className='cover rounded-sm pointer-events-none'
          {...PRESENCE_OPACITY}
        />
      )}
      <I icon={icon} />
    </BLink>
  );
};

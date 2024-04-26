import clsx from 'clsx';
import { FC } from 'react';
import { TInteractiveProps } from '@brysonandrew/config-types';
import { I } from '@brysonandrew/icons-i';
import {
  BAnchor,
  TBAnchorProps,
} from '@brysonandrew/interactive/base/BAnchor';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@brysonandrew/motion-config-constants';

type TProps = TBAnchorProps &
  TInteractiveProps & {
    isActive?: boolean;
    icon: string;
  };
export const BAnchorSm: FC<TProps> = ({
  classValue,
  isActive,
  shape = 'interactive-rect-sm',
  look,
  icon,
  ...props
}) => {
  return (
    <BAnchor
      classValue={clsx('relative', classValue)}
      shape={shape}
      look={look}
      {...props}
    >
      {isActive && (
        <motion.div
          {...PRESENCE_OPACITY}
          className='cover rounded-sm pointer-events-none'
        />
      )}
      <I icon={icon} />
    </BAnchor>
  );
};

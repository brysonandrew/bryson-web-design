import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TIconComponent } from '@t/icons';
import { TClassValueProps } from '@t/index';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import { Inner } from './Inner';
import { IconGlow } from './IconGlow';

const Link = styled(motion(_Link))``;

export type TButtonProps = TClassValueProps & {
  onClick(): any;
  to: string;
  Icon: TIconComponent;
};
export const Button: FC<TButtonProps> = ({
  Icon,
  classValue,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'relative row-space cursor-pointer z-10',
      )}
      {...props}
    >
      <IconGlow Icon={Icon} />
    </Link>
  );
};

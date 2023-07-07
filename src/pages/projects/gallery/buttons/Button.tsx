import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Metal } from '@components/metal';
import clsx from 'clsx';
import { TBaseIconProps } from '@t/icons';
import { TClassValueProps } from '@t/index';
import { Glow } from '@components/glow';
import { PARENT_HOVER_GLOW_PROPS } from '@constants/colors';

const Link = styled(motion(_Link))``;

export type TButtonProps = TClassValueProps & {
  to: string;
  onTap?(): void;
  Icon: FC<TBaseIconProps>;
};
export const Button: FC<TButtonProps> = ({
  Icon,
  classValue,
  ...props
}) => {
  return (
    <div className={clsx(classValue)}>
      <Link
        className={clsx(
          'relative flex items-center justify-center p-0.5 cursor-pointer z-10',
        )}
        {...PARENT_HOVER_GLOW_PROPS}
        {...props}
      >
        <Glow />
        <Metal />
        <Icon classValue='relative w-9 h-9' />
      </Link>
    </div>
  );
};

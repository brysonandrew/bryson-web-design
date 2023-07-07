import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Metal } from '@components/metal';
import clsx from 'clsx';
import { TBaseIconProps } from '@t/icons';
import { TClassValueProps } from '@t/index';
import { Glow } from '@components/glow';
import {
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
} from '@constants/colors';
import { Box } from '@components/glow/Box';

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
          'relative flex items-center justify-center cursor-pointer z-10',
          GLOW_BOX_SHADOW,
        )}
        {...PARENT_GLOW_PROPS}
        {...props}
      >
        <Glow drop={2}>
          <Metal />
        </Glow>
        <Glow drop={4} color='white'>
          <Box classValue='p-0.5'>
            <Icon classValue='relative w-9 h-9' />
          </Box>
        </Glow>
      </Link>
    </div>
  );
};

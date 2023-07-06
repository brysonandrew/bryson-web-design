import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { resolveTealGlow } from '@pages/index/constants';
import styled from '@emotion/styled';
import { Metal } from '@components/metal';
import clsx from 'clsx';
import { TBaseIconProps } from '@t/icons';
import { TClassValueProps } from '@t/index';

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
  const rootPropsWithTealGlow = resolveTealGlow({
    classValue: clsx(
      'relative flex items-center justify-center p-0.5 cursor-pointer z-10',
    ),
  });
  return (
    <div className={clsx(classValue)}>
      <Link {...rootPropsWithTealGlow} {...props}>
        <Metal />
        <Icon classValue='relative w-9 h-9' />
      </Link>
    </div>
  );
};

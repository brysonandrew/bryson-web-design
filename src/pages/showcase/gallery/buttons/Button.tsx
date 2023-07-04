import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import styled from '@emotion/styled';
import { Fill } from '@components/metal/Fill';
import clsx from 'clsx';
import { TBaseIconProps } from '@t/icons';
import { TClassValueProps } from '@t/index';

const Link = styled(motion(_Link))`
  aspect-ratio: 1 / 1;
`;

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
          'relative flex items-center justify-center p-2.5 cursor-pointer shadow-teal-02-sm z-10',
        )}
        {...HOVER_TEAL_GLOW_PROPS_SM}
        {...props}
      >
        <Fill />
        <Icon classValue='relative' />
      </Link>
    </div>
  );
};

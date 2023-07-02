import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import {
  Link as _Link,
  useLocation,
} from 'react-router-dom';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import styled from '@emotion/styled';
import { Fill } from '@components/metal/Fill';
import { PRESENCE_OPACITY } from '@constants/animation';
import clsx from 'clsx';
import { TBaseProps } from './types';

const Link = styled(motion(_Link))`
  aspect-ratio: 1 / 1;
`;

type TProps = TBaseProps;
export const Close: FC<TProps> = () => {
  const { pathname } = useLocation();
  const handleOnSound = useOffSound();
  const handleClose = () => {
    handleOnSound();
  };

  return (
    <motion.div {...PRESENCE_OPACITY}>
      <Link
        className={clsx(
          'relative flex items-center justify-center shrink-0 p-2.5 h-full cursor-pointer shadow-teal-02-sm z-10',
        )}
        to={pathname}
        onTap={handleClose}
        {...HOVER_TEAL_GLOW_PROPS_SM}
      >
        <Fill />
        <Cross classValue='relative w-5 h-5' />
      </Link>
    </motion.div>
  );
};

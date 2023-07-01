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

const Link = styled(motion(_Link))`
  aspect-ratio: 1 / 1;
`;

export const Close: FC = () => {
  const { pathname } = useLocation();
  const handleOnSound = useOffSound();

  return (
    <motion.div {...PRESENCE_OPACITY}>
      <Link
        className={clsx(
          'relative flex items-center justify-center shrink-0 p-4 h-full cursor-pointer shadow-teal-02-sm z-10',
        )}
        to={pathname}
        onClick={handleOnSound}
        {...HOVER_TEAL_GLOW_PROPS_SM}
      >
        <Fill />
        <Cross classValue='relative w-6 h-6' />
      </Link>
    </motion.div>
  );
};

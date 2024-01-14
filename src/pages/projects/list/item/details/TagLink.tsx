import { type FC } from 'react';
import {
  TSlugProps,
  TTag,
} from '@pages/projects/config/types';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { GLOBAL_KEY } from '@lib/components/cursor/hooks/config';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from '@lib/types/dom';
import { resolveCompositeHoverKey } from '@lib/utils/key';
import { useCursor } from '@lib/components/cursor/context';
import {
  OPEN_IN_NEW_CURSOR_KEY,
  PROJECT_CURSOR_KEY,
} from '@lib/components/cursor/switch/config';

type TProps = Required<TTag> &
  TAnchorMotionProps &
  TSlugProps;
export const TagLink: FC<TProps> = ({
  slug,
  title,
  href,
  children,
  ...props
}) => {
  const { hoverKey, onHoverKey } = useCursor();

  const hoverKeyIn = resolveCompositeHoverKey(
    OPEN_IN_NEW_CURSOR_KEY,
    slug,
    href,
  );

  const isHover = hoverKey === hoverKeyIn;

  const handleHoverStart = () => {
    onHoverKey({ hoverKey: hoverKeyIn, children: null });
  };
  const handleHoverEnd = () => {
    const hoverKeyOut = resolveCompositeHoverKey(
      PROJECT_CURSOR_KEY,
      slug,
      GLOBAL_KEY,
    );
    onHoverKey({ hoverKey: hoverKeyOut, children: null });
  };
  return (
    <motion.a
      className='text-xl'
      href={href}
      target='_blank'
      animate={isHover ? 'hover' : 'animate'}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      {children}
    </motion.a>
  );
};

import { type FC } from 'react';
import { TSlugProps, TTag } from '@pages/projects/config/types';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { GLOBAL_KEY } from '@hooks/cursor/config';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from '@t/dom';
import { resolveCompositeHoverKey } from '@utils/keys';
import { useCursor } from '@context/cursor';
import { PROJECT_CURSOR_KEY } from '@components/cursor/switch/config';

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
    'open-in-new',
    slug,
    href,
  );

  const isHover = hoverKey === hoverKeyIn;

  const handleHoverStart = () => {
    onHoverKey(hoverKeyIn);
  };
  const handleHoverEnd = () => {
    const hoverKeyOut = resolveCompositeHoverKey(
      PROJECT_CURSOR_KEY,
      slug,
      GLOBAL_KEY,
    );
    onHoverKey(hoverKeyOut);
  };
  return (
    <motion.a
      className='text-xl cursor-pointer'
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

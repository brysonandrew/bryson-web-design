import { type FC } from 'react';
import {
  TSlugProps,
  TTag,
} from '@pages/projects/config/types';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from '@lib/types/dom';
import {
  HOVER_KEY_DELIMITER,
  resolveCompositeHoverKey,
} from '@lib/utils/key';
import { useCursor } from '@lib/components/cursor/context';
import { CUSTOM_CURSOR_KEY } from '@lib/components/cursor/switch/config';
import { GALLERY_ICON } from '@lib/constants/icons/gallery';
import { OPEN_IN_NEW_ICON } from '@lib/constants/icons/links';
import { resolveHoverKeyArgs } from '../resolveHoverKeyArgs';

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
    CUSTOM_CURSOR_KEY,
    [slug, OPEN_IN_NEW_ICON, href].join(
      HOVER_KEY_DELIMITER,
    ),
  );

  const isHover = hoverKey === hoverKeyIn;

  const handleHoverStart = () => {
    onHoverKey({
      hoverKey: hoverKeyIn,
      children: <span>{href}</span>,
    });
  };
  const handleHoverEnd = () => {
    const [f, s, t, children] = resolveHoverKeyArgs(slug);
    const hoverKeyOut = resolveCompositeHoverKey(f, s, t);
    onHoverKey({
      hoverKey: hoverKeyOut,
      children,
    });
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

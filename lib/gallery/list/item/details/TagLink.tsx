import { type FC } from 'react';
import {
  TSlugProps,
  TTag,
} from 'lib/gallery/config/types';
import { resolveInteractiveLabels } from 'lib/utils/attributes/resolveInteractiveLabels';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from 'lib/types/dom/motion';
import {
  HOVER_KEY_DELIMITER,
  resolveCompositeHoverKey,
} from 'lib/utils/key';
import { useCursor } from 'lib/cursor/context';
import { CUSTOM_CURSOR_KEY } from 'lib/cursor/switch/config';
import { OPEN_IN_NEW_ICON } from 'lib/icons/constants/links';
import { resolveHoverKeyArgs } from '../resolveHoverKeyArgs';
import { formatUrl } from 'lib/utils/format/url';
import { Visit } from 'lib/cursor/switch/format/Visit';

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
    const address = formatUrl(href);
    onHoverKey({
      hoverKey: hoverKeyIn,
      children: <Visit>{address}</Visit>,
    });
  };
  const handleHoverEnd = () => {
    const [cursorKey, textKey, iconKey, children] =
      resolveHoverKeyArgs(slug);
    const hoverKeyOut = resolveCompositeHoverKey(
      cursorKey,
      textKey,
      iconKey,
    );
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

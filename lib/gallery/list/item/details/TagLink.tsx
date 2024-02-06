import { type FC } from 'react';
import {
  TSlugProps,
  TTag,
} from '@brysonandrew/gallery/config/types';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from '@brysonandrew/config-types/dom/motion';
import { useCursor, resolveCompositeHoverKey, HOVER_KEY_DELIMITER } from '@brysonandrew/cursor';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys/links';
import { resolveHoverKeyArgs } from '../resolveHoverKeyArgs';
import { formatUrl } from '@brysonandrew/utils-format/url';
import { Visit } from '@brysonandrew/cursor/switch/format/Visit';

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

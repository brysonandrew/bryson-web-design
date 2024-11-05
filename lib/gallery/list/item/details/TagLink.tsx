import { type FC } from 'react';
import {
  TSlugProps,
  TTag,
} from '@brysonandrew/gallery/config/types';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';
import { motion } from 'framer-motion';
import { TAnchorMotionProps } from '@brysonandrew/config-types/dom/motion';
import {
  useCursor,
  resolveCompositeHover,
  HOVER_KEY_DELIMITER,
} from '@brysonandrew/motion-cursor';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys/links';
import { resolveHoverArgs } from '../resolveHoverArgs';
import { formatUrl } from '@brysonandrew/utils-format/url';
import { Visit } from '@brysonandrew/motion-cursor/switch/format/Visit';

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
  const { hoverKey, onHover } = useCursor();

  const hoverIn = resolveCompositeHover(
    CUSTOM_CURSOR_KEY,
    [slug, OPEN_IN_NEW_ICON, href].join(HOVER_KEY_DELIMITER)
  );

  const isHover = hoverKey === hoverIn;

  const handleHoverStart = () => {
    const address = formatUrl(href);
    onHover({
      hoverKey: hoverIn,
      children: <Visit>{address}</Visit>,
    });
  };
  const handleHoverEnd = () => {
    const [cursorKey, textKey, iconKey, children] =
      resolveHoverArgs(slug);
    const hoverOut = resolveCompositeHover(
      cursorKey,
      textKey,
      iconKey
    );
    onHover({
      hoverKey: hoverOut,
      children,
    });
  };
  return (
    <motion.a
      className="text-xl"
      href={href}
      target="_blank"
      animate={isHover ? 'hover' : 'animate'}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      {...resolveAccessibilityTitles(title)}
      {...props}
    >
      {children}
    </motion.a>
  );
};

import { type FC } from 'react';
import { TTag } from '@t/projects';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { GLOBAL_KEY } from '@hooks/cursor/config';
import { motion } from 'framer-motion';
import { TMotionAnchorProps } from '@t/dom';
import { TSlugProps } from '@pages/projects/config';
import { PROJECT_CURSOR_KEY } from '@components/select/config';
import { resolveCompositeHoverKey } from '@utils/keys';
import { useContext } from '@state/Context';

type TProps = Required<TTag> &
  TMotionAnchorProps &
  TSlugProps;
export const TagLink: FC<TProps> = ({
  slug,
  title,
  href,
  children,
  ...props
}) => {
  const { dispatch } = useContext();

  const handleHoverStart = () => {
    const hoverKeyIn = resolveCompositeHoverKey(
      'open-in-new',
      slug,
      href,
    );
    dispatch({ type: 'hover-key', value: hoverKeyIn });
  };
  const handleHoverEnd = () => {
    const hoverKeyOut = resolveCompositeHoverKey(
      PROJECT_CURSOR_KEY,
      slug,
      GLOBAL_KEY,
    );
    dispatch({ type: 'hover-key', value: hoverKeyOut });
  };
  return (
    <motion.a
      className='text-xl'
      href={href}
      target='_blank'
      {...resolveInteractiveLabels(title)}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      {...props}
    >
      {children}
    </motion.a>
  );
};

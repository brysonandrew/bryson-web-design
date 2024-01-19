import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';
import { DURATION } from '@brysonandrew/lib/animation/constants';
import { ThickLine } from '@brysonandrew/lib/components/layout/line/ThickLine';
import { BIG_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';
import { TLinkMotionProps } from '@brysonandrew/lib/types';
import clsx from 'clsx';

const Link = styled(motion(_Link))``;

export type TItemProps = Partial<TLinkMotionProps> & {
  isActive?: boolean;
  layoutId?: string;
};
export const Item: FC<TItemProps> = ({
  isActive,
  title,
  layoutId,
  children,
  to,
  ...linkProps
}) => {
  const { handlers } = useHoverKey(BIG_CURSOR_KEY, title);

  return (
    <li
      className={clsx(
        'relative pb-4',
        isActive ? 'title-header-active' : 'title-header',
      )}
    >
      {children ?? ( 
        <>
          {title}
          {isActive && (
            <ThickLine
              classValue='top-3/4 w-full h-2'
              layoutId={layoutId}
              transition={{ duration: DURATION * 2 }}
            />
          )}
        </>
      )}
      {to && (
        <Link
          to={to}
          className='absolute -inset-1.25'
          {...(title
            ? resolveInteractiveLabels(title)
            : {})}
          {...handlers}
          {...linkProps}
        />
      )}
    </li>
  );
};

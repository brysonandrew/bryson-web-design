import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { createElement, type FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import clsx from 'clsx';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';
import { DURATION } from '@brysonandrew/lib/animation/constants';
import { ThickLine } from '@brysonandrew/lib/components/layout/line/ThickLine';
import { TPageTitle } from '@app/routes/types';
import { BIG_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';

const Link = styled(motion(_Link))``;

type TProp = {
  isActive: boolean;
  to: string;
  onClick(): void;
  children: TPageTitle;
};
export const Item: FC<TProp> = ({
  isActive,
  to,
  children,
  onClick,
}) => {
  const { handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    children,
  );

  return (
    <Link
      to={to}
      onClick={onClick}
      className={clsx('relative center pb-2 ', [
        isActive && '9 cursor-default',
      ])}
      {...resolveInteractiveLabels(children)}
      {...handlers}
    >
      {isActive && (
        <ThickLine
          classValue='top-3/4 w-full h-2'
          layoutId='PAGE_ACTIVE_UNDERLINE_KEY'
          transition={{ duration: DURATION * 2 }}
        />
      )}
      {createElement(
        'h2',
        { className: 'relative uppercase italic' },
        children,
      )}
    </Link>
  );
};

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { createElement, type FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/line';
import clsx, { ClassValue } from 'clsx';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { TPageTitle } from '@constants/copy';
import { DURATION } from '@constants/animation';
import { ThickLine } from '@components/line/ThickLine';

const resolveLineClassProps = (
  classValue?: ClassValue,
) => ({
  classValue: clsx('absolute left-0', classValue),
});

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
  const { handlers } = useHoverKey('big', children);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={clsx('relative center pb-2 text-g-bb', [
        isActive && 'text-b-w9 cursor-default',
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
        isActive ? 'h1' : 'h2',
        { className: 'relative uppercase italic' },
        children,
      )}
    </Link>
  );
};

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { createElement, type FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/thin-line';
import clsx, { ClassValue } from 'clsx';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { TPageTitle } from '@constants/copy';
import { DURATION } from '@constants/animation';

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
        isActive &&
          'text-b-w9 text-stroke-baby-blue-02 cursor-default',
      ])}
      {...resolveInteractiveLabels(children)}
      {...handlers}
    >
      {isActive && (
        <>
          <ThinLine
            layoutId='PAGE_NAV_LINE'
            style={{
              bottom: 6,
            }}
            {...resolveLineClassProps('via-baby-blue')}
          />
          <motion.div
            layoutId='PAGE_NAV_LINE_2'
            transition={{ duration: DURATION * 2 }}
            className='absolute top-3/4 w-full h-2 bg-teal'
          />
        </>
      )}
      {createElement(
        isActive ? 'h1' : 'h2',
        { className: 'relative uppercase italic' },
        children,
      )}
      <ThinLine
        style={{ bottom: 4 }}
        {...resolveLineClassProps('via-teal')}
      />
    </Link>
  );
};

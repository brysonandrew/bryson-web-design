import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/thin-line';
import clsx, { ClassValue } from 'clsx';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { COLOR_VARIABLES_LOOKUP } from '@constants/colors';
import { TPageTitle } from '@constants/copy';

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
      className={clsx('relative center pb-2 text-color-1', [
        isActive &&
          'text-color-3 text-stroke-baby-blue-02 cursor-default',
      ])}
      {...resolveInteractiveLabels(children)}
      {...handlers}
    >
      <h2 className='relative uppercase italic'>
        {children}
      </h2>
      {isActive && (
        <ThinLine
          layoutId='PAGE_NAV_LINE'
          style={{
            bottom: 6,
            backgroundColor:
              COLOR_VARIABLES_LOOKUP['baby-blue'],
          }}
          {...resolveLineClassProps()}
        />
      )}
      <ThinLine
        style={{ bottom: 4 }}
        {...resolveLineClassProps()}
      />
    </Link>
  );
};

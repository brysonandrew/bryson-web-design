import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/thin-line';
import clsx, { ClassValue } from 'clsx';

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
  children: string;
};
export const Item: FC<TProp> = ({
  isActive,
  to,
  children,
  onClick,
}) => {

  return (
    <Link
      to={to}
      onClick={onClick}
      className={clsx('relative center pb-2', [
        isActive && 'not-allowed',
      ])}
    >
      <h2
        className={clsx(
          'relative uppercase text-color-1 italic',
          [isActive && 'text-color-3'],
        )}
      >
        {children}
      </h2>
      {isActive && (
        <ThinLine
          layoutId='PAGE_NAV_LINE'
          style={{
            bottom: 6,
          }}
          {...resolveLineClassProps('background-3')}
        />
      )}
      <ThinLine
        style={{ bottom: 4 }}
        {...resolveLineClassProps()}
      />
    </Link>
  );
};

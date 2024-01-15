import {
  CUSTOM_CURSOR_KEY,
  FOCUS_CURSOR_KEY,
} from '@lib/cursor/switch/config';
import { useCursor } from '@lib/cursor/context';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { TPart } from '@pages/_workshop/process/website/config';
import clsx from 'clsx';
import { FC } from 'react';
import { Circle } from './Circle';

type TProps = {
  children: TPart;
};
export const Focus: FC<TProps> = ({ children }) => {
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  const { handlers, isHover } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    children,
  );
  const isActive = children === first;
  return (
    <>
      {(isActive || isHover) && (
        <div className='absolute -inset-1 bg-secondary-02 rounded-md pointer-events-none' />
      )}
      <Circle
        classValue={clsx(
          'absolute right-full top-1/2 -translate-y-1/2 mr-2',
        )}
        isActive={isActive}
        {...handlers}
      >
        <>
          {/* {ALL.indexOf(children) + 1} */}
          <div className='absolute top-1/2 bg-gray left-full ml-px w-2 h-px' />
        </>
      </Circle>
    </>
  );
};

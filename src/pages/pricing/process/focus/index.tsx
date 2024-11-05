import { CUSTOM_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { useCursor } from '@brysonandrew/motion-cursor';
import { useHover } from '@brysonandrew/motion-cursor/hooks/useHover';
import { TPart } from '@pages/pricing/process/website/config';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { Circle } from './Circle';
import { useApp } from '@brysonandrew/app';

type TProps = {
  children: TPart;
};
export const Focus: FC<TProps> = ({ children }) => {
  const { BORDER_RADIUS, COLOR } = useApp();
  const {
    hoverParts: [_, first],
  } = useCursor();
  const { handlers, isHover } = useHover(
    CUSTOM_CURSOR_KEY,
    children,
  );
  const isActive = children === first;
  return (
    <>
      {(isActive || isHover) && (
        <div
          className='absolute -inset-1 pointer-events-none'
          style={{
            borderRadius: BORDER_RADIUS.MD,
            color: COLOR['primary-02'],
          }}
        />
      )}
      <Circle
        classValue={cx(
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

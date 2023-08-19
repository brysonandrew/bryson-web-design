import { useRect } from '@hooks/dom/useRect';
import { TDivProps } from '@t/dom';
import { FC } from 'react';

type TProps = TDivProps;
export const PersistHeight: FC<TProps> = ({ children }) => {
  const { rect, onUpdate } = useRect();

  return (
    <div
      ref={(instance) => {
        if (instance && !rect) {
          onUpdate(instance);
        }
      }}
      style={{ height: rect?.height }}
    >
      {children}
    </div>
  );
};

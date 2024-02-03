import { TDivProps } from '@brysonandrew/config/types/dom';
import { FC } from 'react';
import { Rect } from './Rect';

type TProps = TDivProps;
export const PersistHeight: FC<TProps> = ({ children }) => {
  return (
    <Rect>
      {({ rect, onUpdate }) => (
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
      )}
    </Rect>
  );
};

import { useRect } from '@hooks/dom/useRect';
import { TChildrenHandlerProps } from '@t/index';
import { FC } from 'react';
type TChildrenProps = ReturnType<typeof useRect>;
type TProps = TChildrenHandlerProps<TChildrenProps>;

export const Rect: FC<TProps> = ({ children }) => {
  const rectReturn = useRect();
  return <>{children(rectReturn)}</>;
};

import { TClassValueProps } from '@brysonandrew/types/dom/main';
import { FC } from 'react';
import { TContext } from '../context';
import { Provider } from '../context/Provider';
import { ViewWithDarkMode } from '../wrappers/ViewWithDarkMode';
import { Viewless } from './Viewless';
type TProps = Pick<TContext, 'isDarkMode'> &
  TClassValueProps;
export const DarkMode: FC<TProps> = ({
  isDarkMode,
  classValue,
}) => (
  <Provider
    isDarkMode={isDarkMode}
  >
    <ViewWithDarkMode classValue={classValue}>
      <Viewless />
    </ViewWithDarkMode>
  </Provider>
);

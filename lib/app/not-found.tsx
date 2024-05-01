import type { FC } from 'react';
import {
  NotFound,
  TNotFoundProps,
} from '@brysonandrew/routes-not-found';
import { useApp } from '@brysonandrew/app/AppProvider';

type TProps = TNotFoundProps;
export const AppNotFound: FC<TProps> = (props) => {
  const {
    COLOR: { accent },
  } = useApp();
  return <NotFound pathnameColor={accent} {...props} />;
};

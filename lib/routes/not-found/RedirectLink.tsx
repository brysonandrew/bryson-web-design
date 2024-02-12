import type { FC } from 'react';
import type { TDivProps } from '@brysonandrew/config-types/dom';
import { Link } from 'react-router-dom';

type TProps = TDivProps;
export const RedirectLink: FC<TProps> = (props) => {
  return (
    <div {...props}>
      <Link to='/'>Click here to go home</Link>
    </div>
  );
};

import { useApp } from '@brysonandrew/app';
import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

type TProps = PropsWithChildren<{
  homePath?: string;
}>;
export const NotFound: FC<TProps> = ({
  homePath,
  children,
}) => {
  const { COLOR } = useApp();
  const { pathname } = useLocation();
  return (
    <div className='fill-screen center'>
      <div className='column-start gap-4 w-core'>
        <h2>404 Not Found</h2>
        <div className='row-wrap gap-2'>
          <span>The requested page </span>
          <b style={{ color: COLOR.accent }}>{pathname}</b>
          <span> does not exist.</span>
        </div>
        {homePath && (
          <Link to={homePath}>Click here to go home</Link>
        )}
        {children}
      </div>
    </div>
  );
};

export * from './RedirectLink';

import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export type TNotFoundProps = PropsWithChildren<{
  homePath?: string;
  pathnameColor?: string;
}>;
export const NotFound: FC<TNotFoundProps> = ({
  homePath,
  pathnameColor,
  children,
}) => {
  const { pathname } = useLocation();
  return (
    <div className='fill-screen center'>
      <div className='column-start gap-4 w-core'>
        <h2>404 Not Found</h2>
        <div className='row-wrap gap-2'>
          <span>The requested page </span>
          <b style={{ color: pathnameColor }}>{pathname}</b>
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

import { PAGE_RECORD } from '@app/routes/constants/pages';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from './Link';
import { Title } from './Title';

export const Main: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === PAGE_RECORD.index.path ? (
        <Title /> 
      ) : (
        <Link />
      )}
    </>
  );
};

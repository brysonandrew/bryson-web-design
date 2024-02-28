import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_RECORDS } from '@app/routes';
import { Link } from './Link';
import { Title } from './Title';

export const Main: FC = () => {
  const { pathname } = useLocation();

  return (
    <h1 className='text-left'>
      {pathname === PAGE_RECORDS.record.index.path ? (
        <Title />
      ) : (
        <Link />
      )}
    </h1>
  );
};

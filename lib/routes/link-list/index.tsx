import { useApp } from '@brysonandrew/app';
import { TLinkProps } from '@brysonandrew/config-types';
import { List } from '@brysonandrew/layout-lists';
import { FC, PropsWithChildren } from 'react';
import {
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

export const LinkList: FC<
  PropsWithChildren<{
    indexPath: string;
    title: string;
    linkProps: TLinkProps[];
  }>
> = ({ indexPath, title, linkProps, children }) => {
  const { pathname } = useLocation();
  const { BackScreen } = useApp();
  if (pathname !== indexPath) return <Outlet />;
  return (
    <div className='fill-screen center'>
      <BackScreen />
      <div className='relative column-start gap-4 w-core'>
        <h2>{title ?? 'Links'}</h2>
        <List
          items={linkProps.map((v) => ({
            key: v.title,
            children: <Link {...v}>{v.title}</Link>,
          }))}
        />
        {children}
      </div>
    </div>
  );
};





































;

































































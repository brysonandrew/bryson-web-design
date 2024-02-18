import { TLinkProps } from '@brysonandrew/config-types';
import { List } from '@brysonandrew/layout-lists';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export const LinkList: FC<
  PropsWithChildren<{
    title: string;
    linkProps: TLinkProps[];
  }>
> = ({ title, linkProps, children }) => {
  return (
    <div className='fill-screen center'>
      <div className='column-start gap-4 w-core'>
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





























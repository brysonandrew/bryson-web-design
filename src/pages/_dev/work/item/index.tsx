import { FC } from 'react';
import { TPropsWithChildren } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { TInitIdItem } from '@pages/_dev/work/config/types';
import { WorkItemAnchor } from '@pages/_dev/work/item/anchor';

export type TWorkItemProps = TPropsWithChildren<
  TInitIdItem & { input?: JSX.Element }
>;
export const WorkItem: FC<TWorkItemProps> = ({
  children,
  input,
  ...config
}) => {
  return (
    <li className="relative group">
      <div
        className={clsx(
          'absolute -inset-1 -bottom-2 bg-black-3',
          input ? 'rounded-b-lg rounded-tr-lg' : ''
        )}
      />
      {/* {isHover && (
        <div
          className="relative fill-4 opacity-20 pointer-events-none"
          style={{
            backgroundImage,
          }}
        />
      )} */}
      <div className="relative row-start-space text-white-1 w-full gap-4">
        {input ? (
          <>{input}</>
        ) : (
          <h3 className="text-2xl">
            {config.q || 'No query'}
          </h3>
        )}
        {children && (
          <div className="row elative visible group-hover:visible">
            {children}
          </div>
        )}
      </div>
      <div className="h-2.5" />
      <WorkItemAnchor {...config} />
    </li>
  );
};

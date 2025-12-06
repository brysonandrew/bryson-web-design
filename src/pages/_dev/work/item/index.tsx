import { FC } from 'react';
import { TPropsWithChildren } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { TInitIdItem } from '@pages/_dev/work/config/types';
import { WorkItemAnchor } from '@pages/_dev/work/item/anchor';
import {
  CUSTOM_CURSOR_KEY,
  useHover,
} from '@brysonandrew/motion-cursor';
import { useWorkState } from '@pages/_dev/work/context';
import { resolveAccessibilityHrefTitles } from '@brysonandrew/utils-attributes';

export type TWorkItemProps = TPropsWithChildren<
  TInitIdItem & { input?: JSX.Element }
>;
export const WorkItem: FC<TWorkItemProps> = ({
  children,
  input,
  ...config
}) => {
  const { pathHandlers, commonState } = useWorkState();
  const params = pathHandlers.params(config.q, commonState);
  const href = pathHandlers.href(params);

  const { handlers, isHover } = useHover(
    CUSTOM_CURSOR_KEY,
    href,
  );
  return (
    <li className="relative group">
      <div
        className={cx(
          'absolute -inset-1 -bottom-2 bg-black-3',
          input ? 'rounded-b-lg rounded-tr-lg' : '',
        )}
      />
      <div className="relative row-start-space text-white-1 w-full gap-4">
        {input ? (
          <>{input}</>
        ) : (
          <h3 className="text-2xl">
            {config.q || 'No query'}
          </h3>
        )}
        {children && (
          <div className="row relative invisible group-hover:visible">
            {children}
          </div>
        )}
      </div>
      <div className="h-2.5" />
      <WorkItemAnchor
        isHover={isHover}
        params={params}
        anchorProps={{
          href,
          ...resolveAccessibilityHrefTitles({
            title: config.q ?? 'upwork',
            href,
          }),
          ...handlers,
        }}
        {...config}
      />
    </li>
  );
};

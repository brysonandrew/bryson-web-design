import { FC } from 'react';
import { TInitIdItem } from '@pages/_dev/work/config/types';
import { WorkItem } from '@pages/_dev/work/item';
import { WorkItemEdit } from '@pages/_dev/work/item/custom/edit';
import { useWorkState } from '@pages/_dev/work/context';
import { keysUuid } from '@brysonandrew/utils';

export type TWorkItemCustomProps = {
  children(props: TInitIdItem): JSX.Element;
};
export const WorkItemCustom: FC<TWorkItemCustomProps> = ({
  children,
}) => {
  const { q } = useWorkState();
  const state = { q, id: 'custom' };
  const next = { q, id: keysUuid() };

  return (
    <ul>
      <WorkItem {...state} input={<WorkItemEdit />}>
        {children(next)}
      </WorkItem>
    </ul>
  );
};

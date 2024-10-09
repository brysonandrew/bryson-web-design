import type { FC } from 'react';
import { WorkButton } from '@pages/_dev/work/button';
import { useWorkState } from '@pages/_dev/work/context';

export const ItemClear: FC = () => {
  const { onQDelete } = useWorkState();
  const title = 'Clear custom search query';
  return (
    <WorkButton onClick={onQDelete} title={title}>
      ⊖
    </WorkButton>
  );
};

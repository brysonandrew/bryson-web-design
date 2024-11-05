import type { FC } from 'react';
import { WorkButton } from '@pages/_dev/work/button';
import { useWorkState } from '@pages/_dev/work/context';
export const ItemSelect: FC = () => {
  const { input } = useWorkState();
  const title = 'Select search query';
  const handleClick = () => {
    if (input) input.select();
  };
  return (
    <WorkButton onClick={handleClick} title={title}>
      {/* ⵊꕯ𝖨𐌆𝙸Ꮖ */}
      {'<'}
    </WorkButton>
  );
};

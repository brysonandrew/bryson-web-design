import type { FC } from 'react';
import { WorkButton } from '@pages/_dev/work/button';
export type TItemSelectProps = { input: HTMLInputElement };
export const ItemSelect: FC<TItemSelectProps> = ({ input }) => {
  const title = 'Select search query';
  const handleClick = () => {
    input.select();
  };
  return (
    <WorkButton onClick={handleClick} title={title}>
      {/* ⵊꕯ𝖨𐌆𝙸Ꮖ */}
      {'<'}
    </WorkButton>
  );
};

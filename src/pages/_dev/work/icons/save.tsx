import type { FC } from 'react';
import { TIconsSvgProps } from '@brysonandrew/svg-icon';
import { IconsSvgGradient18vb24 } from '@pages/_dev/work/icons/18vb24';

export const IconsSave: FC<TIconsSvgProps> = (props) => {
  return (
    <IconsSvgGradient18vb24
    size={16}
      d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2zm4 18h8v-4H8zM20 6h-2V4h2zM6 6h9v4H6z"
      {...props}
    />
  );
};

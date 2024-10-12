import type { FC } from 'react';
import { TIconsSvgProps } from '@brysonandrew/svg-icon';
import { IconsSvgGradient18vb24 } from '@pages/_dev/work/icons/18vb24';

export const IconsAppend: FC<TIconsSvgProps> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
      {...props}
    />
  );
};

import type { FC } from 'react';
import { TIconsSvgProps } from '@brysonandrew/svg-icon';
import { IconsSvgGradient18vb24 } from '@pages/_dev/work/icons/18vb24';

export const IconsReplace: FC<TIconsSvgProps> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M14.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L16.586 8H5a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414m-4.586 10a1 1 0 0 1 0 1.414L7.414 16H19a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0"
      {...props}
    />
  );
};

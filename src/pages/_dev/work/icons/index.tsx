import type { FC } from 'react';
import { resolveUrlId } from '@brysonandrew/utils-attributes';
import {
  TIconsSvgProps,
  IconsSvg,
} from '@brysonandrew/svg-icon';
import { LINEAR_GRADIENT_SVG_ID } from '@pages/_dev/work/gradient';

export const IconsSvgGradient: FC<TIconsSvgProps> = (
  props
) => {
  return (
    <IconsSvg
      size={24}
      viewBox="0 0 24 24"
      fill={resolveUrlId(LINEAR_GRADIENT_SVG_ID)}
      {...props}
    />
  );
};

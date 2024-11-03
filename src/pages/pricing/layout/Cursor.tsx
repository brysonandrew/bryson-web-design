import type { FC } from 'react';
import clsx from 'clsx';
import {
  TElementProps,
  TTitleProps,
} from '@brysonandrew/config-types';
import { useApp } from '@brysonandrew/app';
import { TStyle } from '@app/style';
import { TPricingTitle } from '@brysonandrew/copy';
import { lowerCase } from '@brysonandrew/utils-format';

type TProps = TElementProps & TTitleProps<TPricingTitle>;
export const Cursor: FC<TProps> = ({
  title,
  classValue,
  style,
  ...props
}) => {
  const { BORDER_RADIUS, CLASS } = useApp<TStyle>();
  const type = lowerCase(title);
  const gradientClassValue = CLASS.GRADIENT[type];
  return (
    <>
      Inquire about the
      {
        <span
          className={clsx(
            'px-1 mx-1 title-pricing',
            gradientClassValue,
            classValue,
          )}
          style={{
            borderRadius: BORDER_RADIUS.SM,
            ...style,
          }}
          {...props}
        >
          {title}
        </span>
      }
      package
    </>
  );
};

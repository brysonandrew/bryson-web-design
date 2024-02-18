import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';
import { TBackC } from '@brysonandrew/layout-back/config/types';

export const BackBlur: TBackC = ({
  classValue,
  children,
  ...props
}) => {
  const { BORDER_RADIUS, Back, LIGHT } = useApp();

  return (
    <div
      className={clsx('backdrop-blur-sm', classValue)}
      style={{
        borderRadius: BORDER_RADIUS.XL,
      }}
      {...props}
    >
      <>
        {LIGHT ? (
          <LIGHT.Back
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        ) : (
          <Back
            classValue='opacity-50'
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        )}
        <div className='relative'>{children}</div>
      </>
    </div>
  );
};

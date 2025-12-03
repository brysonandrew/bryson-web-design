import { FC, useMemo } from 'react';
import { cx } from 'class-variance-authority';
import { TDivProps } from '@brysonandrew/config-types';
import { resolveGradient } from '@brysonandrew/color-gradient';
import { resolveVarCss } from '@brysonandrew/color-base';
import { resolveBoxBackground } from '@brysonandrew/utils-box';

type TProps = TDivProps & {
  materialColor: string;
  gapShade: string;
};
export const TextureMesh: FC<TProps> = ({
  classValue,
  style,
  children,
  gapShade = 'rgba(0,0,0,0)',
  materialColor = 'black',
  ...rest
}) => {
  const gradient = useMemo(() => {
    const black06VarCss = resolveVarCss('black-06');
    const result = resolveBoxBackground({
      image: resolveGradient({
        name: 'repeating-conic-gradient',
        parts: ['rgba(0,0,0,0)', black06VarCss],
      }),
      size: '4px 4px',
    });
    return result;
  }, []);
  const className = cx('fill', classValue);

  return (
    <div
      className={className}
      style={{ ...gradient, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};



























































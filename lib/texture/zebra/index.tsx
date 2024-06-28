import { FC, useMemo } from 'react';
import clsx from 'clsx';
import { TDivProps } from '@brysonandrew/config-types';
import { resolveGradient } from '@brysonandrew/color-gradient';

type TProps = TDivProps & {
  materialColor: string;
  gapShade: string;
};
export const TextureZebra: FC<TProps> = ({
  classValue,
  style,
  children,
  gapShade = 'rgba(0,0,0,0)',
  materialColor = 'black',
  ...rest
}) => {
  const gradient = useMemo(() => {
    const result = {
      backgroundImage: resolveGradient({
        name: 'repeating-linear-gradient',
        parts: [
          'to top left',
          'black',
          'black 40px',
          'white 40px',
          'white 80px',
        ],
      }),
      backgroundSize: '4px 4px',
    };
    return result;
  }, []);
  const className = clsx('fill', classValue);

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


































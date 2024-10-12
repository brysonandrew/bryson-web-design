import type { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';
import { WorkTitle } from '@pages/_dev/work/title';
import clsx from 'clsx';
import { TIconsSvgProps } from '@brysonandrew/svg-icon';

type TProps = TDivProps & {
  Icon?: FC<TIconsSvgProps>;
  title: string;
  right?: JSX.Element;
};
export const WorkBox: FC<TProps> = ({
  children,
  Icon,
  title,
  right,
  classValue,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'px-2 py-0.5 pb-3 rounded-xl border border-gray',
        classValue
      )}
      {...props}
    >
      <div className="row-space">
        <WorkTitle Icon={Icon}>{title}</WorkTitle>
        <div>{right}</div>
      </div>
      {children}
    </div>
  );
};

import styled from '@emotion/styled';
import { Range } from '../../components/Inputs';
import { TState } from '../../context/types';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { I } from '@brysonandrew/base/icons/icon';
import { resolveBoxShadow } from '@brysonandrew/config/color/utils/glow/resolveBoxShadow';

const Root = styled.label``;

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  state: TState<number>;
  iconClassValue: string;
};
export const Item: FC<TProps> = ({
  iconClassValue,
  state: [value, setValue],
  title,
  ...props
}) => {
  return (
    <Root className='column-start'>
      <div className='row-space w-full'>
        <div className='row gap-1'>
          <i className={clsx('')} />
          <I icon={iconClassValue} />
          <kbd>{title}</kbd>
        </div>
        <kbd>{value.toFixed(2)}</kbd>
      </div>
      <div className='relative row gap-2'>
        <Range
          style={{ boxShadow: resolveBoxShadow('white') }}
          type='range'
          value={value}
          onChange={({ currentTarget: { value } }) =>
            setValue(+value)
          }
          {...props}
        />
      </div>
    </Root>
  );
};

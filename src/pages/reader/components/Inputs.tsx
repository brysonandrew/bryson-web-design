import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TChildren } from '@t/index';
import { FC, SelectHTMLAttributes } from 'react';

const inputCss = css``;

export const TextInput = styled.textarea`
  ${inputCss}
`;

export const clearNativeCss = css`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  outline-color: #666 !important;
`;

export const Select = styled.select`
  ${inputCss}
  ${clearNativeCss}
`;
export const Option = styled.option``;

export const ArrowDown = () => (
  <div className='absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none z-10'>
    <div className='i-mdi-menu-down w-5 h-4 shrink-0 text-white' />
  </div>
);

type TProps = SelectHTMLAttributes<HTMLSelectElement>;
export const Shell: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <Select
      className='relative rounded-sm px-4 py-2 bg-black-1'
      {...props}
    >
      {children}
      <ArrowDown />
    </Select>
  );
};

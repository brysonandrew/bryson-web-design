import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, SelectHTMLAttributes } from 'react';

const inputCss = css``;

export const TextInput = styled.textarea`
  ${inputCss}
`;

export const Range = styled.input`
  & {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* Special styling for WebKit/Blink */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid var(--gray-1);
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: var(--baby-blue);
    cursor: pointer;
    box-shadow: 1px 1px 1px var(--teal),
      0px 0px 1px var(--baby-blue); /* Add cool effects to your sliders! */
  }

  /* All the same stuff for Firefox */
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px var(--teal),
      0px 0px 1px var(--baby-blue);
    border: 1px solid var(--gray-1);
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: var(--baby-blue);
    cursor: pointer;
  }

  /* All the same stuff for IE */
  &::-ms-thumb {
    box-shadow: 0px 0px 1px var(--baby-blue);
    border: 1px solid var(--gray-1);
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: var(--baby-blue);
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    box-shadow: 0px 0px 1px var(--baby-blue);
    background: var(--black-1);
    border-radius: 1.3px;
    border: 0.2px solid var(--black-1);
  }

  &:focus::-webkit-slider-runnable-track {
    background: var(--black-2);
  }

  &::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    box-shadow: 0px 0px 1px var(--baby-blue);
    background: var(--black-1);
    border-radius: 1.3px;
    border: 0.2px solid var(--black-1);
  }

  &::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: var(--black-1);
    border: 0.2px solid var(--black-1);
    border-radius: 2.6px;
    box-shadow: 0px 0px 1px var(--baby-blue);
  }
  &:focus::-ms-fill-lower {
    background: var(--black-2);
  }
  &::-ms-fill-upper {
    background: var(--black-1);
    border: 0.2px solid var(--black-1);
    border-radius: 2.6px;
    box-shadow: 0px 0px 1px var(--baby-blue);
  }
  &:focus::-ms-fill-upper {
    background: var(--black-2);
  }
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
  <div className='absolute top-1/2 -translate-y-1/2 right-2 i-mdi-menu-down w-5 h-4 shrink-0 text-white pointer-events-none z-10' />
);

type TProps = SelectHTMLAttributes<HTMLSelectElement>;
export const Shell: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <div className='relative'>
      <Select
        className='relative rounded-sm pl-4 pr-8 py-2 bg-black-2'
        {...props}
      >
        {children}
      </Select>
      <ArrowDown />
    </div>
  );
};

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { TClassValueProps } from '@t/index';
import { ButtonHTMLAttributes, FC } from 'react';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 18px;
  height: 18px;
`;

const Inner = styled.div`
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--black-3);
  border-top: 2px solid var(--teal-bright);
  z-index: 1000;
  width: 18px;
  height: 18px;
  animation: spinner 1s infinite linear;
`;

type TProps = TClassValueProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
export const Loading: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root>
      <Global
        styles={css`
          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      />
      <Inner />
    </Root>
  );
};

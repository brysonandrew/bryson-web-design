import { Global, css } from '@emotion/react';

const PLACEHOLDER_MD = 28;
const PLACEHOLDER_SM = 16;
const PLACEHOLDER = 8;

const resolveWidth = (value: number) => `${value * 24}px`;

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          --teal: rgb(45 212 191);
          --teal-04: rgba(45, 212, 191, 0.4);
          --teal-02: rgba(45, 212, 191, 0.2);
          --teal-01: rgba(45, 212, 191, 0.1);

          --teal-bright: rgb(207, 250, 254);
          --teal-bright-04: rgba(207, 250, 254, 0.4);
          --teal-bright-01: rgba(207, 250, 254, 0.1);

          --white: #fff;

          --gray: rgb(68, 68, 68);
          --gray-1: rgb(119, 119, 119);

          --transparent: rgba(0, 0, 0, 0);

          --placeholder-md: scale(${PLACEHOLDER_MD});
          --placeholder-sm: scale(${PLACEHOLDER_SM});
          --placeholder: scale(${PLACEHOLDER});
          --size-placeholder-md: ${resolveWidth(
            PLACEHOLDER_MD,
          )};
          --size-placeholder-sm: ${resolveWidth(
            PLACEHOLDER_SM,
          )};
          --size-placeholder: ${resolveWidth(PLACEHOLDER)};
        }
      `}
    />
  );
};

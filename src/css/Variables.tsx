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

          --baby-blue: rgb(153, 204, 255);
          --baby-blue-01: rgb(153, 204, 255, 0.1);
          --baby-blue-09: rgb(153, 204, 255, 0.9);

          --white: rgb(255, 255, 255);
          --white-01: rgba(255, 255, 255, 0.1);
          --white-02: rgba(255, 255, 255, 0.2);
          --white-08: rgba(255, 255, 255, 0.8);

          --gray: rgb(68, 68, 68);
          --gray-1: rgb(119, 119, 119);

          --black: rgb(0, 0, 0);
          --black-04: rgb(0, 0, 0, 0.4);
          --black-1: rgb(17, 17, 17);
          --black-2: rgb(22, 22, 22);
          --black-2: rgb(34, 34, 34);

          --current: currentColor;
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

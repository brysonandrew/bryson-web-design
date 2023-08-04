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

          --black: rgb(0, 0, 0);
          --black-02: rgb(0, 0, 0, 0.2);
          --black-04: rgb(0, 0, 0, 0.4);
          --black-1: rgb(17, 17, 17);
          --black-2: rgb(22, 22, 22);
          --black-3: rgb(66, 66, 66);

          --gray: rgb(55, 50, 50);
          --gray-1: rgb(77, 72, 72);
          --gray-2: rgb(135, 130, 130);
          --gray-3: rgb(155, 150, 150);

          --white: rgb(210, 207, 205);
          --white-1: rgb(200, 197, 195);
          --white-2: rgb(190, 187, 185);
          --white-3: rgb(185, 182, 180);
          --white-01: rgba(225, 225, 225, 0.1);
          --white-02: rgba(225, 225, 225, 0.2);
          --white-04: rgb(225, 225, 225, 0.4);
          --white-08: rgba(225, 225, 225, 0.8);

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

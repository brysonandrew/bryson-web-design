import { COLOR_VARIABLES_CSS } from '@app/colors';

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
          ${COLOR_VARIABLES_CSS};

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

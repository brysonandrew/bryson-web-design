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
          --white: #fff;
          --placeholder-md: ${PLACEHOLDER_MD};
          --placeholder-sm: ${PLACEHOLDER_SM};
          --placeholder: ${PLACEHOLDER};
          --size-placeholder-md: ${resolveWidth(
            PLACEHOLDER_MD,
          )};
          --size-placeholder-sm: ${resolveWidth(
            PLACEHOLDER_SM,
          )};
          --size-placeholder: ${resolveWidth(
            PLACEHOLDER,
          )};
        }
      `}
    />
  );
};

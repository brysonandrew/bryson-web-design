import { Global, css } from '@emotion/react';
import { COLOR_VARS_CSS } from '@app/colors/constants';
import { PLACEHOLDER_VARS_CSS } from '@app/css';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${COLOR_VARS_CSS};
          ${PLACEHOLDER_VARS_CSS}
        }
      `}
    />
  );
};

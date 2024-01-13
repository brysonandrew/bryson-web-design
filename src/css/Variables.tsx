import { Global, css } from '@emotion/react';
import { CSS_VARS_COLORS } from '@app/colors/constants';
import { CSS_VARS_OTHER } from '@app/css';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${CSS_VARS_COLORS};
          ${CSS_VARS_OTHER}
        }
      `}
    />
  );
};

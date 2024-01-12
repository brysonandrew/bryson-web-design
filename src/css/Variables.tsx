import { COLOR_VARIABLES_CSS } from '@uno/theme/colors';

import { Global, css } from '@emotion/react';
import { CUSTOM_VARIABLES_CSS } from '@app/css';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${COLOR_VARIABLES_CSS};
          ${CUSTOM_VARIABLES_CSS}
        }
      `}
    />
  );
};

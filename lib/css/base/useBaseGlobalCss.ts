import { resolvePlaceholderVarsCss } from '@brysonandrew/placeholder';
import { css } from '@emotion/react';
import { useMemo } from 'react';

type TConfig = { colorVars: string };
export const useBaseGlobalCss = ({
  colorVars,
}: TConfig) => {
  const result = useMemo(() => {
    const PLACEHOLDER_GLOBAL_VARS_CSS =
      resolvePlaceholderVarsCss();

    return css`
      :root {
        ${colorVars}
        ${PLACEHOLDER_GLOBAL_VARS_CSS}
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      }
    `;
  }, []);

  return result;
};

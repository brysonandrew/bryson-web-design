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
      }
    `;
  }, []);

  return result;
};

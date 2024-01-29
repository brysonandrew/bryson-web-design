import {
  Placeholder,
  TPartialPlaceholderProps,
  TPlaceholderProps,
} from '@brysonandrew/placeholder';
import clsx from 'clsx';
import { css, Global } from '@emotion/react';
import { TSvgProps } from '@brysonandrew/types';
import { useMemo } from 'react';
import { resolveVarCssRecord } from '@brysonandrew/utils/css/resolveVarCssRecord';
import { resolvePlaceholderRules } from './resolvePlaceholderRules';

type TConfig = {
  id?: string;
  placeholderProps?: TPlaceholderProps;
  clipPathProps?: TSvgProps;
};
export const withPlaceholder = (config: TConfig = {}) => {
  const {
    id = 'PLACEHOLDER_ID',
    placeholderProps = { clipPathId: id },
    clipPathProps,
  } = config;
  return {
    resolvePlaceholderRules,
    Placeholder: (props: TPartialPlaceholderProps) => (
      <Placeholder {...placeholderProps} {...props} />
    ),
    Responsive: (props: TPartialPlaceholderProps) => (
      <Placeholder
        {...placeholderProps}
        {...props}
        classValue={clsx(
          'origin-center placeholder sm:+placeholder md:++placeholder',
          placeholderProps?.classValue,
          props.classValue,
        )}
      />
    ),
    Small: (props: TPartialPlaceholderProps) => (
      <Placeholder
        {...placeholderProps}
        {...props}
        classValue={clsx(
          'origin-top placeholder',
          placeholderProps?.classValue,
          props.classValue,
        )}
      />
    ),
    Global: (props: TSvgProps) => {
      const cssVars = useMemo(() => {
        const PLACEHOLDER_MD = 28;
        const PLACEHOLDER_SM = 16;
        const PLACEHOLDER = 8;

        const resolveWidth = (value: number) =>
          `${value * 24}px`;

        const result = resolveVarCssRecord({
          'placeholder-md': `scale(${PLACEHOLDER_MD})`,
          'placeholder-sm': `scale(${PLACEHOLDER_SM})`,
          placeholder: `scale(${PLACEHOLDER})`,
          'size-placeholder-md': `${resolveWidth(
            PLACEHOLDER_MD,
          )}`,
          'size-placeholder-sm': `${resolveWidth(
            PLACEHOLDER_SM,
          )}`,
          'size-placeholder': `${resolveWidth(
            PLACEHOLDER,
          )}`,
        });

        return result;
      }, []);

      return (
        <>
          <Global
            styles={css`
              :root {
                ${cssVars}
              }
            `}
          />
          <svg
            width='0'
            height='0'
            {...clipPathProps}
            {...props}
          >
            <clipPath id={id}>
              <path d='M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z' />
            </clipPath>
          </svg>
        </>
      );
    },
  };
};

import {
  Placeholder,
  TPartialPlaceholderProps,
  TPlaceholderProps,
} from '@brysonandrew/placeholder';
import clsx from 'clsx';
import { TSvgProps } from '@brysonandrew/config-types';
import { resolvePlaceholderRules } from './resolvePlaceholderRules';
import { resolvePlaceholderVarsCss } from '@brysonandrew/placeholder/resolvePlaceholderVarsCss';

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
  const VARS_CSS = resolvePlaceholderVarsCss();
  return {
    resolvePlaceholderRules,
    GLOBAL: {
      VARS_CSS,
      ClipPath: (props: TSvgProps) => (
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
      ),
    },
    Blank: (props: TPartialPlaceholderProps) => (
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
  };
};

export type TWithPlaceholder = ReturnType<
  typeof withPlaceholder
>;

import { TSoundConfig } from '@brysonandrew/app/config/types/sound';
import { Context } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
} from './layout';
import { DEFAULT_STYLE } from '../constants/style';
import {
  TChildrenHandlerProps,
  TPropsWithChildren,
  TPropsWithChildrenHandler,
  TTDeepPartial,
} from '@brysonandrew/config-types';
import { TState } from '@brysonandrew/config-types/state';
import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';

type TDarkStyle = {
  DARK: typeof DEFAULT_STYLE;
};
export type TDefaultStyle = typeof DEFAULT_STYLE &
  TTDeepPartial<TDarkStyle>;
export type TPartialDefaultStyle = Partial<TDefaultStyle>;

export type TAppPackageProps = {
  APP_DESCRIPTION: string;
  APP_TITLE: string;
  APP_VERSION: string;
};

export type TAppBaseProps = TAppPackageProps & {
  FONTS: readonly TResolveWebFontConfig[];
};

export type TBaseConfig = TSoundConfig & TAppBaseProps;

export type TAppInitProps<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TChildrenHandlerProps<TValue<S>> &
  TLayoutRecordProps &
  TBaseConfig & {
    style: S;
  };

export type TAppLayoutProps<
  S extends TPartialDefaultStyle,
> = TPropsWithChildrenHandler<TValue<S>>;

export type TAppProviderProps<
  S extends TPartialDefaultStyle,
> = TPropsWithChildren<TValue<S>>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TLayoutRecordValue &
  TBaseConfig &
  TDefaultStyle &
  S & {
    initState: TState<boolean>;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = Context<TValue<S>>;

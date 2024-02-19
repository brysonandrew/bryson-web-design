import { TSoundConfig } from '@brysonandrew/app/config/types/sound';
import { Context } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
  TPartialLayoutOptionsRecord,
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
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = TChildrenHandlerProps<TValue<S, L>> &
  TLayoutRecordProps &
  TBaseConfig & {
    style: S;
  };

export type TAppLayoutProps<
  S extends TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
  V extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = TPropsWithChildrenHandler<TValue<S, V & L>, V>;

export type TAppProviderProps<
  S extends TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = TPropsWithChildren<TValue<S, L>>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = L &
  TLayoutRecordValue &
  TBaseConfig &
  S &
  TDefaultStyle & {
    initState: TState<boolean>;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = Context<TValue<S, L>>;

import { TSoundConfig } from '@brysonandrew/app/config/types/sound';
import { Context } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
  TPartialLayoutOptionsRecord,
} from './layout';
import {
  TChildrenHandlerProps,
  TPropsWithChildren,
  TPropsWithChildrenHandler,
  TTDeepPartial,
} from '@brysonandrew/config-types';
import { TStateEntry } from '@brysonandrew/config-types/state';
import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';
import { DEFAULT_STYLE } from '@brysonandrew/app/config/constants';

export type TPartialDefaultApp = TPartialDefaultStyle &
  TPartialLayoutOptionsRecord;

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
  T extends TPartialDefaultApp = TPartialDefaultApp,
  V extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
> = TPropsWithChildrenHandler<TValue<T & V>, V>;

export type TAppProviderProps<
  T extends TPartialDefaultApp = TPartialDefaultApp,
> = TPropsWithChildren<TValue<T>>;

export type TValue<
  T extends TPartialDefaultApp = TPartialDefaultApp,
> = T &
  TLayoutRecordValue &
  TBaseConfig &
  TDefaultStyle & {
    initState: TStateEntry<boolean>;
  };

export type TAppContext<
  T extends TPartialDefaultApp = TPartialDefaultApp,
> = Context<TValue<T>>;

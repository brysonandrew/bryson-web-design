import { TSoundConfig } from '@brysonandrew/app/config/types/sound';
import { Context, PropsWithChildren } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
} from './layout';
import { DEFAULT_STYLE } from '../constants/style';
import { TTDeepPartial } from '@brysonandrew/config-types';

type TDarkStyle = {
  DARK: typeof DEFAULT_STYLE;
};
export type TDefaultStyle = typeof DEFAULT_STYLE &
  TTDeepPartial<TDarkStyle>;
export type TPartialDefaultStyle = Partial<TDefaultStyle>;

export type TAppInitProps = {
  APP_DESCRIPTION: string;
  APP_TITLE: string;
  APP_VERSION: string;
};

export type TBaseConfig = TSoundConfig & TAppInitProps;

export type TAppProps<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = PropsWithChildren<
  TLayoutRecordProps &
    TBaseConfig & {
      style: S;
    }
>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TLayoutRecordValue &
  TBaseConfig &
  TDefaultStyle &
  S & {
    isInit: boolean;
    onInit(): void;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = Context<TValue<S>>;

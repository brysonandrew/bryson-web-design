import { TSoundConfig } from '@brysonandrew/app/config/types/sound';
import { Context, PropsWithChildren } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
} from './layout';
import { DEFAULT_STYLE } from '../constants/style';

export type TDefaultStyle = typeof DEFAULT_STYLE;
export type TPartialDefaultStyle = Partial<TDefaultStyle>;

export type TAppProps<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = PropsWithChildren<
  TLayoutRecordProps &
    TSoundConfig & {
      style: S;
    }
>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TLayoutRecordValue &
  TSoundConfig &
  TDefaultStyle &
  S & {
    isInit: boolean;
    onInit(): void;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = Context<TValue<S>>;

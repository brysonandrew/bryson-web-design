import { Context, PropsWithChildren } from 'react';
import {
  TLayoutRecordProps,
  TLayoutRecordValue,
} from '../layout/types';
import { DEFAULT_STYLE } from '../style';

export type TDefaultStyle = typeof DEFAULT_STYLE;
export type TPartialDefaultStyle = Partial<TDefaultStyle>;

export type TSoundRecord = {
  onSound(): void;
};

export type TAppProps<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = PropsWithChildren<
  TLayoutRecordProps &
    Partial<TSoundRecord> & {
      style: S;
    }
>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TLayoutRecordValue &
  TSoundRecord &
  TDefaultStyle &
  S & {
    isInit: boolean;
    onInit(): void;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = Context<TValue<S>>;

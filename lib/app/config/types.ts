import { Context, PropsWithChildren } from 'react';
import { TLayoutRecord } from '../hooks/layout/types';
import { DEFAULT_STYLE } from '../style';

export type TDefaultStyle = typeof DEFAULT_STYLE;
export type TPartialDefaultStyle = Partial<TDefaultStyle>;

export type TSoundRecord = {
  onSound(): void;
};

export type TAppProps<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = PropsWithChildren<
  Partial<TLayoutRecord & TSoundRecord> & {
    style: S;
  }
>;

export type TValue<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = TLayoutRecord &
  TSoundRecord &
  TDefaultStyle &
  S & {
    isInit: boolean;
    onInit(): void;
  };

export type TAppContext<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
> = Context<TValue<S>>;

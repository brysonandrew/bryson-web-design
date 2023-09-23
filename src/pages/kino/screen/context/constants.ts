import { VOIDOP } from '@constants/functions';
import { TContext, TMediaSourceContext } from './types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
  STATUS_CONTEXT,
} from '@pages/kino/config';

const MEDIA_SOURCE_CONTEXT: TMediaSourceContext = {
  mediaSource: null,
  onUpdateMediaSource: VOIDOP,
};

export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...LOGS_CONTEXT,
  ...MEDIA_SOURCE_CONTEXT,
  videoRef: { current: null },
};

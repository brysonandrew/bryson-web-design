import { useState } from 'react';
import {
  STATUS_RECORD,
  resolveStatusHandlers,
} from '../config';
import {
  TStatusRecordContext,
  TStatusRecord,
} from '../config/types';
import {
  TPassedConfig,
  useUpdateStatusRecord,
} from './useStatusHandlers';

export const useStatusRecord = (
  props: TPassedConfig,
): TStatusRecordContext => {
  const [statusRecord, setUpdateStatusRecord] =
    useState<TStatusRecord>(STATUS_RECORD);
  const onUpdateStatusRecord = useUpdateStatusRecord({
    ...props,
    onUpdateStatusRecord: setUpdateStatusRecord,
  });

  return {
    statusRecord,
    statusHandlers: resolveStatusHandlers(
      onUpdateStatusRecord,
    ),
    onUpdateStatusRecord,
  };
};

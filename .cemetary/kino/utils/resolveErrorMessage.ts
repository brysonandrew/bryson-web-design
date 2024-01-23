import { TError, TLogHandler } from '@brysonandrew/color/config/types';

export const resolveErrorMessage = (
  error: TError,
  onLog: TLogHandler,
  source = '',
) => {
  let content =
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string' &&
    error.message;
  content = `${content} ${source}`.trim();
  if (content) {
    onLog(content);
  }
};

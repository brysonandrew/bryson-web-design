import { TItem } from '@pages/projects/config/types';

type TConfig = Pick<TItem, 'time'>;
export const resolveTime = ({ time }: TConfig) => {
  if (typeof time === 'undefined') return 'Present';
  return new Intl.DateTimeFormat('en-UK', {
    month: 'short',
    year: 'numeric',
  }).format(time);
};

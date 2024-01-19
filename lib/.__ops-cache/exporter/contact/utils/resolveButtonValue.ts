import { TStatus } from '../context/types';

export const resolveButtonValue = (status: TStatus) => {
  switch (status) {
    case 'sending':
      return 'Sending...';
    case 'sent':
      return `Thank you, I will write back soon.`;
    case 'error':
      return 'Something went wrong ⚠️';
    default:
      return 'Send';
  }
};

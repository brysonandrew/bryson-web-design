import { useKey } from '@hooks/dom/useKey';

export const useEnterKeyCallback = (
  callback: () => void,
) => {
  useKey({
    handlers: {
      onKeyDown: ({ key }: KeyboardEvent) => {
        if (key === 'Enter') {
          callback();
        }
      },
    },
    isActive: true,
  });
};

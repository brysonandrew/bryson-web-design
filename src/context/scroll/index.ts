import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case 'scroll': {
      return {
        ...state,
        isScroll: value,
      };
    }
    case 'scrolling': {
      return {
        ...state,
        isScrolling: value,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

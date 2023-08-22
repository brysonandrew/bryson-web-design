import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case 'cursor-ready': {
      return {
        ...state,
        isCursorReady: value,
      };
    }
    case 'hover-key': {
      return {
        ...state,
        hoverKey: value,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

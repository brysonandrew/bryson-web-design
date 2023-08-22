import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case 'build-image-record': {
      const { index, mediaRecord } = value;
      const prev = [...state.buildImages];
      prev[index] = mediaRecord;
      return {
        ...state,
        buildImages: prev,
      };
    }

    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

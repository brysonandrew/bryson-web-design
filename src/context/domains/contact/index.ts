import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case 'contact-focus': {
      return {
        ...state,
        contact: {
          ...state.contact,
          focusKey: value,
        },
      };
    }
    case 'contact-status': {
      return {
        ...state,
        contact: {
          ...state.contact,
          status: value,
        },
      };
    }
    case 'contact-form': {
      return {
        ...state,
        contact: {
          ...state.contact,
          form: {
            ...state.contact.form,
            ...value,
          },
        },
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

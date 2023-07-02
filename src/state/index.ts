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
          focusKey: value
        },
      };
    }
    case 'contact-status': {
      return {
        ...state,
        contact: {
          ...state.contact,
          status: value
        },
      };
    }
    case 'contact-state': {
      return {
        ...state,
        contact: {
          ...state.contact,
          form: {
            ...state.contact.form
          }
        },
      };
    }
    case 'image-record': {
      return {
        ...state,
        clientImageRecord: {
          ...state.clientImageRecord,
          ...(value ?? {})
        }
      };
    }
    case 'images': {
      return {
        ...state,
        images: value
      };
    }
    case 'init': {
      return {
        ...state,
        isInit: false,
      };
    }
    case 'scroll': {
      return {
        ...state,
        isScroll: value,
      };
    }
    case 'scroll-start': {
      return {
        ...state,
        isScrollStart: value,
      };
    }
    case 'select-id': {
      return {
        ...state,
        selectId: value,
      };
    }
    case 'toggle-sound': {
      return {
        ...state,
        isSound: !state.isSound,
      };
    }
    case 'cursor-ready': {
      return {
        ...state,
        isCursorReady: value,
      };
    }
    case 'add-motion-value': {
      state.motionValuePairs[value.index] = value.pair;
      return {
        ...state,
        motionValuePairs: [...state.motionValuePairs],
      };
    }
    case 'threshold-reached': {
      return {
        ...state,
        isThreshold: true,
      };
    }
    case 'threshold-lost': {
      return {
        ...state,
        isThreshold: false,
      };
    }
    case 'start-page-transition': {
      return {
        ...state,
        isPageTransitioning: true,
      };
    }
    case 'end-page-transition': {
      return {
        ...state,
        isPageTransitioning: false,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

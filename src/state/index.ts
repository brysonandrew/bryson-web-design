import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case "gallery-drag": {
      return {
        ...state,
        isTransitioningGallery: value
      };
    }
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
    case 'contact-form': {
      return {
        ...state,
        contact: {
          ...state.contact,
          form: {
            ...state.contact.form,
            ...value
          }
        },
      };
    }
    case 'image-record': {
      return {
        ...state,
        projectImageRecord: {
          ...state.projectImageRecord,
          ...(value ?? {})
        }
      };
    }
    case 'image-add': {
      return {
        ...state,
        images: [...state.images, value]
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
        ...(value ? { isScrollStart: true } : {}),
        isScroll: value,
      };
    }
    case 'scroll-start': {
      return {
        ...state,
        ...(value ? {} : { isScroll: false }),
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
    case 'start-motion-blur': {
      return {
        ...state,
        isTransitioningGallery: true,
      };
    }
    case 'end-motion-blur': {
      return {
        ...state,
        isTransitioningGallery: false,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};

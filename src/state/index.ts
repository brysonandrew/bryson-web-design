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
    case 'gallery-drag': {
      return {
        ...state,
        isTransitioningGallery: value,
      };
    }
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
    case 'build-image-record': {
      const { index, mediaRecord } = value;
      const prev = [...state.buildImages];
      prev[index] = mediaRecord;
      return {
        ...state,
        buildImages: prev,
      };
    }
    case 'project-image-record': {
      const { project, filePath, mediaRecord } = value;
      return {
        ...state,
        projectImageRecord: {
          ...state.projectImageRecord,
          [project]: {
            ...(state.projectImageRecord?.[project] ?? {}),
            [filePath]: mediaRecord,
          },
        },
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
    case 'toggle-sound': {
      return {
        ...state,
        isSound: !state.isSound,
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

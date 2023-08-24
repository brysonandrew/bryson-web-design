import type { TState, TReducerAction } from './types';

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case 'gallery-drag': {
      return {
        ...state,
        isTransitioningGallery: value,
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

import { type FC } from 'react';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';
import { TProps as TReadyGalleryProps } from './Ready';
import { useViewport } from '@lib/context/viewport';
import { TChildren } from '@lib/types/dom';
import { TProjectKey } from '@pages/projects/config/types';

type TProps<T> = {
  children(props: TReadyGalleryProps<T>): TChildren;
};
export const Shell: FC<TProps<TProjectKey>> = ({
  children,
}) => {
  const currProject = useCurrProject();
  const isSelectedProject = currProject !== null;
  const { isResizing, width } = useViewport();
  if (
    isSelectedProject &&
    !isResizing &&
    typeof width === 'number'
  ) {
    return (
      <>{children({ currProject, viewportWidth: width })}</>
    );
  }
  return null;
};

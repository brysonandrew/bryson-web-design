import { type FC } from 'react';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { TProps as TReadyGalleryProps } from './Ready';
import { useViewport } from '@context/viewport';
import { TChildren } from '@t/index';
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

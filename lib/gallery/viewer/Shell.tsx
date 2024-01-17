import { useCurrProject } from '@lib/gallery/viewer/hooks/params/useCurrProject';
import { TProps as TReadyGalleryProps } from './Ready';
import { useViewport } from '@lib/context/viewport';
import { TChildren } from '@lib/types/dom';

type TProps<T extends string> = {
  children(props: TReadyGalleryProps<T>): TChildren;
};
export const Shell = <T extends string>({
  children,
}: TProps<T>) => {
  const currProject = useCurrProject<T>();
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

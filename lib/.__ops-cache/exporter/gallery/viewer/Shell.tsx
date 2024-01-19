import { useCurrProject } from '@brysonandrew/gallery/viewer/hooks/params/useCurrProject';
import { TProps as TReadyGalleryProps } from './Ready';
import { useViewport } from '@brysonandrew/context/viewport/useViewport';
import { TChildren } from '@brysonandrew/base/types/dom';

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

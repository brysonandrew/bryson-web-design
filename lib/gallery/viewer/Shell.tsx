import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { TReadyProps } from './ready';
import { useViewport } from '@brysonandrew/viewport';
import { TChildren } from '@brysonandrew/config-types/dom';

type TProps<T extends string> = {
  children(props: TReadyProps<T>): TChildren;
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

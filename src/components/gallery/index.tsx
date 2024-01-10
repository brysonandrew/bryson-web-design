import { type FC } from 'react';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { Main } from './Main';
import { useViewport } from '@context/viewport';

export const Gallery: FC = () => {
  const currProject = useCurrProject();
  const isSelectedProject = currProject !== null;
  const { isResizing, width } = useViewport();
  if (
    isSelectedProject &&
    !isResizing &&
    typeof width === 'number'
  ) {
    return (
      <Main
        currProject={currProject}
        viewportWidth={width}
      />
    );
  }
  return null;
};

export default Gallery;

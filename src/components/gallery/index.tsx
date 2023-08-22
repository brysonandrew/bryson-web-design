import { type FC } from 'react';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { Main } from './Main';
import { useContext } from '@context/viewport/Context';

export const Gallery: FC = () => {
  const currProject = useCurrProject();
  const isSelectedProject = currProject !== null;
  const { isResizing, width } = useContext();
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

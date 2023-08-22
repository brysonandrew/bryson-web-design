import { type FC } from 'react';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { Main } from './Main';
import { useWidth } from '@hooks/gallery/useWidth';

export const Gallery: FC = () => {
  const currProject = useCurrProject();
  const isSelectedProject = currProject !== null;
  const { isResizing, width } = useWidth();
  if (isSelectedProject && !isResizing) {
    return (
        <Main currProject={currProject} width={width} />
    );
  }
  return null;
};

export default Gallery;

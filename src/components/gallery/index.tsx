import { type FC } from 'react';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useWidth } from './hooks/useWidth';
import { Main } from './Main';

export const Gallery: FC = () => {
  const currProject = useCurrProject();
  const isSelectedProject = currProject !== null;
  const { isResizing, width } = useWidth();
  if (isSelectedProject && !isResizing) {
    return <Main currProject={currProject} width={width} />;
  }
  return null;
};

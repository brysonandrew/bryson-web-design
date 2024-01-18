import { PROJECT_KEY } from 'lib/gallery/config/constants';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { resolveTo } from '../../utils/resolveTo';

type TToConfig<T extends string> = {
  project?: T;
  next?: string | number;
};
export const useTo = <T extends string>({
  project: nextProject,
  next,
}: TToConfig<T>) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const project =
    nextProject ?? searchParams.get(PROJECT_KEY);

  if (!project || !next) return pathname;

  return resolveTo({ pathname, project, next });
};

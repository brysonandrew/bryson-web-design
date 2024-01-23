import { PROJECT_KEY } from '@brysonandrew/gallery/config/constants';
import { resolveTo } from '@brysonandrew/gallery/viewer/utils/resolveTo';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

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

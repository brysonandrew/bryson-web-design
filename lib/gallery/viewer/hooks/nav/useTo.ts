import { PROJECT_KEY } from '@lib/gallery/config/constants';
import { TProjectKey } from '@lib/gallery/config/types';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { resolveTo } from '../../utils/resolveTo';

type TToConfig = {
  project?: TProjectKey;
  next?: string | number;
};
export const useTo = ({
  project: nextProject,
  next,
}: TToConfig) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const project =
    nextProject ?? searchParams.get(PROJECT_KEY);

  if (!project || !next) return pathname;

  return resolveTo({ pathname, project, next });
};

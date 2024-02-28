import { TUpworkFilterConfig } from '@pages/_dev/work/config/types';
import { resolveUpworkParams } from '@pages/_dev/work/item/resolveUpworkParams';
import { useSearchParams } from 'react-router-dom';

export const useUpworkParams = (
  config: TUpworkFilterConfig = {},
) => {
  const params = resolveUpworkParams(config);
  const [searchParams] = useSearchParams(params);
  return searchParams.toString();
};

export const resolveHref = (params: string) =>
  `https://www.upwork.com/nx/search/jobs/?${params}`;

import { resolveUpworkParams } from '@pages/_dev/work/item/resolveUpworkParams';
import { TCommonState } from '@pages/_dev/work/context';
import { useSearchParams } from 'react-router-dom';

export const useUpworkParams = (config: TCommonState) => {
  const params = resolveUpworkParams(config);
  const [searchParams] = useSearchParams(params);
  const handler = () => {
    const next = searchParams;
    return next.toString();
  };
  return handler;
};

export const resolveHref = (params: string) =>
  `https://www.upwork.com/nx/search/jobs/?${params}`;

import { useTo } from './useTo';

export const useToFirst = (project: string) => {
  const to = useTo({ project, next: 1 });
  return to;
};

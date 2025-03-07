import { resolveCompositeKey } from '@brysonandrew/utils-key';

export const PROJECT_KEY = 'project';
export const NAME_KEY = 'name';

export const resolveTitleLayoutId = (key: string) =>
  resolveCompositeKey('TITLE', key);


  

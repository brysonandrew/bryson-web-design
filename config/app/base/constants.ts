import packageJson from '@pkg';
import { kebabToTitle } from '@brysonandrew/utils/format';

export const APP_TITLE = kebabToTitle(packageJson.name);
export const APP_DESCRIPTION = packageJson.description;
export const VERSION = packageJson.version;

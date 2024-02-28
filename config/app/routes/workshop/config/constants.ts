import { TWorkshopPageTitle } from '@app/routes/workshop/config/types';
import { TPath } from '@brysonandrew/routes';
import * as WorkshopPages from '@pages/_workshop';

export const WORKSHOP_PATH_KEYS = Object.keys(
  WorkshopPages,
) as TWorkshopPageTitle[];

export const WORKSHOP_PATH_BASE: TPath<string> =
  '/workshop';

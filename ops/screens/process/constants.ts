export const PUBLIC_DIR = 'assets';
export const SCREENS = 'screens';
export const SCREENS_DIR = [PUBLIC_DIR, SCREENS].join('/');
export const BASE_SCREENS_ENTRY = `${SCREENS_DIR}/`;
export const CANVAS_ORIGINAL_SCREENS =
  'canvas-original-screens';
export const CANVAS_ORIGINAL_SCREENS_PATH = [
  PUBLIC_DIR,
  CANVAS_ORIGINAL_SCREENS,
].join('/');

export const CANVAS_SCREENS_PATH = [
  PUBLIC_DIR,
  SCREENS,
  'canvas',
].join('/');

export const MAIN_SERVICE_WORKER =
  './config/app/service-worker';
export const BUILD_CONTEXT = 'src/pages/index/build';
export const GALLERY_CONTEXT = 'src/shell';

const EXTS = ['png', 'jpg', 'jpeg'] as const;
const PROCESS_EXTS = ['webp', 'md'] as const;
export const DIRS_GLOB = `${SCREENS_DIR}/**`;
export const FILES_GLOB = `${DIRS_GLOB}/[0-9]`;
export const SMALL_W = 320;
export const SMALL_SUFFIX = `-${SMALL_W}w`;
export const LOOKUP_SMALL_PATH = `${BUILD_CONTEXT}/lookup${SMALL_SUFFIX}.json`;
export const LOOKUP_PATH = `${GALLERY_CONTEXT}/lookup.json`;
export const PRECACHE_PATH = `${MAIN_SERVICE_WORKER}/precache.json`;

export const IMAGES_GLOB = `${FILES_GLOB}.(${EXTS.join(
  '|',
)})`;

export const ALL_GLOB = `${FILES_GLOB}.(${[
  ...EXTS,
  ...PROCESS_EXTS,
].join('|')})`;

const EXTLESS = `${FILES_GLOB}[!.png]`;

export const ALL_EXCLUDE_ORIGINAL_GLOBS = [
  LOOKUP_SMALL_PATH,
  LOOKUP_PATH,
  EXTLESS,
  `${FILES_GLOB}${SMALL_SUFFIX}.png`,
  `${FILES_GLOB}.(${[...PROCESS_EXTS].join('|')})`,
];

export const EMPTY_DIRS = [`${DIRS_GLOB}/[0-9]/[0-9]`];

export const EXCLUDE_SMALLS = ['canvas'];

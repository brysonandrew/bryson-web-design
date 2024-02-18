// export const OPACITY_ANIMATION = {
//   'opacity-animation': 'animation-opacity duration-1000',
//   'opacity-light':
//     'dark:opacity-0 opacity-100 opacity-animation',
//   'opacity-dark':
//     'dark:opacity-100 opacity-0 opacity-animation',
//   'opacity-hover':
//     'hover:opacity-100 opacity-0 opacity-animation',
//   'opacity-idle':
//     'hover:opacity-0 opacity-100 opacity-animation',
//   'opacity-group-hover':
//     'group-hover:opacity-100 opacity-0 opacity-animation',
//   'opacity-group-idle':
//     'group-hover:opacity-0 opacity-100 opacity-animation',
// } as const;

export const OPACITY_TRANSITION = {
  'opacity-transition': 'transition-opacity duration-1000',
  'opacity-light':
    'dark:opacity-0 opacity-100 opacity-transition',
  'opacity-dark':
    'dark:opacity-100 opacity-0 opacity-transition',
  'opacity-hover':
    'hover:opacity-100 opacity-0 opacity-transition',
  'opacity-idle':
    'hover:opacity-0 opacity-100 opacity-transition',
  'opacity-group-hover':
    'group-hover:opacity-100 opacity-0 opacity-transition',
  'opacity-group-idle':
    'group-hover:opacity-0 opacity-100 opacity-transition',
} as const;

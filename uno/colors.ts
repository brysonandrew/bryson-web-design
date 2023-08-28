

export const COLORS = {
  teal: 'var(--teal)',
  'teal-01': 'var(--teal-01)',
  'teal-02': 'var(--teal-02)',
  'teal-04': 'var(--teal-04)',

  'teal-bright': 'var(--teal-bright)',
  'teal-bright-08': 'var(--teal-bright-08)',
  'teal-bright-04': 'var(--teal-bright-04)',
  'teal-bright-01': 'var(--teal-bright-01)',

  'baby-blue': 'var(--baby-blue)',
  'baby-blue-01': 'var(--baby-blue-01)',
  'baby-blue-02': 'var(--baby-blue-02)',
  'baby-blue-04': 'var(--baby-blue-04)',
  'baby-blue-09': 'var(--baby-blue-09)',

  black: 'var(--black)',
  'black-02': 'var(--black-02)',
  'black-04': 'var(--black-04)',
  'black-09': 'var(--black-09)',

  'black-1': 'var(--black-1)',
  'black-2': 'var(--black-2)',
  'black-3': 'var(--black-3)',

  gray: 'var(--gray)',
  'gray-1': 'var(--gray-1)',
  'gray-2': 'var(--gray-2)',
  'gray-3': 'var(--gray-3)',

  white: 'var(--white)',
  'white-1': 'var(--white-1)',
  'white-2': 'var(--white-2)',
  'white-3': 'var(--white-3)',

  'white-01': 'var(--white-01)',
  'white-02': 'var(--white-02)',
  'white-04': 'var(--white-04)',
  'white-09': 'var(--white-09)',

  current: 'var(--current)',
  transparent: 'var(--transparent)',
} as const;

export type TColorKey = keyof typeof COLORS;

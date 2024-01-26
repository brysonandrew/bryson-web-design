export const resolveTime = (time?: Date) => {
  if (typeof time === 'undefined') return 'Present';
  return new Intl.DateTimeFormat('en-UK', {
    month: 'short',
    year: 'numeric',
  }).format(time);
};

import clsx, { ClassValue } from 'clsx';

export const Cross = ({
  classValue,
}: {
  classValue?: ClassValue;
}) => (
  <svg
    className={clsx(classValue)}
    width='12'
    height='12'
    viewBox='0 0 28 28'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
  >
    <path
      d='M28 2.913 16.913 14 28 25.087 25.087 28 14 16.913 2.913 28 0 25.087 11.087 14 0 2.913 2.913 0 14 11.087 25.087 0z'
      fillRule='nonzero'
    />
  </svg>
);

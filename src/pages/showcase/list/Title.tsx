import clsx from 'clsx';

export const Title = ({ color, header }: any) => (
  <div
    className={clsx('uppercase text-4xl text-center')}
    style={{ color }}
  >
    {header}
  </div>
);

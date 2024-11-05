import { cx } from 'class-variance-authority';
import { TBackC } from '@brysonandrew/layout-back/config/types';
import { BackFill } from '@brysonandrew/layout-back/Fill';

export const BackBlur: TBackC = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <div
      className={cx(
        'backdrop-blur-sm',
        classValue,
      )}
      {...props}
    >
      <div className='fill opacity-50'>
        <BackFill {...props} />
      </div>
      <div className='relative'>{children}</div>
    </div>
  );
};

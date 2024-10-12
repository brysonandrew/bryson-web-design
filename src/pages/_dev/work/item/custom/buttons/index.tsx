import { FC } from 'react';
import { ItemClear } from '@pages/_dev/work/item/custom/buttons/clear';
import clsx from 'clsx';
import { ItemSelect } from '@pages/_dev/work/item/custom/buttons/select';

type TProps = { isValue: boolean };
export const WorkItemEditButtons: FC<TProps> = ({
  isValue,
}) => {
  return (
    <div
      className={clsx(
        'relative hidden group-hover:flex gap-1.5'
      )}
    >
      {isValue ? (
        <>
          <ItemSelect />
          <ItemClear />
        </>
      ) : (
        <div className="center relative w-10 h-10 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M10.854.146a.5.5 0 0 0-.708 0L0 10.293V14.5a.5.5 0 0 0 .5.5h4.207L14.854 4.854a.5.5 0 0 0 0-.708z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

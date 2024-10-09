import { FC, KeyboardEventHandler, useRef } from 'react';
import { TInputProps } from '@brysonandrew/config-types';
import { useWorkState } from '@pages/_dev/work/context';
import { WorkItemEditButtons } from '@pages/_dev/work/item/custom/buttons';

export const WorkItemEdit: FC<TInputProps> = ({
  children,
  ...props
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { q, pathHandlers, onQChange } = useWorkState();
  const params = pathHandlers.params(q);
  const href = pathHandlers.href(params);

  const isValue = Boolean(q);
  const width = `${q.toString().length}ch`;

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      window.open(href, '_newtab', 'noopener noreferrer');
    }
  };

  return (
    <label className="relative row-space group">
      <div className="hidden group-hover:flex absolute pointer-events-none -inset-1 bg-black-7 rounded-md" />
      <input
        ref={ref}
        className="relative text-2xl"
        value={q}
        onChange={onQChange}
        style={{ width, minWidth: 100 }}
        onKeyDown={handleKeyDown}
        {...props}
      />
 {ref.current &&     <WorkItemEditButtons
        input={ref.current}
        isValue={isValue}
      />}
    </label>
  );
};

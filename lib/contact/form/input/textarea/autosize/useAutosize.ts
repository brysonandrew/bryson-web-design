import { useEffect, useState } from 'react';

type TConfig = {
  textarea: HTMLTextAreaElement | null;
  value: string;
  isResizing?: boolean;
};
export const useAutosize = ({
  textarea,
  value,
  isResizing,
}: TConfig) => {
  const [isInit, setInit] = useState(false);

  useEffect(() => {
    if (textarea !== null && !isResizing) {
      if (!isInit) {
        setInit(true);
      }
      const clone = textarea.cloneNode(
        true,
      ) as HTMLTextAreaElement;
      if (!clone.value) {
        clone.value = 'X'; // otherwise the empty textarea is collapsed
      }
      textarea.after(clone);
      clone.style.height = '0px';
      const next = `${clone.scrollHeight}px`;
      textarea.style.height = next;
      clone.remove();
    }
  }, [textarea, value, isResizing]);

  return isInit;
};

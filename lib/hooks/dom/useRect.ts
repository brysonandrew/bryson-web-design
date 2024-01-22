import { TRect } from '@brysonandrew/types/dom';
import { useState } from 'react';

export const useRect = () => {
  const [rect, setRect] = useState<TRect>(null);
  const handleUpdate = (element?: Element) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      setRect(rect);
    }
  };

  return { rect, onUpdate: handleUpdate };
};

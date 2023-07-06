
import { useEffect } from 'react';

export const useHtmlTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
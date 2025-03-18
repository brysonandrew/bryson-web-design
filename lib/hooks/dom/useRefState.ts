import { useState } from "react";

export const useRefState = <T extends HTMLElement>(
  callback: (instance: T) => void,
) => {
  const [element, setElement] = useState<T | null>(
    null,
  );
  
  const handler = (instance: T) => {
    if (instance && !element) {
      setElement(instance);
      callback(instance);
    }
  };
  

  return {element, handler};
};

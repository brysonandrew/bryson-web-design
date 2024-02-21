export const useRefState = <T extends HTMLElement>(
  element: null | T,
  callback: (instance: T) => void,
) => {
  const handler = (instance: T) => {
    if (instance && !element) {
      callback(instance);
    }
  };

  return handler;
};

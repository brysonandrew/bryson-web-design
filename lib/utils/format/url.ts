export const formatUrl = (url: string) => {
  const withoutProtocol = url.replace(
    /(https:|www\.|\/)/g,
    '',
  );
  return `www.${withoutProtocol}`;
};

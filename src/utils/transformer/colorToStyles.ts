type TConfig = string;
export const colorToStylesRecord = (color: TConfig) => ({
  text: { color },
  bg: { backgroundColor: color },
});

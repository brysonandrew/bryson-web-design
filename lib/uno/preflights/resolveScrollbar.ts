export type TResolveScrollbarConfig = {
  thumb: string;
  thumbBorder: string;
  thumbHover: string;
  backgroundColor: string;
  thumbDark?: string;
  thumbBorderDark?: string;
  thumbHoverDark?: string;
  backgroundColorDark?: string;
  width?: number;
  borderWidth?: number;
};
export const resolveScrollbar = ({
  thumb,
  thumbBorder,
  thumbHover,
  backgroundColor,
  thumbDark = thumb,
  thumbBorderDark = thumbBorder,
  thumbHoverDark = thumbHover,
  backgroundColorDark = backgroundColor,
  width = 6,
  borderWidth = 1,
}: TResolveScrollbarConfig) => `
::-webkit-scrollbar {
  background-color: ${backgroundColor};
  width: ${width}px;
}

html.dark ::-webkit-scrollbar {
  background-color: ${backgroundColorDark};
}

::-webkit-scrollbar-thumb {
  background-color: ${thumb};
  border: ${borderWidth}px solid ${thumbBorder};
}

html.dark ::-webkit-scrollbar-thumb {
  background-color: ${thumbDark};
  border: ${borderWidth}px solid ${thumbBorderDark};
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${thumbHover};
}

html.dark ::-webkit-scrollbar-thumb:hover {
  background-color: ${thumbHoverDark};
}
`;

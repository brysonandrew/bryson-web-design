export type TResolveScrollbarConfig = {
  thumb: string;
  thumbBorder: string;
  thumbHover: string;
  backgroundColor: string;
  backgroundImage: string;
  thumbDark?: string;
  thumbBorderDark?: string;
  thumbHoverDark?: string;
  backgroundColorDark?: string;
  backgroundImageDark?: string;
  width?: number;
  borderWidth?: number;
};
export const resolveScrollbar = ({
  thumb,
  thumbBorder,
  thumbHover,
  backgroundColor,
  backgroundImage,
  thumbDark = thumb,
  thumbBorderDark = thumbBorder,
  thumbHoverDark = thumbHover,
  backgroundColorDark = backgroundColor,
  backgroundImageDark = backgroundImage,
  width = 6,
  borderWidth = 1,
}: TResolveScrollbarConfig) => `
::-webkit-scrollbar {
  background-color: ${backgroundColor};
  background-image: ${backgroundImage};
  width: ${width}px;
}

html.dark ::-webkit-scrollbar {
  background-color: ${backgroundColorDark};
  background-image: ${backgroundImageDark};
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

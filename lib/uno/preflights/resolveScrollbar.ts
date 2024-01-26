export type TResolveScrollbarConfig = {
  thumb: string;
  thumbBorder: string;
  thumbHover: string;
  backgroundColor: string;
  thumbDark?: string;
  thumbBorderDark?: string;
  thumbHoverDark?: string;
  backgroundColorDark?: string;
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
}: TResolveScrollbarConfig) => `
::-webkit-scrollbar {
  background-color: ${backgroundColor};
  width: 6px;
}

html.dark ::-webkit-scrollbar {
  background-color: ${backgroundColorDark};
}

::-webkit-scrollbar-thumb {
  background-color: ${thumb};
  border: 1px solid ${thumbBorder};
}

html.dark ::-webkit-scrollbar-thumb {
  background-color: ${thumbDark};
  border: 1px solid ${thumbBorderDark};
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${thumbHover};
}

html.dark ::-webkit-scrollbar-thumb:hover {
  background-color: ${thumbHoverDark};
}
`;

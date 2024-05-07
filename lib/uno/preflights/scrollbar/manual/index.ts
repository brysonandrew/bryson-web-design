export type TPreflightsScrollbarManualCssConfig = {
  scrollbar: string;
  thumb: { idle: string; hover: string };
  dark: Omit<TPreflightsScrollbarManualCssConfig, 'dark'>;
};

export const preflightsScrollbarManualCss = ({
  scrollbar,
  thumb,
  dark,
}: TPreflightsScrollbarManualCssConfig) => `
::-webkit-scrollbar {
  ${scrollbar};
}

html.dark ::-webkit-scrollbar {
  ${dark.scrollbar};
}

::-webkit-scrollbar-thumb {
  ${thumb};
}

html.dark ::-webkit-scrollbar-thumb {
  ${dark.thumb};
}

::-webkit-scrollbar-thumb:hover {
  ${thumb.hover};
}

html.dark ::-webkit-scrollbar-thumb:hover {
  ${dark.thumb.hover};
}
`;

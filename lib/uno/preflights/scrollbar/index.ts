import {
  preflightsScrollbarManualCss,
  TPreflightsScrollbarManualCssConfig,
} from '@brysonandrew/uno-preflights/scrollbar/manual';
import { isPreflightsScrollbarManualCss } from '@brysonandrew/uno-preflights/scrollbar/manual/is';
import {
  boxBackgroundColorCss,
  boxBackgroundImageCss,
} from '@brysonandrew/utils-box/css/background/css';
import { boxBorderShorthandCss } from '@brysonandrew/utils-box/css/border/css';

type TScrollbarStrConfig = {
  backgroundColor: string;
  backgroundImage?: string;
  width?: number;
};
const scrollbarStr = ({
  backgroundColor,
  backgroundImage,
  width,
}: TScrollbarStrConfig) =>
  `${boxBackgroundColorCss(backgroundColor)}${
    backgroundImage
      ? boxBackgroundImageCss(backgroundImage)
      : ''
  }width: ${width}px;`;

export type TPreflightsScrollbarCssConfig =
  | {
      thumb: string;
      thumbBorder: string;
      thumbHover: string;
      backgroundColor: string;
      backgroundImage?: string;
      thumbDark?: string;
      thumbBorderDark?: string;
      thumbHoverDark?: string;
      backgroundColorDark?: string;
      backgroundImageDark?: string;
      width?: number;
      borderWidth?: number;
    }
  | TPreflightsScrollbarManualCssConfig;
export const preflightsScrollbarCss = (
  config: TPreflightsScrollbarCssConfig
) => {
  if (isPreflightsScrollbarManualCss(config)) {
    return preflightsScrollbarManualCss(config);
  }
  const {
    thumb,
    thumbBorder,
    thumbHover,
    backgroundColor,
    backgroundImage = 'none',
    thumbDark = thumb,
    thumbBorderDark = thumbBorder,
    thumbHoverDark = thumbHover,
    backgroundColorDark = backgroundColor,
    backgroundImageDark = backgroundImage,
    width = 6,
    borderWidth = 1,
  } = config;
  const autoConfig = {
    scrollbar: scrollbarStr({
      backgroundColor,
      backgroundImage,
      width,
    }),
    thumb: {
      idle: `${boxBackgroundColorCss(
        thumb
      )}${boxBorderShorthandCss({
        width: borderWidth,
        color: thumbBorder,
      })}`,
      hover: boxBackgroundColorCss(thumbHover),
    },
    dark: {
      scrollbar: `${boxBackgroundColorCss(
        backgroundColorDark
      )}${
        backgroundImageDark
          ? boxBackgroundImageCss(backgroundImageDark)
          : ''
      }`,
      thumb: {
        idle: `${boxBackgroundColorCss(
          thumbDark
        )}${boxBorderShorthandCss({
          width: borderWidth,
          color: thumbBorderDark,
        })}`,
        hover: boxBackgroundColorCss(thumbHoverDark),
      },
    },
  };
  return preflightsScrollbarManualCss(autoConfig);
};

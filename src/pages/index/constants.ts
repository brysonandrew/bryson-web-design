import clsx from "clsx";

export const HEADER_SIZE_Y = 80;
export const HEADER_OFFSET_Y = 100 + HEADER_SIZE_Y;

export const GAP_1 = 600;

export const GAP_2 = GAP_1 + 600;

export const FULL = ["0%", "-100%"];
export const DELAY = 24;
export const DELAY_2 = DELAY * 4;
export const DELTA = GAP_1 + DELAY_2;

export const ROLLING_TEXT_CLASS =
  "relative uppercase bg-white bg-opacity-10 py-2.5 m-1 whitespace-nowrap opacity-40";

export const BAR_CLASS =
  "absolute left-0 top-2 bottom-2 w-2 h-full rounded-sm";

export const BAR_GREEN_CLASS = clsx(
  BAR_CLASS,
  "bg-green shadow-green opacity-40",
);

export const BAR_GREEN_ACTIVE_CLASS = clsx(
  BAR_CLASS,
  "bg-green shadow-green opacity-100",
);

export const BAR_BLACK_CLASS = clsx(
  BAR_CLASS,
  "bg-black shadow-black opacity-40",
);

export const WHITE_FILTER = {
  filter: "grayscale(100%) brightness(400%)",
};

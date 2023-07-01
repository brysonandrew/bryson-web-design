import COLORS from "@windi/config-colors.json";
import clsx from "clsx";

export const LABEL_BASE_CLASS =
  "relative w-full bg-black-dark rounded-sm";
export const LABEL_CLASS = clsx(
  "relative w-full p-2 shadow-teal-bright-04-sm rounded-sm",
  LABEL_BASE_CLASS,
);
export const TEXTAREA_INPUT_CLASS =
  "text-white text-xl py-2 w-full tracking-widest";
export const INPUT_CLASS = clsx(TEXTAREA_INPUT_CLASS, "px-4");

export const textShadow = {
  on: `0 0 10px ${COLORS["red-bright-04"]}, 0 0 20px ${COLORS["red-bright-02"]},
  0 0 30px ${COLORS["red-04"]}, 0 0 40px ${COLORS["red-02"]}, 0 0 50px ${COLORS["red-02"]},
  0 0 60px ${COLORS["red-02"]}, 0 0 70px ${COLORS["red-04"]}`,
  off: `0 0 0px ${COLORS["red-bright-04"]}, 0 0 0px ${COLORS["red-bright-02"]},
  0 0 0px ${COLORS["red-04"]}, 0 0 0px ${COLORS["red-02"]}, 0 0 50px ${COLORS["red-02"]},
  0 0 0px ${COLORS["red-02"]}, 0 0 0px ${COLORS["red-04"]}`,
};

export type TSendingState =
  | "idle"
  | "sending"
  | "sent"
  | "error";

export const resolveButtonValue = (
  sendingState: TSendingState,
) => {
  switch (sendingState) {
    case "sending":
      return "Sending...";
    case "sent":
      return "Thanks for the message 🎉";
    case "error":
      return "Something went wrong ⚠️";
    default:
      return "Send";
  }
};

export const INIT_STATE = {
  from_email: "",
  from_name: "",
  message: "",
};

import clsx from "clsx";

export const LABEL_CLASS = clsx(
  "relative flex items-start w-full bg-black-dark-04",
  "p-2 shadow-teal-02-sm",
);
export const TEXTAREA_INPUT_CLASS =
  "relative text-white text-2xl px-4 py-2 w-full tracking-widest bg-black-dark-04";
export const INPUT_CLASS = clsx(TEXTAREA_INPUT_CLASS, "px-4");

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
  email: "",
  name: "",
  message: "",
};

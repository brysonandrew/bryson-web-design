import COLORS from "@windi/config-colors.json";

export const LABEL_CLASS =
  "relative w-full pl-4 pt-1 shadow-neu-black";
export const INPUT_CLASS =
  "text-white text-md px-4 pb-1 w-full tracking-widest";

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

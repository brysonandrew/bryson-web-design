import COLORS from "@windi/config-colors.json";

export const LABEL_CLASS =
  "relative w-full pl-4 bg-black-08 shadow-neu-black";
export const INPUT_CLASS =
  "text-white text-lg px-4 pt-2 pb-1 w-full tracking-wide";

export const textShadow = {
  on: `0 0 10px ${COLORS["teal-bright-04"]}, 0 0 20px ${COLORS["teal-bright-02"]},
  0 0 30px ${COLORS["teal-04"]}, 0 0 40px ${COLORS["teal-02"]}, 0 0 50px ${COLORS["teal-02"]},
  0 0 60px ${COLORS["teal-02"]}, 0 0 70px ${COLORS["teal-04"]}`,
  off: `0 0 0px ${COLORS["teal-bright-04"]}, 0 0 0px ${COLORS["teal-bright-02"]},
  0 0 0px ${COLORS["teal-04"]}, 0 0 0px ${COLORS["teal-02"]}, 0 0 50px ${COLORS["teal-02"]},
  0 0 0px ${COLORS["teal-02"]}, 0 0 0px ${COLORS["teal-04"]}`,
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
    case "idle":
      return "Send";
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

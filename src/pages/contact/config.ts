import clsx from "clsx";

export const LABEL_CLASS = clsx(
  "relative flex flex-col items-start w-full p-2 bg-black-dark-04 md:flex-row",
);
export const TEXTAREA_INPUT_CLASS =
  "relative text-baby-blue text-2xl px-4 py-2 w-full tracking-widest bg-black-dark-04";
export const INPUT_CLASS = clsx(TEXTAREA_INPUT_CLASS, "px-4");

export type TStatus =
  | "idle"
  | "sending"
  | "sent"
  | "error";

export const resolveButtonValue = (
  status: TStatus,
) => {
  switch (status) {
    case "sending":
      return "Sending...";
    case "sent":
      return `Thank you, I will write back soon.`;
    case "error":
      return "Something went wrong ⚠️";
    default:
      return "Send";
  }
};

type TFormState = {
  email: string;
  name: string;
  message: string;
};

export const INIT_STATE: TFormState = {
  email: "",
  name: "",
  message: "",
};

export type TFormKey = keyof TFormState;

export type TContactState = {
  form: TFormState;
  status: TStatus;
  focusKey: TFormKey | null;
};

export const INIT_CONTACT_STATE: TContactState = {
  form: INIT_STATE,
  status: "idle",
  focusKey: "name"
};

export type TBaseInputProps = {
  name: TFormKey;
};
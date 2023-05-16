import { HEADER_TRANSITION_EXIT, HEADER_TRANSITION } from "@constants/animation";

export const INIT_ANIMATION = {
  initial: { opacity: 0, y: "-100%" },
  animate: { opacity: 1, y: "0%" },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: HEADER_TRANSITION_EXIT,
  },
  transition: HEADER_TRANSITION,
};

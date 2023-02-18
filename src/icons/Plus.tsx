import COLORS from "../../tailwind.config-colors.json";

export const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill={COLORS["teal-bright"]}
  >
    <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  </svg>
);

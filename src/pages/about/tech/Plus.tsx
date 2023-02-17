import COLORS from "../../../../tailwind.config-colors.json";

export const Plus = () => (
  <li className="relative flex items-center justify-center h-6 w-6 z-40">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill={COLORS["white-darkest"]}
    >
      <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
    </svg>
  </li>
);

import { GLASS_PURPLE, WHITE_FADE_4 } from "@styles/colors";

export const BottomPanel = () => (
  <svg
    transform="translate(10 0)"
    width="470"
    height="290"
    viewBox="0 0 152 140"
  >
    <path
      fill={GLASS_PURPLE}
      stroke={WHITE_FADE_4}
      strokeWidth="0.4"
      d="M 159 0 L 1 0 A 200 200 0 0 0 85 135 L 187 85 L 187 41 A 42 -42 0 0 1 159 0"
    />
    <path
      strokeWidth="0.4"
      fill="none"
      stroke={WHITE_FADE_4}
      d="M 139 4 L 5 4 A 200 200 0 0 0 84 129 L 183 82 L 183 61 A 60 60 0 0 1 139 4"
    />
  </svg>
);

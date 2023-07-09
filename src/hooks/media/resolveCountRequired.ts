import { isMobile, isDesktop } from 'react-device-detect';

export const resolveCountRequired = () => {
  if (isMobile) {
    return 6;
  }
  if (isDesktop) {
    return 10;
  }

  return 8;
};

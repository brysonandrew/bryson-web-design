import { isMobile, isDesktop } from 'react-device-detect';

export const resolveCountRequired = () => {
  if (isMobile) {
    return 4;
  }
  if (isDesktop) {
    return 10;
  }

  return 7;
};

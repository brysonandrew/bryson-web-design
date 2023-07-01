import { FadeDown } from '@components/vertical-fade/FadeDown';

export const Decoration = () => (
  <FadeDown
    {...{
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1 },
      },
      exit: { opacity: 0 },
    }}
  />
);

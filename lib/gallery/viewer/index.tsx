import { Shell } from './Shell';
import { Ready } from './ready';

export const Viewer = <T extends string>() => (
  <Shell<T>>{(props) => <Ready {...props} />}</Shell>
);
export default Viewer;

export * from './Shell';
export * from './ViewerProvider';
export * from './buttons/Close';
export * from './buttons/Left';
export * from './buttons/Nav';
export * from './buttons/Right';
export * from './config/types';
export * from './icons/ArrowLeft';
export * from './icons/ArrowRight';
export * from './icons/Cross';
export * from './icons/Drag';
export * from './icons/Gallery';
export * from './hooks/useDrag';
export * from './hooks/useKeys';
export * from './tips/Touch';
export * from './utils/resolveActiveIndex';
export * from './utils/resolveGalleryWidth';
export * from './utils/resolveTo';
export * from './utils/resolveX';
export * from './ready/Arrows';
export * from './ready/Background';
export * from './ready';
export * from './ready/types';
export * from './hooks/motion/useInitX';
export * from './hooks/motion/useMotionX';
export * from './hooks/motion/useX';
export * from './hooks/nav/useNext';
export * from './hooks/nav/usePrev';
export * from './hooks/nav/useTo';
export * from './hooks/nav/useToFirst';
export * from './hooks/params/useCurrName';
export * from './hooks/params/useCurrParams';
export * from './hooks/params/useCurrProject';
export * from './ready/footer';
export * from './ready/header/ViewerHeader';
export * from './ready/sections/Control';
export * from './ready/sections/Image';
export * from './ready/sections';
export * from './ready/footer/core/DragIcon';
export * from './ready/footer/core/config';
export * from './ready/footer/core';
export * from './ready/sections/zoom/Tag';
export * from './ready/sections/zoom/config';
export * from './ready/sections/zoom';
export * from './ready/footer/core/items/Button';
export * from './ready/footer/core/items';
export * from './ready/footer/core/items/useSorted';
export * from './ready/sections/zoom/hooks/useCursor';
export * from './ready/sections/zoom/hooks/useScale';
export * from './ready/sections/zoom/hooks/useTapEvents';
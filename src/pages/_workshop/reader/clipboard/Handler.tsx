// import { P1 } from "@components/space/P1";
// import { P4 } from "@components/space/P4";
// import styled from "@emotion/styled";
// import { Loading } from "@pages/kino/components/Loading";
// import { motion, AnimatePresence } from "framer-motion";
// import { FC } from "react";
// import { TClipboardContext } from "../context/clipboard/useClipboardContext";

// const Root = styled(motion.div)``;

// type TProps = TClipboardContext;
// export const Handler: FC<TProps> = ({
//   copying,
//   onEnd,
// }) => {
//   return (
//     <AnimatePresence>
//       {copying !== null && (
//         <Root
//           {...FADE_PRESENCE}
//           onClick={onEnd}
//           className='cover-fixed center w-full h-full inset-0 bg-black-07 text-4xl z-50 pointer-events-none'
//         >
//           {copying === 'pending' ? (
//             <>
//               <Loading sizeClassValue='w-20 h-20' />
//               <P1 />
//               <div>copying</div>
//             </>
//           ) : (
//             <div className='column gap-8'>
//               <header className='row'>
//                 <div className='tracking-widest uppercase'>
//                   {copying.title} copied
//                 </div>
//                 <P4 />
//                 <I
//                   icon={
//                     CLIPBOARD_SUCCESS_ICON
//                   }
//                 />
//               </header>
//               <h4 className='text-secondary text-4xl normal-case'>"{copying.value}"</h4>
//             </div>
//           )}
//         </Root>
//       )}
//     </AnimatePresence>
//   );
// };
export const x = 'x';
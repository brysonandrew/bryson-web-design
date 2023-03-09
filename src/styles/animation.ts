import styled from "@emotion/styled";


const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


export const Image = styled.image`
  filter: url(#${"GLITCH_FILTER_I_I"});
  animation: 6s my-animation alternate infinite;

  @keyframes my-animation {
    0% {
      filter: grayscale(100%);
    }
    19% {
      filter: url(#${"GLITCH_FILTER_I_I"});
    }
    20% {
      filter: url(#${"GLITCH_FILTER_I_II"});
    }
    21% {
      filter: url(#${"GLITCH_FILTER_I_III"});
    }
    94% {
      filter: grayscale(100%);
    }
  }
`;

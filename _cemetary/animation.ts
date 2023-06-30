import styled from "@emotion/styled";

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

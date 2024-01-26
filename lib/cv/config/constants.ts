export const BASE_CV_INIT = {
  name: '',
  jobTitle: '',
  url: '',
  email: '',
  phone: {
    display: '',
    withTrunk: '',
  },
};

export const CV_INIT = {
  ...BASE_CV_INIT,
  descriptionParagraphs: [],
  sections: [],
};

const WIDTH = 793;
export const SIZE = {
  height: (WIDTH * 297) / 210,
  width: WIDTH,
};
// A4	210 x 297 mm	8.3 x 11.7 inches

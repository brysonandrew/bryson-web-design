export type TLongReviewValue = string[];
export type TShortReviewValue = string;

type TReviewTypeRecord = {
  long: TLongReviewValue;
  short: TShortReviewValue;
};
export type TReviewType = keyof TReviewTypeRecord;

export type TBaseReview = {
  author: string;
  project: string;
};
export type TRawReview = TBaseReview & TReviewTypeRecord;
export const REVIEWS: TRawReview[] = [
  {
    long: [
      "Andrew is a highly-skilled React Developer eager to bring his skillset to any problem. He takes instruction well, organises his time efficiently and is a pleasant and easy-going team player.",
      "Andrew took on a big challenge to re-invent our Web UI using React and the output we successfully sell to the market today is testament to the success Andrew enjoyed in this engagement.",
      "We look forward to working with Andrew again.",
    ],
    short: "We look forward to working with Andrew again",
    author: "Mick",
    project: "Insight Factory",
  },

  {
    long: [
      "I really much like working with Andrew. He helped me a lot bring my application to the next level and also tinkers with different solutions. Amazing!",
    ],
    short: "I really much like working with Andrew",
    author: "Goetz",
    project: "Porfolio Analyzer",
  },
  {
    long: [
      "Andrew is an exceptional Front-End Developer with a wide knowledge of modern technologies and approaches.",
      "He worked with us on the UI component of a core product with a strong focus on usability and simplicity.",
      "During the implementation process, he went above and beyond in reaching our goals respecting the time and budget constraints, at the same time delivering high-quality code.",
      "He is a great collaborator and an expert in his field, always eager to propose different, and often sensible technological solutions that we may not have considered. His dedication to the project, overtime put into it and overall approachability is incredibly impressive.",
      "We thoroughly enjoyed working with Andrew and he would be an asset to any organization. We hope we will have the opportunity to work together in the future.",
    ],
    short: "Andrew is an exceptional Front-End Developer",
    author: "Conor",
    project: "Epirus",
  },
];

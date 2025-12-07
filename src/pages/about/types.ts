export type TAboutBulletBlock = {
  type: 'bullets';
  title?: string;
  items: string[];
};

export type TAboutBlock = string | TAboutBulletBlock;

export type TAboutSection = {
  title: string;
  blocks: TAboutBlock[];
};

export type TAboutIntroSection = {
  title: string;
  paragraphs: string[];
};

export type TAboutCopy = {
  intro: TAboutIntroSection;
  whatIDo: TAboutSection;
  howIWork: TAboutSection;
  whoIWorkWith: TAboutSection;
  aboutMe: TAboutSection;
  letsWork: TAboutSection;
};
import { STORY } from '@constants/copy';
import { Build } from './build';
import { FC } from 'react';
import { Tech } from './tech';
import { Ending } from './ending';

export type TPage = {
  key: string;
  title?: string;
  Component?: FC;
};

const createPage = (key: string, Component?: FC): TPage => {
  const title = STORY[key] ?? null;
  return {
    key,
    title,
    Component,
  };
};

export const PAGES: TPage[] = [
  createPage('build', Build),
  createPage('tech', Tech),
  createPage('clients'),
  createPage('ending', Ending),
];

export const PAGES_COUNT = PAGES.length;

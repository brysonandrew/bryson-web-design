import { STORY } from '@constants/copy';
import { Build } from './build';
import { FC } from 'react';
import { Tech } from './tech';
import { Clients } from './clients';

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
  createPage('clients', Clients),
  createPage('ending'),
];

export const PAGES_COUNT = PAGES.length;

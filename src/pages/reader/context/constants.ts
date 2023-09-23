import { NOOP } from '@constants/functions';
import type { TContext } from './types';

export const context = new AudioContext();
const master = context.createGain();

const EMPTY_STATE = [null, NOOP];
const EMPTY_NUMBER_STATE = [1, NOOP];

export const CONTEXT = {
  context,
  master,
  speechSynthesisState: EMPTY_STATE,
  selectedVoiceState: EMPTY_STATE,
  phraseState: EMPTY_STATE,
  utteranceState: EMPTY_STATE,
  playModeState: EMPTY_STATE,
  volumeState: EMPTY_NUMBER_STATE,
  rateState: EMPTY_NUMBER_STATE,
  pitchState: EMPTY_NUMBER_STATE,
  langState: EMPTY_STATE,
  voicesState: EMPTY_STATE,
} as TContext;

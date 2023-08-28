import {
  TContactState,
  TFormKey,
  TFormState,
  TStatus,
} from '@pages/contact/config';

export type TContext = TContactState & {
  onFocus(value: TFormKey | null): void;
  onStatus(value: TStatus): void;
  onForm(value: Partial<TFormState>): void;
};

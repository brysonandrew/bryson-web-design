import { TBaseInputProps } from '../../config/types';
import { Name } from './Name';
import {
  TBaseChildren,
  TChildren,
} from '@brysonandrew/config-types/dom';
import {
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { useApp } from '@brysonandrew/app';
import {
  CONTACT_FORM_INPUT_LAYOUT_ID,
  DEFAULT_FOCUS_KEY,
} from '@brysonandrew/contact/config/constants';
import { Clear } from '@brysonandrew/contact/form/input/Clear';
import {
  useHoverKey,
  BIG_CURSOR_KEY,
} from '@brysonandrew/cursor';
import { AnimatePresence } from 'framer-motion';
import { PRESENCE_OPACITY_DELAY } from '@brysonandrew/animation';
import { useContact } from '@brysonandrew/contact/ContactProvider';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';

type TProps<
  T extends HTMLElement,
  P extends InputHTMLAttributes<T> = InputHTMLAttributes<T>,
> = TBaseInputProps &
  Omit<P, 'children'> & {
    renderLabelBack?: TChildren;
    children(
      props: Pick<P, 'style'> & {
        value: string;
        input: T | null;
        resolveRef(instance: T | null): void;
      },
    ): TBaseChildren;
  };
export const Input = <T extends HTMLElement>({
  name,
  disabled,
  renderLabelBack,
  children,
}: TProps<T>) => {
  const inputState = useState<T | null>(null);
  const [input, setInput] = inputState;
  const {
    form,
    focusKey,
    isDisabled: isFormDisabled,
  } = useContact();
  const { LIGHT, Back, BORDER_RADIUS } = useApp();
  const LabelBack = LIGHT?.Back ?? Back;
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    name,
  );
  const value = form?.[name];
  const isValue = Boolean(value);
  const isFocused = focusKey === name;
  const isDisabled = isFormDisabled || disabled;
  const { onForm } = useContact();

  const focusInput = () => {
    if (input) {
      input.focus();
    }
  };

  const blurInput = () => {
    if (input) {
      input.blur();
    }
  };

  useEffect(() => {
    if (!isDisabled) {
      if (
        (focusKey === null && name === DEFAULT_FOCUS_KEY) ||
        isFocused
      ) {
        focusInput();
      }
    }

    return () => {
      blurInput();
    };
  }, [isDisabled, input]);

  const handleClear = (_: MouseEvent) => {
    if (isFormDisabled) return;
    onForm({ [name]: '' });
    focusInput();
  };

  const resolveRef = (instance: T | null) => {
    if (instance && !input) {
      setInput(instance);
    }
  };

  return (
    <label
      className='_contact_label group'
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...handlers}
    >
      <>
        {renderLabelBack ?? (
          <LabelBack classValue='_contact_label-back' />
        )}
        <Name title={name} />
        {children({
          value,
          input,
          resolveRef,
          style: {
            borderRadius: BORDER_RADIUS.MD,
          },
        })}
        <AnimatePresence>
          {isValue && !isFormDisabled && (
            <Clear
              key={name}
              name={name}
              whileHover={{ opacity: 1 }}
              onTap={handleClear}
              {...resolveInteractiveLabels(`Clear ${name}`)}
              {...PRESENCE_OPACITY_DELAY}
              animate={{ opacity: isHover ? 0.8 : 0.2 }}
            />
          )}
        </AnimatePresence>
        {isFocused && LIGHT && (
          <LIGHT.MOTION.Marker
            key={name}
            classValue='z-10'
            layoutId={CONTACT_FORM_INPUT_LAYOUT_ID}
          />
        )}
      </>
    </label>
  );
};

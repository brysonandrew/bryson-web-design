import { useRef, useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { Shell } from "@components/Shell";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import clsx from "clsx";
import { Header } from "./Header";
import { Text } from "./Text";
import { Textarea } from "./Textarea";
import { LABEL_CLASS, TSendingState } from "./config";
import {
  INPUT_CLASS,
  resolveButtonValue,
  INIT_STATE,
} from "./config";

const Root = styled(motion.header)``;
const Form = styled(motion.form)`
  max-width: 512px;
`;
const Input = styled(motion.input)``;

export const Contact = () => {
  const [focus, setFocus] = useState<string | null>(null);
  const [state, setState] = useState(INIT_STATE);
  const [sendingState, setSendingState] =
    useState<TSendingState>("idle");

  const ref = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (event: FormEvent) => {
    setSendingState("sending");
    event.preventDefault();

    if (ref.current === null) return;
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      setSendingState("sent");
    } catch (error) {
      console.error(error);
      setSendingState("error");
    }
  };
  const handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const isDisabled = sendingState !== "idle";

  const handleFocus = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    setFocus(target.name);
  };
  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    if (focus === target.name) {
      setFocus(null);
    }
  };

  const focusHandlers: Pick<
    HTMLMotionProps<"input">,
    "onChange" | "onBlur" | "onFocus"
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };
  const textareaFocusHandlers: Pick<
    HTMLMotionProps<"textarea">,
    "onChange" | "onBlur" | "onFocus"
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };
  return (
    <Shell>
      <Header />
      <div className="py-16" />
      <Root className="flex flex-col">
        <h2
          className="inline my-0 mx-auto text-lg"
          style={{ lineHeight: 2, letterSpacing: 2 }}
        >
          Send me a message
        </h2>
        <div className="py-6" />
        <Form
          className="flex flex-col w-full my-0 mx-auto"
          ref={ref}
          onSubmit={isDisabled ? () => null : sendEmail}
        >
          <div className="py-4" />
          <Text
            title="name"
            autoFocus
            className={INPUT_CLASS}
            disabled={isDisabled}
            name="from_name"
            placeholder=""
            value={state.from_name}
            isFocused={"from_name" === focus}
            {...focusHandlers}
          />
          <div className="py-4" />
          <Text
            title="email"
            className={INPUT_CLASS}
            disabled={isDisabled}
            type="email"
            name="from_email"
            placeholder=""
            value={state.from_email}
            isFocused={"from_email" === focus}
            {...focusHandlers}
          />
          <div className="py-4" />
          <Textarea
            title="message"
            className={clsx(INPUT_CLASS)}
            name="message"
            disabled={isDisabled}
            style={{ marginTop: -4 }}
            value={state.message}
            rows={4}
            cols={50}
            isFocused={"message" === focus}
            {...textareaFocusHandlers}
          />
          <div className="py-8" />
          <label className={LABEL_CLASS}>
            <Input
              className={clsx(
                "w-full flex items-center justify-center cursor-pointer",
              )}
              type="submit"
              value={resolveButtonValue(sendingState)}
              style={{
                opacity: sendingState === "idle" ? 0.5 : 1,
              }}
              whileHover={{ opacity: 1 }}
              disabled={isDisabled}
            />
          </label>
        </Form>
      </Root>
      <div className="py-6" />
    </Shell>
  );
};

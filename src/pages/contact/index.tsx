import { useRef, useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { Shell } from "@components/Shell";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import clsx from "clsx";
import { Header } from "./Header";
import { Text } from "./Text";
import { Textarea } from "./Textarea";
import type { TSendingState } from "./config";
import {
  INPUT_CLASS,
  resolveButtonValue,
  INIT_STATE,
} from "./config";
import { ELEVATED } from "@styles/neu";

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

  const sendEmail = async (e: FormEvent) => {
    setSendingState("sending");
    e.preventDefault();

    if (ref.current === null) return;
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      console.log(result);
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
    console.log(
      "🚀 ~ file: index.tsx:65 ~ handleFocus ~ target",
      target,
    );
    if (!target) return;
    setFocus((target as any).name);
  };
  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    console.log(
      "🚀 ~ file: index.tsx:65 ~ handleFocus ~ target",
      target,
    );
    if (!target) return;
    if (focus === (target as any).name) {
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
      <div className="py-20" />
      <Root className="flex flex-col">
        <h2 className="inline my-0 mx-auto">
          Send me a message
        </h2>
        <div className="py-4" />
        <div className="py-4" />
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
          <Input
            className={clsx(
              "w-full py-2 px-4 flex items-center justify-center cursor-pointer shadow-teal-fade-sm",
              ELEVATED,
            )}
            style={{
              opacity: sendingState === "idle" ? 0.5 : 1,
            }}
            whileHover={{ opacity: 1 }}
            type="submit"
            disabled={isDisabled}
            value={resolveButtonValue(sendingState)}
          />
        </Form>
      </Root>
    </Shell>
  );
};

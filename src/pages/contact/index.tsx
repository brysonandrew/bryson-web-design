import { useRef, useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import clsx from "clsx";
import { Space2 } from "@components/spaces/Space2";
import { Shell } from "@components/Shell";
import { useStyles } from "@styles/useStyles";
import { useFocusSound } from "@hooks/sounds/useFocusSound";
import { Shell as MainShell } from "@main/Shell";
import { TextXl } from "@components/text/TextXl";
import { Text } from "./Text";
import { Textarea } from "./Textarea";
import type { TSendingState } from "./config";
import { INPUT_CLASS, INIT_STATE } from "./config";
import { Submit } from "./Submit";
import { WIDTH_CLASS } from "@styles/styles";

const Root = styled(motion.div)``;
const Form = styled(motion.form)``;

export const Contact = () => {
  useStyles();

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
  const handleFocusSound = useFocusSound();

  const handleFocus = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    setFocus(target.name);
    handleFocusSound();
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
    <MainShell>
      <Shell>
        <Root
          className={clsx(
            "flex flex-col px-4",
            WIDTH_CLASS,
          )}
        >
          <TextXl>I would love to hear from you</TextXl>
          <div className="py-1" />
          <Form
            className={clsx(
              "flex flex-col w-full my-0 mx-auto",
            )}
            ref={ref}
            onSubmit={isDisabled ? () => null : sendEmail}
          >
            <Space2 />
            <motion.div className="relative flex flex-col w-full">
              <Text
                title="name"
                autoFocus
                className={clsx(INPUT_CLASS)}
                disabled={isDisabled}
                name="from_name"
                placeholder=""
                value={state.from_name}
                isFocused={"from_name" === focus}
                required
                {...focusHandlers}
              />
              <Space2 />
              <Text
                title="email"
                className={clsx(INPUT_CLASS)}
                disabled={isDisabled}
                type="email"
                name="from_email"
                placeholder=""
                value={state.from_email}
                isFocused={"from_email" === focus}
                required
                {...focusHandlers}
              />
              <Space2 />
              <Textarea
                title="message"
                className={clsx(INPUT_CLASS)}
                name="message"
                disabled={isDisabled}
                style={{ marginTop: -6 }}
                value={state.message}
                rows={4}
                cols={50}
                isFocused={"message" === focus}
                required
                {...textareaFocusHandlers}
              />
            </motion.div>
            <Space2 />
            <Submit sendingState={sendingState} />
          </Form>
          <div className="py-12" />
        </Root>
      </Shell>
    </MainShell>
  );
};

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
import { Text } from "./Text";
import { Textarea } from "./Textarea";
import type { TSendingState } from "./config";
import { INPUT_CLASS, INIT_STATE } from "./config";
import { Submit } from "./Submit";
import { Shell } from "@components/shell";
import { Space4 } from "@components/spaces/Space4";
import { Space2 } from "@components/spaces/Space2";

const Root = styled(motion.div)``;
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
      <Space2 />
      <Root className="flex flex-col px-4">
        <h2
          className="inline my-0 mx-auto text-lg tracking-widest"
          style={{ lineHeight: 2 }}
        >
          Send me a message
        </h2>
        <Space2 />
        <Form
          className="flex flex-col w-full my-0 mx-auto"
          ref={ref}
          onSubmit={isDisabled ? () => null : sendEmail}
        >
          <Space2 />
          <Text
            title="name"
            autoFocus
            className={clsx(INPUT_CLASS, "pt-1.25")}
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
            className={clsx(INPUT_CLASS, "pt-1.25")}
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
            className={clsx(INPUT_CLASS, "pt-1.5")}
            name="message"
            disabled={isDisabled}
            style={{ marginTop: -4 }}
            value={state.message}
            rows={4}
            cols={50}
            isFocused={"message" === focus}
            required
            {...textareaFocusHandlers}
          />
          <Space2 />
          <Submit sendingState={sendingState} />
        </Form>
      </Root>
    </Shell>
  );
};

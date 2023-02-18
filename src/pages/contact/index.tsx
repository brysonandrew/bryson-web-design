import type {
  ChangeEvent,
  FormEvent} from "react";
import {
  useRef,
  useState,
} from "react";
import { Shell } from "@components/Shell";
import emailjs from "@emailjs/browser";
import { Header } from "./Header";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ELEVATED } from "@styles/neu";

type TSendingState = "idle" | "sending" | "sent" | "error";

const LABEL_CLASS = "w-full px-4 py-1";
const INPUT_CLASS = "px-2 py-1 w-full";

const Root = styled(motion.header)``;
const Form = styled(motion.form)`
  max-width: 512px;
`;
const Label = styled(motion.label)``;
const Line = styled(motion.hr)``;
const Input = styled(motion.input)``;
const Textarea = styled(motion.textarea)``;

export const Contact = () => {
  const init = {
    from_email: "",
    from_name: "",
    message: "",
  };
  const [state, setState] = useState(init);
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
      console.log(
        "🚀 ~ file: index.tsx:44 ~ sendEmail ~ result",
        result,
      );
      setSendingState("sent");

      // if (result === "ok") {
      // }
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
  const resolveButtonValue = () => {
    switch (sendingState) {
      case "sending":
        return "Sending...";
      case "sent":
        return "Thanks for the message 🎉";
      case "error":
        return "Something went wrong ⚠️";
      default:
        return "Send";
    }
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
          <Label
            className={clsx(LABEL_CLASS, ELEVATED)}
            initial={false}
            animate="animate"
            whileFocus="focus"
          >
            <div className="flex items-center">
              <h4 className="whitespace-nowrap text-teal">
                name
              </h4>
              <div className="p-1" />
              <Input
                className={INPUT_CLASS}
                disabled={isDisabled}
                type="text"
                name="from_name"
                placeholder=""
                value={state.from_name}
                onChange={handleChange}
              />
            </div>
            <Line
              className="w-full h-px bg-teal"
              variants={{
                animate: { scaleX: 0 },
                focus: { scaleX: 1 },
              }}
            />
          </Label>
          <div className="py-4" />
          <Label
            className={clsx(LABEL_CLASS, ELEVATED)}
            initial={false}
            animate="animate"
            whileFocus="focus"
          >
            <div className="flex items-center">
              <h4 className="whitespace-nowrap text-teal">
                email
              </h4>
              <div className="p-1" />
              <Input
                className={INPUT_CLASS}
                disabled={isDisabled}
                type="email"
                name="from_email"
                placeholder=""
                value={state.from_email}
                onChange={handleChange}
              />
            </div>
            <Line
              className="w-full h-px bg-teal"
              variants={{
                animate: { scaleX: 0 },
                focus: { scaleX: 1 },
              }}
            />
          </Label>
          <div className="py-4" />
          <Label
            className={clsx(LABEL_CLASS, ELEVATED)}
            initial={false}
            animate="animate"
            whileFocus="focus"
          >
            <div className="flex items-start">
              <h4 className="whitespace-nowrap text-teal">
                message
              </h4>
              <div className="p-1" />
              <Textarea
                className={clsx(INPUT_CLASS)}
                name="message"
                disabled={isDisabled}
                style={{ marginTop: -4 }}
                value={state.message}
                onChange={handleChange}
                rows={4}
                cols={50}
              />
            </div>
          </Label>
          <div className="py-8" />
          <Input
            className="w-full py-2 px-4 flex items-center justify-center hover:underline"
            type="submit"
            disabled={isDisabled}
            value={resolveButtonValue()}
          />
        </Form>
      </Root>
    </Shell>
  );
};

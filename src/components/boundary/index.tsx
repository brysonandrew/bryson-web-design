import type {
  ErrorInfo,
  ComponentType,
  PropsWithChildren,
} from "react";
import { Component } from "react";
import type { TFallbackProps } from "./Fallback";
import { Fallback } from "./Fallback";

export type TBoundaryProps = {
  children: any;
  onError?: (error: Error, info: ErrorInfo) => void;
  Fallback?: ComponentType<TFallbackProps>;
};

export type State =
  | {
      error: Error;
      hasError: true;
    }
  | {
      error: null;
      hasError: false;
    };

export class Boundary extends Component<
  TBoundaryProps,
  State
> {
  static defaultProps = {
    Fallback: Fallback,
  };
  constructor(props: TBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  override componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo
  ) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    } else {
      console.error(
        "Error Rendering Components:",
        error,
        errorInfo
      );
    }
  }

  override shouldComponentUpdate(
    nextProps: PropsWithChildren<TBoundaryProps>,
    nextState: State
  ) {
    if (this.state.hasError !== nextState.hasError) {
      return true;
    }
    if (
      this.state.error &&
      !Object.is(this.props.Fallback, nextProps.Fallback)
    ) {
      return true;
    }
    if (
      !this.state.error &&
      !Object.is(this.props.children, nextProps.children)
    ) {
      return true;
    }
    return false;
  }

  override render() {
    return this.state.hasError ? (
      // @ts-expect-error Thanks to default Props Fallback is always given
      <this.props.Fallback
        reset={this.reset}
        error={this.state.error}
      />
    ) : (
      this.props.children
    );
  }
}

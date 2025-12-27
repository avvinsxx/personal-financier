import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type Props = {
  variant: "filled" | "outlined";
  color: "primary" | "secondary";
  size: "sm" | "md";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant,
  color,
  className,
  children,
  size,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button_${variant}`],
        styles[`button_${size}`],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

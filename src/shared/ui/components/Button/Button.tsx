import Link from "next/link";
import clsx from "clsx";

import { ButtonAsLinkProps, ButtonProps, Props } from "./types";
import styles from "./styles.module.scss";

export const Button = ({
  variant,
  color,
  className,
  children,
  size,
  asLink = false,
  ...props
}: Props) => {
  if (asLink) {
    return (
      <Link
        className={clsx(
          styles.button,
          styles[`button_${variant}`],
          styles[`button_${color}`],
          styles[`button_${size}`],
          className,
        )}
        {...(props as ButtonAsLinkProps)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={clsx(
          styles.button,
          styles[`button_${variant}`],
          styles[`button_${color}`],
          styles[`button_${size}`],
          className,
        )}
        {...(props as ButtonProps)}
      >
        {children}
      </button>
    );
  }
};

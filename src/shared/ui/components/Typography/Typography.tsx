import { JSX, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type Variant = "h3" | "text2";

type Props = PropsWithChildren<{
  variant: Variant;
  as?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  title?: string;
}>;

const VARIANT_ELEMENT: Record<Variant, keyof JSX.IntrinsicElements> = {
  h3: "h3",
  text2: "p",
};

export const Typography = ({
  variant,
  as,
  truncate = false,
  title,
  children,
}: Props) => {
  const Component = as || VARIANT_ELEMENT[variant];

  return (
    <Component
      title={title}
      className={clsx(
        styles[`typography_${variant}`],
        truncate && styles.typography_trunc,
      )}
    >
      {children}
    </Component>
  );
};

import { ElementType, JSX, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type Variant = "logo1" | "logo2" | "h2" | "h3" | "text1" | "text2";

type AllHTMLAttributes =
  | JSX.IntrinsicElements["h1"]
  | JSX.IntrinsicElements["h2"]
  | JSX.IntrinsicElements["h3"]
  | JSX.IntrinsicElements["p"];

type Props = PropsWithChildren<
  {
    variant: Variant;
    as?: keyof JSX.IntrinsicElements;
    truncate?: boolean;
    className?: string;
    weight?: "normal" | "bold";
  } & AllHTMLAttributes
>;

const VARIANT_ELEMENT: Record<Variant, keyof JSX.IntrinsicElements> = {
  logo1: "h1",
  logo2: "h1",
  h2: "h2",
  h3: "h3",
  text1: "p",
  text2: "p",
};

export const Typography = ({
  variant,
  as,
  truncate = false,
  children,
  className,
  weight = "normal",
  ...props
}: Props) => {
  const Component = (as || VARIANT_ELEMENT[variant]) as ElementType;

  return (
    <Component
      className={clsx(
        styles.typography,
        styles[`typography_${variant}`],
        styles[`typography_${weight}`],
        truncate && styles.typography_trunc,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

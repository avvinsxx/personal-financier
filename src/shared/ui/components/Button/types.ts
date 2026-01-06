import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { LinkProps } from "next/link";

type ButtonBaseProps = {
  variant: "filled" | "outlined";
  color: "primary" | "secondary";
  size: "sm" | "md";
};

export type ButtonProps = ButtonBaseProps & {
  asLink?: false;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAsLinkProps = ButtonBaseProps & {
  asLink: true;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps;

export type Props = ButtonProps | ButtonAsLinkProps;

"use client";
import {
  ChangeEvent,
  InputHTMLAttributes,
  RefAttributes,
  useState,
} from "react";
import clsx from "clsx";

import { InputError } from "../InputError";

import styles from "./styles.module.scss";

type Props = {
  label?: string;
  error?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  onChange,
  className,
  inputClassName,
  ...props
}: Props) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value);
    onChange?.(e);
  };

  return (
    <div className={clsx(styles.input, className)}>
      <input
        className={clsx(
          styles.input__input,
          isFilled && styles.input__input_filled,
          error && styles.input__input_error,
          inputClassName,
        )}
        onChange={_onChange}
        {...props}
      />
      {label && (
        <label
          className={clsx(
            styles.input__label,
            error && styles.input__label_error,
          )}
        >
          {label}
        </label>
      )}
      {error && <InputError>{error}</InputError>}
    </div>
  );
};

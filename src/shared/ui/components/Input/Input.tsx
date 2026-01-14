'use client';
import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  RefAttributes,
  useId,
  useState,
} from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography';

import styles from './styles.module.scss';

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
  onBlur,
  onFocus,
  ...props
}: Props) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputId = useId();

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value);
    onChange?.(e);
  };

  const _onFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const _onBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={clsx(styles.input, className)}>
      <div className={styles.input__container}>
        <input
          className={clsx(
            styles.input__input,
            !label && styles.input__input_bordered,
            !label && error && styles.input__input_error,
            inputClassName,
          )}
          onChange={_onChange}
          onFocus={_onFocus}
          onBlur={_onBlur}
          id={inputId}
          {...props}
        />
        {label && (
          <label
            className={clsx(
              styles.input__label,
              error && styles.input__label_error,
              props.disabled && styles.input__label_disabled,
              isFilled && styles.input__label_filled,
            )}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        {label && (
          <fieldset
            className={clsx(
              styles.input__fieldset,
              error && styles.input__fieldset_error,
            )}
          >
            <legend
              className={clsx(
                styles.input__legend,
                (isFocused || isFilled) && styles.input__legend_filled,
              )}
            >
              {label}
            </legend>
          </fieldset>
        )}
      </div>

      {error && <Typography variant="error">{error}</Typography>}
    </div>
  );
};

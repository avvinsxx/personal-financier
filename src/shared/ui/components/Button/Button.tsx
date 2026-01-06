import Link from 'next/link';
import clsx from 'clsx';

import { Loader } from '../Loader';

import { ButtonAsLinkProps, ButtonProps, Props } from './types';
import styles from './styles.module.scss';

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
    const { isLoading = false, ...buttonProps } = props as ButtonProps;
    return (
      <button
        className={clsx(
          styles.button,
          styles[`button_${variant}`],
          styles[`button_${color}`],
          styles[`button_${size}`],
          className,
        )}
        {...buttonProps}
      >
        {isLoading ? <Loader /> : children}
      </button>
    );
  }
};

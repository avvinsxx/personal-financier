import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export const InputError = ({ children }: PropsWithChildren) => {
  return <p className={styles.inputError}>{children}</p>;
};

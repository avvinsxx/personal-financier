import { default as NextLink, LinkProps } from "next/link";

import styles from "./styles.module.scss";

export const Link = (props: LinkProps) => {
  return <NextLink className={styles.link} {...props} />;
};

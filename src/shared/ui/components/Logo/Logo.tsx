import { Typography } from "../Typography";

import styles from "./styles.module.scss";

export const Logo = ({ variant }: { variant: "logo1" | "logo2" }) => {
  return (
    <a className={styles.logo}>
      SUBSCRIPTION TRACKER
      <span className={styles.logo__top}>SUBSCRIPTION TRACKER</span>
      <span className={styles.logo__bottom}>SUBSCRIPTION TRACKER</span>
      <Typography variant="h2" as="span" className={styles.logo__slogan}>
        Следи за всеми подписками в одном месте
      </Typography>
    </a>
  );
};

import { Typography } from "../Typography";

import styles from "./styles.module.scss";

export const Logo = ({ variant }: { variant: "logo1" | "logo2" }) => {
  return (
    <Typography
      variant={variant}
      className={styles.logo}
      data-name="Personal Financier"
    >
      Personal Financier
    </Typography>
  );
};

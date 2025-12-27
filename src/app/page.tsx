import { Button, Logo, Typography } from "@/shared";

import styles from "./styles.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <Logo variant="logo1" />

      <Typography variant="h2" className={styles.page__slogan}>
        Ваш персональный помощник в учете личных финансов
      </Typography>

      <div className={styles.page__buttonsRow}>
        <Button
          color="primary"
          size="md"
          variant="filled"
          asLink
          href="/sign-in"
        >
          Начать
        </Button>
        <Button color="primary" size="md" variant="outlined">
          О проекте
        </Button>
      </div>
    </div>
  );
}

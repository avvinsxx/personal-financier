import { ServiceForm } from "@/modules/services";
import { Typography } from "@/shared";

import styles from "./styles.module.scss";

export default async function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <Typography variant="h2">Создать сервис</Typography>
      </div>
      <ServiceForm />
    </div>
  );
}

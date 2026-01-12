import { FaPlus } from "react-icons/fa";

import { getServices } from "@/data/server";
import { Button, Typography } from "@/shared";
import { ServicesTable } from "@/modules/services";

import styles from "./styles.module.scss";

export default async function Page() {
  const services = await getServices();

  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <Typography variant="h2">Сервисы</Typography>
        <Button
          asLink
          variant="outlined"
          size="md"
          color="secondary"
          href="/dashboard/services/create"
        >
          <FaPlus />
          Добавить
        </Button>
      </div>
      <ServicesTable data={services} />
    </div>
  );
}

import { Skeleton, Typography } from '@/shared';

import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__header}>
        <Typography variant="h2">Сервисы</Typography>
        <Skeleton className={styles.loading__headerButton} />
      </div>
      <div className={styles.loading__tableContainer}>
        <Skeleton className={styles.loading__table} />
      </div>
    </div>
  );
}

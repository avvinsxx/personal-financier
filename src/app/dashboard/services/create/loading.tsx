import { Skeleton, Typography } from '@/shared';

import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Typography variant="h2">Создать сервис</Typography>
      <div className={styles.loading__form}>
        <Skeleton className={styles.loading__input} />
        <Skeleton className={styles.loading__input} />
        <Skeleton className={styles.loading__input} />
        <Skeleton className={styles.loading__button} />
      </div>
    </div>
  );
}

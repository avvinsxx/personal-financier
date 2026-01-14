import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  /** Класс для конфигурации размера скелетона */
  className: string;
};

export const Skeleton = ({ className }: Props) => {
  return <div className={clsx(styles.skeleton, className)}></div>;
};

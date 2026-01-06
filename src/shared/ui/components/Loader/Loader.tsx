import styles from "./styles.module.scss";

export const Loader = () => {
  return <span className={styles.loader}>
  <span className={styles.loader__circle}></span>
  <span className={styles.loader__circle}></span>
  <span className={styles.loader__circle}></span>
  </span>;
};

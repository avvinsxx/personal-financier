import { SidebarNav } from "./SidebarNav";

import styles from "./styles.module.scss";

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div></div>
      <SidebarNav />
    </section>
  );
};

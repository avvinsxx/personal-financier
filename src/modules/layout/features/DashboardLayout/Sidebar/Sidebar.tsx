import { ProfileCard } from "./ProfileCard";
import { SidebarNav } from "./SidebarNav";

import styles from "./styles.module.scss";

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <ProfileCard />
      <SidebarNav />
    </section>
  );
};

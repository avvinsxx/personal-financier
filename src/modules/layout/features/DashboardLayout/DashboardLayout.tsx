import { ReactNode } from "react";

import { Sidebar } from "./Sidebar";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.dashboardLayout__main}>{children}</main>
    </div>
  );
};

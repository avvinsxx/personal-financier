"use client";
import { usePathname } from "next/navigation";
import { BarChart4Bulk, RefreshDollar1Bulk } from "@lineiconshq/free-icons";

import { SidebarLink } from "./SidebarLink";

import styles from "./styles.module.scss";

export const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.sidebarNav__list}>
        <li>
          <SidebarLink
            href="/dashboard"
            active={"/dashboard" === pathname}
            icon={BarChart4Bulk}
          >
            Панель управления
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/dashboard/operations"
            active={"/dashboard/operations" === pathname}
            icon={RefreshDollar1Bulk}
          >
            Операции
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
};

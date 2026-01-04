"use client";
import { usePathname } from "next/navigation";
import {
  DollarCircleOutlined,
  Home2Outlined,
  Layers1Outlined,
} from "@lineiconshq/free-icons";

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
            icon={Home2Outlined}
          >
            Главная
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/dashboard/subscriptions"
            active={pathname.startsWith("/dashboard/subscriptions")}
            icon={DollarCircleOutlined}
          >
            Подписки
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/dashboard/services"
            active={pathname.startsWith("/dashboard/services")}
            icon={Layers1Outlined}
          >
            Сервисы
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
};

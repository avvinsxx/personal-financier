import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { IconData } from "@lineiconshq/free-icons";

import styles from "./styles.module.scss";

type Props = LinkProps & {
  icon: IconData;
  children?: string;
  active: boolean;
};

export const SidebarLink = ({ icon, children, active, ...props }: Props) => {
  return (
    <Link
      className={clsx(styles.sidebarLink, active && styles.sidebarLink_active)}
      {...props}
    >
      <Lineicons icon={icon} /> {children}
    </Link>
  );
};

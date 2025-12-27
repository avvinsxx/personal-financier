import Image from "next/image";
import Lineicons from "@lineiconshq/react-lineicons";
import { MenuMeatballs1Solid } from "@lineiconshq/free-icons";

import { Button, Typography } from "@/shared";

import styles from "./styles.module.scss";

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <Image
        width={48}
        height={48}
        src="https://picsum.photos/48/48"
        alt="Avatar"
        className={styles.profileCard__avatar}
      />
      <div className={styles.profileCard__info}>
        <Typography truncate variant="h3" title="John Doeasdf sa fas f asd">
          John Doeasdf sa fas f asd
        </Typography>
        <Typography
          truncate
          variant="text2"
          title="riley@email.com sadf as fas fd"
        >
          riley@email.com sadf as fas fd
        </Typography>
      </div>
      <Button size="md" variant="outlined" color="primary">
        <Lineicons
          icon={MenuMeatballs1Solid}
          size={24}
          transform="rotate(90)"
        />
      </Button>
    </div>
  );
};

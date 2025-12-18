import { Box, Button, Typography } from "@mui/material";

import { Logo } from "@/shared";

import { styles } from "./styles";

export default function Home() {
  return (
    <Box sx={styles.page}>
      <Logo />
      <Typography variant="h4" sx={styles.page__slogan}>
        Ваш персональный помощник в учете личных финансов
      </Typography>
      <Box sx={styles.page__buttonsRow}>
        <Button variant="contained" size="large">
          Начать
        </Button>
        <Button variant="outlined" size="large">
          О проекте
        </Button>
      </Box>
    </Box>
  );
}

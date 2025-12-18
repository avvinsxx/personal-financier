import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logo1?: React.CSSProperties;
  }

  interface Palette {
    green: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo1: true;
  }
}

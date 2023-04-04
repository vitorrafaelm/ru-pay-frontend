import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: "Inter, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#FF00D6",
      A200: "#FF4D00",
    },
    secondary: {
      main: "#151515",
      "50": "#FDFCFC",
      "100": "#E0DFDF",
      "300": "#ADACAC",
      "500": "#7A7979",
      "700": "#474747",
      "900": "#151515",
    },
    success: {
      main: "#26BF4C",
      "100": "#BFF2CC",
      "300": "#6AE188",
      "500": "#26BF4C",
    },
    error: {
      main: "#FE2712",
      "100": "#FFDFDB",
      "300": "#FE8276",
      "500": "#FE2712",
    },
    warning: {
      main: "#FFBF00",
      "100": "#FFF2CC",
      "300": "#FFD966",
      "500": "#FFBF00",
    },
    info: {
      main: "#0063FC",
      "50": "#E6F0FF",
      "100": "#C7DDFF",
      "300": "#619FFF",
      "500": "#0063FC",
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "87.5%",
  },
};

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
};

export { theme };
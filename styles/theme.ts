import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {},
  colors: {
    navy: {
      base: "#0a192f",
      light: "#172a45",
      lighter: "#303C55",
    },
    slate: {
      base: "#8892b0",
      light: "#a8b2d1",
      lighter: "#ccd6f6",
    },
    white: "#e6f1ff",
    theme: {
      mint: "#42ffef",
      royalBlue: "#0547ff",
    },
  },
});

export default theme;

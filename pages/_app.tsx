import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Head } from "../components/Head";
import { AppProps } from "next/dist/shared/lib/router/router";
import theme from "../styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head title="Lewis Casewell" description="Lewis's projects" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;

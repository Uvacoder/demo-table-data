import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>,
  rootElement
);

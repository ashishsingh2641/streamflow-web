import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "./index.css";
import "./styles.scss";
import App from "./App.tsx";

const theme = createTheme({
  colors: {
    streamflow: [
      "#fbf5ff",
      "#f3e5ff",
      "#e8ccff",
      "#d7a3ff",
      "#c675ff",
      "#b958ff",
      "#aa3bff",
      "#9125df",
      "#761db6",
      "#611992",
    ],
  },
  primaryColor: "streamflow",
  primaryShade: 6,
  defaultRadius: "md",
  fontFamily: '"Open Sans Variable", "Open Sans", sans-serif',
  headings: {
    fontFamily: '"Open Sans Variable", "Open Sans", sans-serif',
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ModalsProvider>
        <Notifications position="top-right" zIndex={2077} />
        <App />
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>,
);

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header1 from "../src/Pages/Header/Header1/Header1";
import Header2 from "../src/Pages/Header/Header2/Header2";
import Header3 from "../src/Pages/Header/Header3/Header3";
import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // @ts-ignore

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header1 setMode={setMode} />
      <Header2 />
      <Header3 />
      <Outlet />
    </ThemeProvider>

  );
}

export default App;

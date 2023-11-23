import React from "react";
import "./App.css";
import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { SideBar } from "./components/Sidebar";
import { createTheme } from "@mui/material/styles";
import { Content } from "./components/Content";

const theme = createTheme({
  typography: {
    fontFamily: [
      "NotoSans",
      "NotoSansThai",
      "Arial",
      "Roboto",
      "'Helvetica Neue'",
      "sans-serif",
    ].join(","),
  },
  shape: {
    borderRadius: 15,
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters>
          <Grid container sx={{ backgroundColor: "rgb(245 245 245)" }}>
            <Grid item>
              <SideBar />
            </Grid>
            <div
              style={{
                marginTop: "4rem",
                marginLeft: "2rem",
              }}
            >
              <Content />
            </div>
            <div
              style={{
                marginTop: "9rem",
                marginLeft: "2rem",
              }}
            >
              Lists
            </div>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

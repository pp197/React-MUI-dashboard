import React from "react";
import "./App.css";
import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { SideBar } from "./components/Sidebar";
import { createTheme } from "@mui/material/styles";

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
          <Grid container>
            <Grid
              item
              sx={{
                border: "1px solid grey",
                backgroundColor: "#d6fff9",
              }}
            >
              <SideBar />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

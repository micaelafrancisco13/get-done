import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Notes from "./components/notes";
import LayoutIn from "./components/layoutIn";
import NoteForm from "./components/noteForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Me from "./components/me";
import Entry from "./components/entry";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#e44232",
    },
    field: {
      main: "#444",
    },
    authText: {
      main: "#0000008f",
    },
  },
  typography: {
    nunito: { fontFamily: "Nunito" },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Graphik"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route
            path="/notes/:id"
            element={
              <LayoutIn>
                <NoteForm />
              </LayoutIn>
            }
          />
          <Route path="/auth/:authId" element={<Entry />} />
          <Route
            path="/notes"
            element={
              <LayoutIn>
                <Notes />
              </LayoutIn>
            }
          />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="/developer" element={<Me />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

{
  /*  */
}
